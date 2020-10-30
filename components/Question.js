import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native';
import { ListItem, Card, Avatar } from 'react-native-elements';
import { connect } from 'react-redux';

class Question extends Component {
  render() {
    const { questions, users } = this.props;

    return (
      <TouchableOpacity
        delayPressIn={0}
        onPress={
          this.props.answered
            ? () =>
                this.props.navigate('PollResults', {
                  questionId: this.props.id,
                })
            : () => this.props.navigate('Poll', { questionId: this.props.id })
        }
      >
        <Card>
          <ListItem>
            <Avatar
              size='medium'
              rounded
              source={{ uri: users[questions[this.props.id].author].avatarURL }}
              containerStyle={{ borderWidth: 1 }}
            />
            <ListItem.Content>
              <ListItem.Title>
                {users[questions[this.props.id].author].name} wants to know
                would you rather:
              </ListItem.Title>
              <ListItem.Subtitle>
                {questions[this.props.id].optionOne.text} or ...
              </ListItem.Subtitle>
            </ListItem.Content>
          </ListItem>
        </Card>
      </TouchableOpacity>
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

export default connect(mapStateToProps)(Question);
