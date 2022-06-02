// @flow
import * as React from 'react';
import {View} from 'react-native';

type Props = {
  horizontal: boolean,
  spaceSize: number,
};
const PageSpace = (props: Props): React.Node => {
  if (props.horizontal === true) {
    return <View style={{marginHorizontal: props.spaceSize}} />;
  }
  return <View style={{marginVertical: props.spaceSize}} />;
};

PageSpace.defaultProps = {
  horizontal: false,
  spaceSize: 20,
};

export default PageSpace;
