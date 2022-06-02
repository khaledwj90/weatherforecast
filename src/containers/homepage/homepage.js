// @flow
import * as React from 'react';
import {View} from 'react-native';
import style from './homepage.style';
import {AppHeader} from '../../components/AppHeader';
import PageContainer from '../../components/PageContainer';
import Icon from '../../components/Icons';
import HomepageCurrentDay from './homepage.currentDay';
import HomepageWeatherList from './homepage.weatherList';
import HomepageChanceOfRain from './homepage.chanceOfRain';

type Props = {};
const Homepage = (props: Props): React.Node => {
  return (
    <PageContainer withPadding={false}>
      <AppHeader headerText={'Weather Forecast'} />
      <PageContainer withPadding={true} style={{flex: 0}}>
        <Icon name={'cloud'} width={250} height={250} style={style().cloud1} />
        <Icon name={'cloud'} width={200} height={200} style={style().cloud2} />
        <Icon name={'cloud'} width={100} height={100} style={style().cloud3} />
        <HomepageCurrentDay />
      </PageContainer>
      <HomepageWeatherList />
      <HomepageChanceOfRain />
    </PageContainer>
  );
};

export default Homepage;
