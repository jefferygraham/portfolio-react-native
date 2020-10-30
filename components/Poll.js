import React, { Component } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Switch,
  TouchableOpacity,
} from 'react-native';
import { Card } from 'react-native-elements';
import { connect } from 'react-redux';

class Poll extends Component {
  state = {
    choice: '',
    pickOptionOne: true,
  };

  render() {
    const { questionId } = this.props.route.params;
    const { users, questions, authedUser } = this.props;

    return (
      <SafeAreaView>
        <Card>
          <Card.Title>
            {users[questions[questionId].author].name} asks
          </Card.Title>
          <Text>{users[questions[questionId].author].avatarURL}</Text>

          <View>
            <Text>
              {this.state.pickOptionOne
                ? questions[questionId].optionOne.text
                : questions[questionId].optionTwo.text}
            </Text>

            <Switch
              value={this.state.pickOptionOne}
              trackColor={{ true: '#5637DD', false: null }}
              onValueChange={(value) => this.setState({ pickOptionOne: value })}
            />
            <TouchableOpacity>
              <Text>SUBMIT</Text>
            </TouchableOpacity>
          </View>
        </Card>
      </SafeAreaView>
    );
  }
}

function mapStateToProps(state) {
  return {
    authedUser: state.authedUser,
    questions: state.questions,
    users: state.users,
  };
}

export default connect(mapStateToProps)(Poll);
