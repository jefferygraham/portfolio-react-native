import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, Button, Image } from 'react-native';
import { Card } from 'react-native-elements';
import { Picker } from '@react-native-picker/picker';

class Login extends Component {
  state = {
    chosenUser: null,
  };

  render() {
    return (
      <Card containerStyle={{ alignItems: 'center' }}>
        <Image
          source={require('../assets/would-you-rather.jpg')}
          resizeMode='contain'
        />
        <Text style={{ marginBottom: 10 }}>
          The idea with React Native Elements is more about component structure
          than actual design.
        </Text>
        <Picker
          selectedValue={this.state.chosenUser}
          onValueChange={(user, itemIndex) =>
            this.setState({ chosenUser: user })
          }
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
          // icon={<Icon name='code' color='#ffffff' />}
          buttonStyle={{
            borderRadius: 0,
            marginLeft: 0,
            marginRight: 0,
            marginBottom: 0,
          }}
          title='PLAY NOW'
          onPress={() =>
            this.props.navigation.navigate('Home', {
              userId: this.state.chosenUser,
            })
          }
        />
      </Card>
    );
  }
}

function mapStateToProps(state) {
  return {
    users: state.users,
  };
}

export default connect(mapStateToProps)(Login);
