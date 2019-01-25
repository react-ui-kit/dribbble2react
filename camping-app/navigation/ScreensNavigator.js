import React from 'react';
import { createStackNavigator } from 'react-navigation';

import Campings from '../screens/Campings';
import Settings from '../screens/Settings';

export default createStackNavigator({
  Campings: Campings,
  Settings: Settings,
});