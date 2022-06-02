import * as React from 'react';
import {StyleSheet} from 'react-native';
import {hasNotch} from 'react-native-device-info';
import Theme from '../../App.style';
import {Util} from '../../util';
import useAppTheme from '../../appTheme';

const header_height = Theme.header_height;

const style = () =>
  StyleSheet.create({
    mainContainerWithChildren: {
      width: '100%',
      flexDirection: 'row',
      alignItems: 'flex-end',
      backgroundColor: 'transparent',
      minHeight: useAppTheme()[0].header_height,
      paddingLeft: Theme.page_padding,
      paddingRight: Theme.page_padding,
    },
    mainContainerNoChildren: {
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'flex-end',
      paddingBottom: 10,
      backgroundColor: 'transparent',
      paddingHorizontal: useAppTheme()[0].pagePadding,
      height: useAppTheme()[0].header_height,
    },
    headerText: {
      color: useAppTheme()[0].textColor1,
      flex: 2,
      textAlign: 'center',
    },

    right_section: {
      flex: 1,
      flexDirection: 'row',
    },
    sub_icons_container: {
      flex: 1,
      justifyContent: 'flex-end',
      flexDirection: 'row',
    },
    sub_icons_action: {
      marginLeft: 5,
      padding: 5,
      paddingBottom: 0,
    },
    header_subText: {
      color: useAppTheme()[0].textColor1,
    },
  });

export default style;
