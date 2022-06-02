import {StyleSheet} from 'react-native';

const style = () =>
  StyleSheet.create({
    mainContainer: {
      flexDirection: 'column',
    },
    firstSection: {
      alignContent: 'center',
      justifyContent: 'center',
      flexDirection: 'row',
      marginTop: 30,
    },
    firstSectionIconContainer: {
      marginRight: 8,
    },
    firstSectionTextContainer: {
      flexDirection: 'column',
    },
    secondSection: {
      justifyContent: 'center',
      left: 20,
      marginTop: 50,
      flexDirection: 'row',
    },
    secondSectionDegree: {
      color: `rgba(255,255,255,0.5)`,
      top: 10,
    },
    thirdSection: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 0,
    },
    thirdSectionIcon: {
      marginLeft: 5,
    },
  });

export default style;
