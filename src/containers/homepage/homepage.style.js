import {StyleSheet} from 'react-native';

const style = () =>
  StyleSheet.create({
    cloud1: {
      position: 'absolute',
      left: -130,
      top: 50,
      opacity: 0.02,
    },
    cloud2: {
      position: 'absolute',
      right: -100,
      top: -60,
      opacity: 0.02,
    },
    cloud3: {
      position: 'absolute',
      right: 0,
      top: 200,
      opacity: 0.02,
    },
  });

export default style;
