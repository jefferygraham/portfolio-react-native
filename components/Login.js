import React, { Component } from 'react';
import { Text, Button, Image, SafeAreaView, View, Alert } from 'react-native';
import { Card } from 'react-native-elements';

class Login extends Component {
  render() {
    return (
      <Card containerStyle={{ alignItems: 'center' }}>
        <Card.Title>Would You Rather....</Card.Title>
        <Card.Divider />
        <Image
          source={require('../assets/would-you-rather.jpg')}
          resizeMode='contain'
        />
        <Text style={{ marginBottom: 10 }}>
          The idea with React Native Elements is more about component structure
          than actual design.
        </Text>
        <Button
          // icon={<Icon name='code' color='#ffffff' />}
          buttonStyle={{
            borderRadius: 0,
            marginLeft: 0,
            marginRight: 0,
            marginBottom: 0,
          }}
          title='PLAY NOW'
          onPress={() => alert('pressed!')}
        />
      </Card>
    );
  }
}

export default Login;