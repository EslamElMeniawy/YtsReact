import React from 'react';
import { createSwitchNavigator, createStackNavigator, createAppContainer } from 'react-navigation';

import SplashScreen from './pages/splash/SplashScreen';
import MainScreen from './pages/main/MainScreen';
import DetailsScreen from './pages/details/DetailsScreen';

const AppStack = createStackNavigator(
  {
    Main: MainScreen,
    Details: DetailsScreen,
  },
  {
    initialRouteName: 'Main',
    headerMode: 'none',
  },
);

const AppNavigator = createSwitchNavigator(
  {
    Splash: SplashScreen,
    App: AppStack,
  },
  {
    initialRouteName: 'Splash',
    headerMode: 'none',
  },
);

const AppContainer = createAppContainer(AppNavigator);

export default function App() {
  return <AppContainer />;
}
