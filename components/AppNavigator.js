// navigation
import { createStackNavigator, createAppContainer } from 'react-navigation';

import MainScreen from './main/MainScreen';
import ItemScreen from './ItemScreen';

const AppNav = createStackNavigator({
  MainScreen: { screen: MainScreen },
  ItemScreen: { screen: ItemScreen }
},
{
  initialRouteName: "MainScreen"
});

const AppNavigator = createAppContainer(AppNav);

export default AppNavigator;