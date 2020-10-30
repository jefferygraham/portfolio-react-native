import React, { Component } from 'react';
import { Text, SafeAreaView, View } from 'react-native';
import { Card } from 'react-native-elements';
import { connect } from 'react-redux';
import { FontAwesome } from '@expo/vector-icons';
import * as Progress from 'react-native-progress';

class PollResults extends Component {
  render() {
    const { questionId } = this.props.route.params;
    const { users, questions, authedUser } = this.props;
    const question = questions[questionId];
    const optionOneVotes = question.optionOne.votes.length;
    const optionTwoVotes = question.optionTwo.votes.length;
    const totalVotes = optionOneVotes + optionTwoVotes;
    const optionOnePercentage = optionOneVotes / totalVotes;
    const optionTwoPercentage = optionTwoVotes / totalVotes;

    return (
      <SafeAreaView>
        <Card>
          <Card.Title>
            {users[questions[questionId].author].name} asked would you rather:
          </Card.Title>
          <View>
            <View>
              <Text>
                {question.optionOne.text}{' '}
                {users[authedUser].answers[questionId] === 'optionOne' ? (
                  <FontAwesome name='check-square' />
                ) : null}
              </Text>
            </View>
            <Progress.Bar progress={optionOnePercentage} width={200} />
            <Text>
              {optionOneVotes} out of {totalVotes} votes
            </Text>
          </View>
          <View>
            <View>
              <Text>
                {question.optionTwo.text}{' '}
                {users[authedUser].answers[questionId] === 'optionTwo' ? (
                  <FontAwesome name='check-square' />
                ) : null}
              </Text>
            </View>
            <Progress.Bar progress={optionTwoPercentage} width={200} />
            <Text>
              {optionTwoVotes} out of {totalVotes} votes
            </Text>
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

export default connect(mapStateToProps)(PollResults);
