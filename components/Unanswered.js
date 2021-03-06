import React, { Component } from 'react';
import { FlatList, SafeAreaView, StyleSheet, ScrollView } from 'react-native';
import { connect } from 'react-redux';

import Question from './Question';

class Unanswered extends Component {
  render() {
    const { unAnsweredQuestionIds } = this.props;

    const renderQuestion = ({ item }) => {
      return (
        <SafeAreaView style={styles.container}>
          <Question
            navigate={this.props.navigation.navigate}
            id={item.id}
            answered={false}
          />
        </SafeAreaView>
      );
    };

    return (
      <FlatList
        data={unAnsweredQuestionIds}
        renderItem={renderQuestion}
        keyExtractor={(item) => item.id}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});

function mapStateToProps(state) {
  const unAnsweredQuestionIds = Object.keys(state.questions)
    .filter(
      (id) =>
        !(
          state.questions[id].optionOne.votes.includes(state.authedUser) ||
          state.questions[id].optionTwo.votes.includes(state.authedUser)
        )
    )
    .map((question) => ({
      id: question,
    }));

  return {
    unAnsweredQuestionIds,
    authedUser: state.authedUser,
    questions: state.questions,
    users: state.users,
  };
}

export default connect(mapStateToProps)(Unanswered);
