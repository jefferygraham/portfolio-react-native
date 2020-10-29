import React, { Component } from 'react';
import { FlatList, TouchableOpacity } from 'react-native';
import { Card } from 'react-native-elements';
import { connect } from 'react-redux';

class Answered extends Component {
  render() {
    const { answeredQuestionIds } = this.props;

    const renderQuestion = ({ item }) => {
      return (
        <TouchableOpacity
          delayPressIn={0}
          // onPress={() =>
          //   navigate('Deck', { deckTitle: item.title, deck: item })
          // }
        >
          <Card containerStyle={{ alignItems: 'center' }}>
            <Card.Title>{item.id}</Card.Title>
          </Card>
        </TouchableOpacity>
      );
    };

    return (
      <FlatList
        data={answeredQuestionIds}
        renderItem={renderQuestion}
        keyExtractor={(item) => item.id}
      />
    );
  }
}

function mapStateToProps(state) {
  const answeredQuestionIds = Object.keys(state.questions)
    .filter(
      (id) =>
        state.questions[id].optionOne.votes.includes(state.authedUser) ||
        state.questions[id].optionTwo.votes.includes(state.authedUser)
    )
    .map((question) => ({
      id: question,
    }));

  console.log(answeredQuestionIds);

  return {
    answeredQuestionIds,
    authedUser: state.authedUser,
    questions: state.questions,
  };
}

export default connect(mapStateToProps)(Answered);
