import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

class Answered extends Component {
  render() {
    console.log(
      '*****************************************************************'
    );
    console.log(this.props.keys);
    return (
      <View>
        <Text>Answered</Text>
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    answeredQuestionIds: Object.keys(state.questions).filter(
      (id) =>
        state.questions[id].optionOne.votes.includes(authedUser) ||
        state.questions[id].optionTwo.votes.includes(authedUser)
    ),
    questions,
  };
}

export default connect(mapStateToProps)(Answered);
