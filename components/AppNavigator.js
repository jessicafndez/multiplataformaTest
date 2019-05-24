// navigation
import { createStackNavigator, createAppContainer, createBottomTabNavigator } from 'react-navigation';

import MainScreen from './main/MainScreen';
import ItemScreen from './ItemScreen';
import ItemMap from './ItemMap';

import CameraScreen from './CameraScreen';
import CameraScreen_good from './CameraScreen_good';

const AppNav = createStackNavigator({
  MainScreen: { screen: MainScreen },
  ItemScreen: { screen: ItemScreen },
  ItemMap:    { screen: ItemMap },
  CameraScreen: { screen: CameraScreen, navigationOptions: () => ({
    headerStyle: {
      backgroundColor: 'transparent',
    },
    headerTransparent:  true
  }), },
  CameraScreen_good: { screen: CameraScreen_good, navigationOptions: () => ({
    headerStyle: {
      backgroundColor: 'transparent',
    },
    headerTransparent:  true
  }), }
},
{
  initialRouteName: "MainScreen"
},
{
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: 'purple',
    },
  },
});

const AppNavigator = createAppContainer(AppNav);



export default AppNavigator;