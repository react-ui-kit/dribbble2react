import React from 'react';
import { createDrawerNavigator } from 'react-navigation';

import Analytics from '../screens/Analytics';
import Overview from '../screens/Overview';
import Chat from '../screens/Chat';
import Service from '../screens/Service';
import Settings from '../screens/Settings';
import Map from '../screens/Map';
import Vehicles from '../screens/Vehicles';

export default createDrawerNavigator({
  Analytics,
  Overview,
  Chat,
  Service,
  Settings,
  Map,
  Vehicles,
}, {
  header: null
});
