import React from 'react';
import { createStackNavigator } from 'react-navigation';

import List from '../screens/List';
import Article from '../screens/Article';

export default createStackNavigator(
  {
    List,
    Article
  },
  {
    initialRouteName: "List",
  }
);