import React, { Component } from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import { connect } from 'react-redux';
import { Card, ListItem } from 'react-native-elements';

class Leaderboard extends Component {
  render() {
    const { users, userInfo } = this.props;
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
        {userInfo
          .sort((a, b) => b.totalScore - a.totalScore)
          .map((user) => (
            <ListItem
              key={user.user}
              roundAvatar
              title={users[user.user].name}
              subtitle={
                <View>
                  <Text>Answered questions: {user.answers}</Text>
                  <Text>Created questions: {user.questions}</Text>
                  <Text>Total Score: {user.totalScore}</Text>
                </View>
              }
              leftAvatar={{ source: { uri: users[user.user].avatarURL } }}
            />
          ))}
      </SafeAreaView>
    );
  }
}

function mapStateToProps(state) {
  const userInfo = Object.keys(state.users).map((user) => ({
    user: user,
    answers: Object.keys(state.users[user].answers).length,
    questions: state.users[user].questions.length,
    totalScore:
      Object.keys(state.users[user].answers).length +
      state.users[user].questions.length,
  }));

  return {
    authedUser: state.state,
    users: state.users,
    userInfo,
  };
}

export default connect(mapStateToProps)(Leaderboard);
