// @flow
import * as React from 'react';

type AppStates = {
  isLoggedIn: null | boolean,
};
const useAppStates = (): [AppStates, (newAppStates: AppStates) => void] => {
  const [appStates, setAppStates] = React.useState({isLoggedIn: false});

  const updateAppState = (newAppStates: any | {} = {}) => {
    setAppStates({...appStates, ...newAppStates});
  };
  return [appStates, updateAppState];
};

export default useAppStates;
