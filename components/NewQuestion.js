import React, { Component } from 'react';
import { SafeAreaView, Text, TextInput, TouchableOpacity } from 'react-native';
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
          <Text>Would you rather...</Text>
          <TextInput
            onChangeText={(text) => this.setState({ optionOneText: text })}
            value={this.state.optionOneText}
            placeholder='Enter option one here'
          />
          <TextInput
            onChangeText={(text) => this.setState({ optionTwoText: text })}
            value={this.state.optionTwoText}
            placeholder='Enter option two here'
          />
          <TouchableOpacity delayPressIn={0} onPress={() => this.handlePress()}>
            <Text>SUBMIT</Text>
          </TouchableOpacity>
        </Card>
      </SafeAreaView>
    );
  }
}

function mapStateToProps(state) {
  return {
    authedUser: state.authedUser,
  };
}

export default connect()(NewQuestion);
