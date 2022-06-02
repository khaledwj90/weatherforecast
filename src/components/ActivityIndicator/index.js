// @flow
import * as React from 'react';
import {View, ActivityIndicator as Loader} from 'react-native';
import useAppTheme from '../../appTheme';

type Props = {};
export const ActivityIndicator = (props: Props): * => {
  const [theme] = useAppTheme();
  return <Loader {...props} color={theme.color3} />;
};
