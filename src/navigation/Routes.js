import React from 'react';
import {Router, Stack, Scene} from 'react-native-router-flux';
import Login from '../containers/Login';
import Signup from '../containers/Signup';

const Routes = () => {
  return (
    <Router
      barButtonIconStyle={styles.barButtonIconStyle}
      hideNavBar={false}
      navigationBarStyle={styles.navigationBarStyle}>
      <Stack key="root">
        <Scene key="login" component={Login} title="Login" />
        <Scene key="signup" component={Signup} title="Sign Up" />
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
