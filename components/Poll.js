import React, { Component } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Switch,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { Card, Avatar } from 'react-native-elements';
import { connect } from 'react-redux';

import { handleSaveQuestionAnswer } from '../actions/questions';

class Poll extends Component {
  state = {
    pickOptionOne: true,
  };

  handlePress = (authedUser, id) => {
    const answer = this.state.pickOptionOne ? 'optionOne' : 'optionTwo';
    const { dispatch } = this.props;
    dispatch(handleSaveQuestionAnswer(authedUser, id, answer));

    this.props.navigation.push('Home', { userName: this.props.authedUser });
  };

  render() {
    const { questionId } = this.props.route.params;
    const { users, questions, authedUser } = this.props;

    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
        <Card>
          <Card.Title>
            {users[questions[questionId].author].name} asks would you rather:
          </Card.Title>
          <Card.Divider />
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}
          >
            <Avatar
              size='medium'
              rounded
              source={{ uri: users[questions[questionId].author].avatarURL }}
              containerStyle={{ borderWidth: 1, marginRight: 15 }}
            />

            <Text>
              {this.state.pickOptionOne
                ? questions[questionId].optionOne.text
                : questions[questionId].optionTwo.text}
            </Text>
          </View>

          <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <Switch
              value={this.state.pickOptionOne}
              trackColor={{ false: 'red', true: 'blue' }}
              thumbColor={this.state.pickOptionOne ? 'red' : 'blue'}
              onValueChange={(value) => this.setState({ pickOptionOne: value })}
              style={{ marginVertical: 15 }}
            />
            <TouchableOpacity
              delayPressIn={0}
              style={styles.button}
              onPress={() => this.handlePress(authedUser, questionId)}
            >
              <Text style={{ color: 'white' }}>SUBMIT</Text>
            </TouchableOpacity>
          </View>
        </Card>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: '#0077cc',
    padding: 15,
    borderRadius: 5,
    marginHorizontal: 20,
  },
});

function mapStateToProps(state) {
  return {
    authedUser: state.authedUser,
    questions: state.questions,
    users: state.users,
  };
}

export default connect(mapStateToProps)(Poll);
