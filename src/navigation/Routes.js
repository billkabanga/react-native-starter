import React from 'react';
import {Router, Stack, Scene} from 'react-native-router-flux';
import Login from '../containers/Login';
import Signup from '../containers/Signup';
import HomePage from '../containers/home';

const Routes = () => {
  return (
    <Router
      barButtonIconStyle={styles.barButtonIconStyle}
      hideNavBar={false}
      navigationBarStyle={styles.navigationBarStyle}>
      <Stack key="root">
        <Scene key="login" component={Login} title="Login" />
        <Scene key="signup" component={Signup} title="Sign Up" />
        <Scene key="home" component={HomePage} title="Home" />
      </Stack>
    </Router>
  );
};

const styles = {
  barButtonIconStyle: {
    tintColor: 'white',
  },
  navigationBarStyle: {
    backgroundColor: '#1565c0',
    color: 'white',
  },
};

export default Routes;
