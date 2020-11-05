import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Text,
  Button,
  Image,
  SafeAreaView,
  StyleSheet,
  View,
} from 'react-native';
import { Card } from 'react-native-elements';
import { Picker } from '@react-native-picker/picker';

import { setAuthedUser } from '../actions/authedUser';

class Login extends Component {
  state = {
    chosenUser: 'sarahedo',
  };

  handlePress = () => {
    const { dispatch } = this.props;

    dispatch(setAuthedUser(this.state.chosenUser));
  };

  render() {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
        <Card containerStyle={{ padding: 0, alignItems: 'center' }}>
          <Image
            source={require('../assets/would-you-rather.jpg')}
            resizeMode='cover'
          />
          <Text style={styles.baseText}>A game of preference!</Text>
        </Card>
        <View style={{ margin: 15 }}>
          <View>
            <Text style={{ textAlign: 'center', fontSize: 18 }}>
              Choose a user:
            </Text>
          </View>
          <Picker
            selectedValue={this.state.chosenUser}
            onValueChange={(user) => this.setState({ chosenUser: user })}
          >
            {Object.keys(this.props.users).map((user) => (
              <Picker.Item
                key={user}
                label={this.props.users[user].name}
                value={this.props.users[user].id}
              />
            ))}
          </Picker>
          <Button
            buttonStyle={{
              borderRadius: 0,
              marginLeft: 0,
              marginRight: 0,
              marginBottom: 0,
            }}
            title='PLAY NOW!'
            onPress={() => {
              this.props.navigation.navigate('Home', {
                userName: this.props.users[this.state.chosenUser].name,
              });
              this.handlePress();
            }}
          />
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  baseText: {
    margin: 10,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 18,
  },
});

function mapStateToProps(state) {
  return {
    users: state.users,
  };
}

export default connect(mapStateToProps)(Login);
