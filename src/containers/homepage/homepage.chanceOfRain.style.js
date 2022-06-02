// @flow
import {StyleSheet} from 'react-native';
import type {AppThemeType} from '../../appTheme';

const barWidth = 17;
const style = (theme: AppThemeType, isActive?: boolean): * =>
  StyleSheet.create({
    mainContainer: {
      flexDirection: 'column',
      marginTop: 30,
    },

    barLabelContainer: {
      flexDirection: 'row',
      height: 100,
      marginTop: 10,
    },
    barsContainer: {
      paddingHorizontal: 20,
      paddingBottom: 20,
      height: 130,
    },
    barItemContainer: {
      marginRight: 50,
      height: 100,
      alignItems: 'center',
      justifyContent: 'center',
    },
    barItemInside: {
      height: '100%',
      position: 'absolute',
      width: 1,
      borderStyle: 'dashed',
      borderWidth: 1,
      borderColor: theme?.textColor2,
    },
    barItemOutside: {
      position: 'absolute',
      bottom: 0,
      height: '50%',
      width: barWidth,
      borderRadius: barWidth / 2,
      backgroundColor: isActive ? theme?.color4 : theme?.color2,
      shadowColor: theme?.color4,
      shadowOffset: {width: 0, height: 0},
      shadowRadius: 4,
      shadowOpacity: isActive ? 1 : 0,
    },
    barText: {
      position: 'absolute',
      bottom: -20,
    },
  });

export default style;
