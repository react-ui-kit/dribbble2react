import React from 'react';
import { createStackNavigator } from 'react-navigation';

import Dashboard from '../screens/Dashboard';
import Settings from '../screens/Settings';

export default createStackNavigator({
  Dashboard,
  Settings,
}, {
  initialRouteName: 'Dashboard'
});