import React, {Component} from 'react';
import {StyleSheet, View, TouchableOpacity, Text} from 'react-native';

import {Actions} from 'react-native-router-flux';

import AuthForm from '../components/AuthForm';

export default class Login extends Component {
  signup() {
    Actions.signup();
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>{'\n'}</Text>
        <Text>{'\n'}</Text>
        <Text>{'\n'}</Text>
        <Text>{'\n'}</Text>
        <AuthForm type="Login" />
        <View style={styles.signupTextCont}>
          <Text style={styles.signupText}>Don't have an account yet?</Text>
          <TouchableOpacity onPress={this.signup}>
            <Text style={styles.signupButton}>Signup</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  signupTextCont: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 16,
    flexDirection: 'row',
  },
  signupText: {
    color: '#5c5656',
    fontSize: 16,
  },
  signupButton: {
    color: '#12799f',
    fontSize: 16,
    fontWeight: '500',
    paddingLeft: 5,
  },
});
