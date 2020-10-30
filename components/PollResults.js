import React, { Component } from 'react';
import { Text, SafeAreaView, View } from 'react-native';
import { Card } from 'react-native-elements';
import { connect } from 'react-redux';
import { FontAwesome } from '@expo/vector-icons';

class PollResults extends Component {
  render() {
    const { questionId } = this.props.route.params;
    const { users, questions, authedUser } = this.props;
    const question = questions[questionId];
    const optionOneVotes = question.optionOne.votes.length;
    const optionTwoVotes = question.optionTwo.votes.length;
    const totalVotes = optionOneVotes + optionTwoVotes;
    const optionOnePercentage = (optionOneVotes / totalVotes) * 100;
    const optionTwoPercentage = (optionTwoVotes / totalVotes) * 100;

    return (
      <SafeAreaView>
        <Card>
          <Card.Title>
            {users[questions[questionId].author].name} asked would you rather:
            <View>
              <View>
                <Text>
                  {question.optionOne.text}{' '}
                  {users[authedUser].answers[questionId] === 'optionOne' ? (
                    <FontAwesome name='check-square' />
                  ) : null}
                </Text>
              </View>
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
              <Text>
                {optionTwoVotes} out of {totalVotes} votes
              </Text>
            </View>
          </Card.Title>
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
