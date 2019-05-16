// navigation
import { createStackNavigator, createAppContainer } from 'react-navigation';

import MainScreen from './main/MainScreen';
import ItemScreen from './ItemScreen';
import ItemMap from './ItemMap';

const AppNav = createStackNavigator({
  MainScreen: { screen: MainScreen },
  ItemScreen: { screen: ItemScreen },
  ItemMap:    { screen: ItemMap }
},
{
  initialRouteName: "MainScreen"
});

const AppNavigator = createAppContainer(AppNav);

export default AppNavigator;