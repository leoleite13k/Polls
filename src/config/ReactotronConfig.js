import Reactotron from 'reactotron-react-native';
import { reactotronRedux } from 'reactotron-redux';
import sagaPlugin from 'reactotron-redux-saga';
import { AsyncStorage } from 'react-native';

if (__DEV__) {
  const tron = Reactotron.configure()
    .useReactNative()
    .setAsyncStorageHandler(AsyncStorage)
    .use(reactotronRedux())
    .use(sagaPlugin())
    .connect();

  console.tron = tron;

  tron.clear();
}
