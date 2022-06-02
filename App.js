// @flow
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React from 'react';
import axios from 'axios';
import MainRoutes from './src/routes';
import {ActivityIndicator} from './src/components/ActivityIndicator';
import Text from './src/components/Text';
import useAppStates from './src/appStates';
import {View} from 'react-native';

type StatesTypes = {
  isLoggedIn: null | boolean,
  loadedLang: boolean,
};

const App = () => {
  const [appStates, setAppState] = useAppStates();

  React.useEffect(() => {
    axios.interceptors.request.use(request => {
      console.log('Starting Request', JSON.stringify(request));
      return request;
    });

    axios.interceptors.response.use(response => {
      console.log('Response:', response);
      return response;
    });
  }, []);

  return <MainRoutes />;
};

export default App;
