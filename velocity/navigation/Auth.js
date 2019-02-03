import React from 'react';
import { createStackNavigator } from 'react-navigation';

import Login from '../screens/Login';
import Register from '../screens/Register';
import Forgot from '../screens/Forgot';

export default createStackNavigator({
  Login,
  Register,
  Forgot,
}, {
  defaultNavigationOptions: {
    header: null
  }
});
