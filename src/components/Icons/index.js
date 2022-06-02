// @flow
import React from 'react';
import {Image} from 'react-native';
import Util from '../../util';
import SunnyDay from '../../assets/icons/Sunny_Day.svg';
import LightRain from '../../assets/icons/Light_Rain.svg';
import Cloudy from '../../assets/icons/Cloud.svg';
import RainyDay from '../../assets/icons/Rainy_Day.svg';
import Snow from '../../assets/icons/Snow.svg';

type Props = {
  name: string,
  width: number,
  height: number,
  fill?: string,
  style?: Object,
};

function Icon(props: Props) {
  const {width, height, fill, style, isYouth} = props;
  switch (props.name) {
    case 'cloud':
      return (
        <Image
          source={require('../../assets/icons/cloud.png')}
          style={[{width, height}, props.style]}
        />
      );
    case 'sunny-day':
      return <SunnyDay fill={fill} {...props} />;
    case 'light-rain':
      return <LightRain fill={fill} {...props} />;
    case 'cloudy':
      return <Cloudy fill={fill} {...props} />;
    case 'snow':
      return <Snow fill={fill} {...props} />;
    case 'edit':
      return (
        <Image
          source={require('../../assets/icons/editing.png')}
          style={[{width, height}, props.style]}
        />
      );

    // case 'Pattern':
    //     return <Pattern {...props} width={width} height={height} fill={fill} style={style}/>;
    //
    // case 'Animation_Profile':
    //     return (
    //         <LottieView source={require('../../assets/icons/9993-name-proile-icon-animation-stroke.json')} autoPlay
    //                     loop style={style}/>);

    default:
      return null;
  }
}

Icon.defaultProps = {
  fill: '#fff',
};

export default Icon;
