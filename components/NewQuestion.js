import React, { Component } from 'react';
import {
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { Card } from 'react-native-elements';
import { connect } from 'react-redux';

import { handleAddQuestion } from '../actions/questions';

class NewQuestion extends Component {
  state = {
    optionOneText: '',
    optionTwoText: '',
  };

  handlePress = () => {
    const { optionOneText, optionTwoText } = this.state;
    const { dispatch } = this.props;

    dispatch(handleAddQuestion(optionOneText, optionTwoText));
    this.setState(() => ({
      optionOneText: '',
      optionTwoText: '',
    }));

    this.props.navigation.push('Home', { userName: this.props.authedUser });
  };

  render() {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
        <Card>
          <Card.Title>Create New Question</Card.Title>
          <Card.Divider />
          <Text>Complete the question:</Text>
          <Text style={{ marginBottom: 15 }}>Would you rather...</Text>
          <TextInput
            style={styles.input}
            onChangeText={(text) => this.setState({ optionOneText: text })}
            value={this.state.optionOneText}
            placeholder='Enter option one here'
          />
          <Text style={{ marginBottom: 15, textAlign: 'center' }}>
            ---or---
          </Text>
          <TextInput
            style={styles.input}
            onChangeText={(text) => this.setState({ optionTwoText: text })}
            value={this.state.optionTwoText}
            placeholder='Enter option two here'
          />
          <TouchableOpacity
            style={styles.button}
            delayPressIn={0}
            onPress={() => this.handlePress()}
          >
            <Text>SUBMIT</Text>
          </TouchableOpacity>
        </Card>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 15,
    padding: 5,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#ccc',
    paddingHorizontal: 15,
    paddingVertical: 5,
    borderRadius: 5,
    marginHorizontal: 20,
  },
});

function mapStateToProps(state) {
  return {
    authedUser: state.authedUser,
  };
}

export default connect()(NewQuestion);
