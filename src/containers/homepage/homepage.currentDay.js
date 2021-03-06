// @flow
import * as React from 'react';
import {View} from 'react-native';
import style from './homepage.currentDay.style';
import Icon from '../../components/Icons';
import useAppTheme from '../../appTheme';
import Text from '../../components/Text';
import {WeatherDataContext} from './homepage';
import moment from 'moment';
import {parseInt} from 'lodash';

type Props = {};
const HomepageCurrentDay = (props: Props): React.Node => {
  const [theme] = useAppTheme();
  const weatherContext = React.useContext(WeatherDataContext);

  return (
    <View>
      <View style={style().firstSection}>
        <View style={style().firstSectionIconContainer}>
          <Icon width={40} height={40} name={'sunny-day'} fill={theme.color3} />
        </View>
        <View style={style().firstSectionTextContainer}>
          <Text
            size={15}
            weight={'regular'}
            color={theme.textColor1}
            style={{letterSpacing: 2}}>
            Today
          </Text>
          <Text size={1} weight={'light'} color={theme.textColor1}>
            {moment(weatherContext?.weatherData?.current?.dt).format(
              'ddd, DD MMM',
            )}
          </Text>
        </View>
      </View>
      <View style={style().secondSection}>
        <Text weight={'regular'} size={100} color={theme.textColor1}>
          {parseInt(weatherContext.weatherData.current.temp)}
        </Text>
        <Text
          color={theme.textColor1}
          weight={'light'}
          size={20}
          style={style().secondSectionDegree}>
          °C
        </Text>
      </View>
      <View style={style().thirdSection}>
        <Text weight={'regular'} size={1} color={theme.textColor1}>
          California, United State
        </Text>
        <Icon
          width={12}
          height={12}
          name={'edit'}
          style={style().thirdSectionIcon}
        />
      </View>
    </View>
  );
};

export default HomepageCurrentDay;
