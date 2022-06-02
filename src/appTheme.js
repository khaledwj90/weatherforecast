// @flow
import * as React from 'react';
import {Dimensions} from 'react-native';

export type AppThemeType = {
  isDark: boolean,
  pagePadding: number,
  header_height: number,
  disabled_opacity: number,
  deviceWidth: number,
  color1: string,
  color2: string,
  color3: string,
  color4: string,
  textColor1: string,
  textColor2: string,
};

const useAppTheme = (
  initialValue: Object = {},
): [AppThemeType, (theme: AppThemeType) => void] => {
  const [appTheme, setTheme] = React.useState(() => ({
    isDark: false,
    pagePadding: 15,
    header_height: 80,
    disabled_opacity: 0.5,
    deviceWidth: Dimensions.get('window').width,
    color1: '#251D3A',
    color2: '#2A2550',
    color3: '#4895E9',
    color4: '#FF7700',
    textColor1: '#fff',
    textColor2: '#D0D0D0',
  }));

  const setAppTheme = (theme: AppThemeType): void => {
    setTheme({...appTheme, ...theme});
  };

  return [appTheme, setAppTheme];
};

export default useAppTheme;
