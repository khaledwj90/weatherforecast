// @flow

import * as React from 'react';
import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import PublicNavigation from './public';
import PrivateNavigation from './private';
import {Splashscreen} from '../components/Splashscreen';
import Util from '../util';
import RouteConstants from './constants';
import useAppStates from '../appStates';
import useAppTheme from '../appTheme';

const MainRoutes = (props: *): React.Node => {
  const [appStates, setAppState] = useAppStates();
  const [theme] = useAppTheme();

  if (appStates.isLoggedIn === null) {
    return <Splashscreen />;
  } else {
    return (
      <NavigationContainer
        theme={{
          ...DefaultTheme,
          colors: {...DefaultTheme.colors, background: theme.color1},
        }}>
        {appStates.isLoggedIn === true ? (
          <PrivateNavigation tab={'drawer'} />
        ) : (
          <PublicNavigation />
        )}
      </NavigationContainer>
    );
  }
};

export default MainRoutes;
