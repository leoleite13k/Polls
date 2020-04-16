import { Platform, StatusBar } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Main from '~/pages/Main';
import Poll from '~/pages/Poll';
import Stats from '~/pages/Stats';

if (Platform.OS === 'ios') {
  StatusBar.setBarStyle('light-content');
}

const Stack = createStackNavigator(
  {
    Home: {
      screen: Main,
      navigationOptions: {
        title: 'Enquetes',
      },
    },
    Poll: {
      screen: Poll,
      navigationOptions: {
        title: 'Enquete',
      },
    },
  },
  {
    defaultNavigationOptions: {
      headerTintColor: '#fff',
      headerTitleAlign: 'center',
      headerBackTitle: 'Voltar',
      headerStyle: {
        backgroundColor: '#9681de',
      },
      headerTitleStyle: {
        fontSize: 18,
      },
    },
  }
);

const App = createSwitchNavigator({
  Stack,
  Stats,
});

const Routes = createAppContainer(App);

export default Routes;
