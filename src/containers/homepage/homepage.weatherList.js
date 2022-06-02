// @flow
import * as React from 'react';
import {ScrollView, View} from 'react-native';
import style from './homepage.weatherList.style';
import Text from '../../components/Text';
import useAppTheme from '../../appTheme';
import Icon from '../../components/Icons';

type WeatherItemProps = {
  hour: number,
  scrollTo: (location: number) => void,
};
const WeatherItem = (props: WeatherItemProps): React.Node => {
  const [theme] = useAppTheme();
  const currentHour = new Date().getHours();
  const isActive = currentHour === props.hour || currentHour === props.hour - 1;

  const Render12Hour = () => {
    const formattedHour = props.hour < 12 ? props.hour : props.hour - 12;
    const hourLabel = props.hour < 12 ? 'AM' : 'PM';
    if (props.hour < 12) {
      return (
        <Text size={3} color={isActive ? theme.color1 : theme.textColor2}>
          {formattedHour === 0 ? 12 : formattedHour}
          {hourLabel}
        </Text>
      );
    } else {
      return (
        <Text size={3} color={isActive ? theme.color1 : theme.textColor2}>
          {formattedHour === 0 ? 12 : formattedHour}
          {hourLabel}
        </Text>
      );
    }
  };

  const RenderIcon = ({weatherStatus}) => {
    const fillColor = isActive ? theme.color3 : theme.textColor2;
    switch (weatherStatus) {
      case 'cloud':
        return <Icon width={25} height={25} name={'cloudy'} fill={fillColor} />;
      case 'sunny':
        return (
          <Icon width={25} height={25} name={'sunny-day'} fill={fillColor} />
        );
      default:
        return (
          <Icon width={25} height={25} name={'sunny-day'} fill={fillColor} />
        );
    }
  };

  const onLayout = React.useCallback(({nativeEvent}) => {
    if (isActive) {
      const scrollToX = nativeEvent?.layout.x - 100;
      props.scrollTo(scrollToX);
    }
  }, []);

  return (
    <View
      onLayout={onLayout}
      style={style(theme, isActive).weatherItemContainer}>
      <Render12Hour />
      <View style={style(theme, isActive).iconContainer}>
        <RenderIcon weatherStatus={'cloud'} />
      </View>
      <View style={style().degreTextContainer}>
        <Text
          weight={'bold'}
          size={10}
          color={isActive ? theme.color1 : theme.textColor2}>
          26
        </Text>
        <Text
          weight={'light'}
          color={isActive ? theme.color1 : theme.textColor2}>
          °C
        </Text>
      </View>
    </View>
  );
};

type Props = {};
const HomepageWeatherList = (props: Props): React.Node => {
  const [theme] = useAppTheme();
  const hoursList = new Array(12).fill(null).map((val, index) => index * 2);
  const scrollRef = React.useRef();

  const scrollToItem = (xLocation: number) => {
    setTimeout(() => {
      scrollRef.current?.scrollTo({x: xLocation, y: 0, animated: true});
    }, 500);
  };
  return (
    <ScrollView
      ref={scrollRef}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      style={style().mainContainer}
      contentContainerStyle={{paddingHorizontal: 20}}>
      {hoursList.map((val, index) => {
        return <WeatherItem key={val} hour={val} scrollTo={scrollToItem} />;
      })}
    </ScrollView>
  );
};

export default HomepageWeatherList;
