import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {Actions} from 'react-native-router-flux';

export default class AuthForm extends Component {
  // state = {
  //   email: '',
  //   password: '',
  // };

  goToHome() {
    Actions.home();
  }

  goToLogin() {
    Actions.login();
  }

  render() {
    const {type} = this.props;
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.inputField}
          placeholder="Email"
          keyboardType="email-address"
          placeholderTextColor="#002f6c"
        />
        <TextInput
          style={styles.inputField}
          placeholder="Password"
          secureTextEntry={true}
          ref={input => (this.password = input)}
          placeholderTextColor="#002f6c"
        />

        <TouchableOpacity style={styles.button}>
          <Text
            style={styles.buttonText}
            onPress={type === 'Login' ? this.goToHome : this.goToLogin}>
            {type}
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputField: {
    width: 300,
    backgroundColor: '#eeeeee',
    borderRadius: 25,
    paddingHorizontal: 16,
    fontSize: 16,
    color: '#002f6c',
    marginVertical: 10,
  },
  button: {
    width: 300,
    backgroundColor: '#4f83cc',
    borderRadius: 25,
    marginVertical: 10,
    paddingVertical: 12,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#ffffff',
    textAlign: 'center',
  },
});
