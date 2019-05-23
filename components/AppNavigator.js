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
  CameraScreen: { screen: CameraScreen, navigationOptions: () => ({
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