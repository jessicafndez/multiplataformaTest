// navigation
import { createStackNavigator, createAppContainer } from 'react-navigation';

import MainScreen from './main/MainScreen';
import ItemScreen from './ItemScreen';
import ItemMap from './ItemMap';

import CameraScreen from './CameraScreen';

const AppNav = createStackNavigator({
  MainScreen: { screen: MainScreen },
  ItemScreen: { screen: ItemScreen },
  ItemMap:    { screen: ItemMap },
  CameraScreen: { screen: CameraScreen }
},
{
  initialRouteName: "MainScreen"
});

const AppNavigator = createAppContainer(AppNav);

export default AppNavigator;