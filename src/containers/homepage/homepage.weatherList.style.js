import {StyleSheet} from 'react-native';
import {AppThemeType} from '../../appTheme';

const style = (theme: AppThemeType, isActive: boolean) =>
  StyleSheet.create({
    mainContainer: {
      marginTop: 30,
      flexGrow: 0,
      paddingTop: 30,
      width: theme?.deviceWidth,
    },
    weatherItemContainer: {
      top: isActive ? -20 : 0,
      shadowColor: theme?.textColor1,
      shadowOffset: {width: 0, height: 0},
      shadowRadius: 5,
      shadowOpacity: isActive ? 1 : 0,
      paddingVertical: 20,
      paddingHorizontal: 18,
      borderRadius: 50,
      marginRight: 10,
      borderColor: `rgba(255,255,255,0.2)`,
      borderStyle: 'solid',
      borderWidth: 1,
      alignItems: 'center',
      justifyContent: 'space-between',
      backgroundColor: isActive ? `rgba(255,255,255,0.8)` : `rgba(0,0,0,0.1)`,
    },
    iconContainer: {
      width: 35,
      height: 35,
      borderRadius: 35 / 2,
      marginVertical: 15,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: isActive ? `rgba(72,149,233,0.2)` : theme?.color1,
    },
    degreTextContainer: {
      flexDirection: 'row',
    },
  });

export default style;
