// @flow
import * as React from 'react';
import {ScrollView, View} from 'react-native';
import style from './homepage.chanceOfRain.style';
import Text from '../../components/Text';
import PageSpace from '../../components/PageSpace/pageSpace';
import useAppTheme from '../../appTheme';
import PageContainer from '../../components/PageContainer';

type ChanceOfRainBarType = {
  hour: number,
  scrollTo: (location: number) => void,
};
const ChanceOfRainBar = (props: ChanceOfRainBarType): * => {
  const [theme] = useAppTheme();
  const currentHour = new Date().getHours();
  const isActive = currentHour === props.hour || currentHour === props.hour - 1;

  const Render12Hour = () => {
    const formattedHour = props.hour < 12 ? props.hour : props.hour - 12;
    const hourLabel = props.hour < 12 ? 'AM' : 'PM';
    if (props.hour < 12) {
      return (
        <Text size={2} color={theme.textColor2} style={style(theme).barText}>
          {formattedHour === 0 ? 12 : formattedHour}
          {hourLabel}
        </Text>
      );
    } else {
      return (
        <Text size={2} color={theme.textColor2} style={style(theme).barText}>
          {formattedHour === 0 ? 12 : formattedHour}
          {hourLabel}
        </Text>
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
    <View onLayout={onLayout}>
      <View style={style(theme).barItemContainer}>
        <View style={style(theme).barItemInside} />
        <View style={style(theme, isActive).barItemOutside} />
        <Render12Hour />
      </View>
    </View>
  );
};

type Props = {};
const HomepageChanceOfRain = (props: Props): React.Node => {
  const [theme] = useAppTheme();
  const hoursList = new Array(12).fill(null).map((val, index) => index * 2);
  const scrollRef = React.useRef();

  const scrollToPosition = xLocation => {
    setTimeout(() => {
      scrollRef.current?.scrollTo({x: xLocation, y: 0, animated: true});
    }, 500);
  };

  return (
    <PageContainer withPadding={true}>
      <PageSpace />
      <Text color={theme.textColor2} size={8} weight={'bold'}>
        Chance of rain
      </Text>
      <View style={style(theme).barLabelContainer}>
        <View
          style={{flexDirection: 'column', justifyContent: 'space-between'}}>
          <Text color={theme.textColor2} size={2} weight={'light'}>
            heavy rain
          </Text>
          <Text color={theme.textColor2} size={2} weight={'light'}>
            rainy
          </Text>
          <Text color={theme.textColor2} size={2} weight={'light'}>
            sunny
          </Text>
        </View>
        <ScrollView
          ref={scrollRef}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          style={style(theme).barsContainer}>
          {hoursList.map(val => {
            return (
              <ChanceOfRainBar
                key={val}
                hour={val}
                scrollTo={scrollToPosition}
              />
            );
          })}
        </ScrollView>
      </View>
    </PageContainer>
  );
};

export default HomepageChanceOfRain;
