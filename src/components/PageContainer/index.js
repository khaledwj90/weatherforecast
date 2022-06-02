// @flow
import * as React from 'react';
import {View} from 'react-native';
import style from './style';
import Theme from '../../App.style';
import useAppTheme from '../../appTheme';

type PageContainerType = {
  bgColor?: string,
  style?: *,
  children: *,
  withPadding?: boolean,
};
const PageContainer = (props: PageContainerType): * => {
  const [theme] = useAppTheme();
  return (
    <View
      style={[
        style.container,
        {
          backgroundColor: props.bgColor,
          paddingHorizontal: props.withPadding === true ? theme.pagePadding : 0,
        },
        props.style,
      ]}>
      {props.children}
    </View>
  );
};

PageContainer.defaultProps = {
  withPadding: false,
};

export default PageContainer;
