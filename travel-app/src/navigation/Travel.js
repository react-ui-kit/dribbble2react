import { createStackNavigator } from 'react-navigation';

import List from '../screens/list/List';
import Article from '../screens/articles/Article';

export default createStackNavigator(
  {
    List,
    Article
  },
  {
    initialRouteName: "List",
  }
);
