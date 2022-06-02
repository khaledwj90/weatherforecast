import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Auth_Login from '../containers/auth.login';
import Homepage from '../containers/homepage/homepage';

const StackNavigation = createStackNavigator();

const PublicRoutes = [
  {
    name: 'Login',
    component: Homepage,
  },
  {
    name: 'HomePage',
    component: Homepage,
  },
];

const PublicNavigation = (props: *): React.ReactNode => {
  return (
    <StackNavigation.Navigator
      headerMode={'none'}
      initialRouteName={'HomePage'}>
      {PublicRoutes.map((route, index) => {
        return (
          <StackNavigation.Screen
            key={route.name}
            name={route.name}
            component={route.component}
          />
        );
      })}
    </StackNavigation.Navigator>
  );
};

export default PublicNavigation;
