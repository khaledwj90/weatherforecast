// @flow
import {Dimensions, PixelRatio} from 'react-native';

class _Functions {
  FontSize(size: number) {
    const {width: SCREEN_WIDTH, height: SCREEN_HEIGHT} =
      Dimensions.get('window');

    // based on iphone 5s's scale
    const scale = SCREEN_WIDTH / 400;

    const newSize = (size + 10) * scale;
    if (Platform.OS === 'ios') {
      return Math.round(PixelRatio.roundToNearestPixel(newSize));
    } else {
      return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 0;
    }
  }

  GetDeviceDimensions(): any {
    const width = Dimensions.get('window').width;
    const height = Dimensions.get('window').height;
    return {width, height};
  }

  HexToRgb(hex: string): string {
    // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
    var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    hex = hex.replace(shorthandRegex, function (m, r, g, b) {
      return r + r + g + g + b + b;
    });

    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result
      ? `${parseInt(result[1], 16)},${parseInt(result[2], 16)},${parseInt(
          result[3],
          16,
        )}`
      : null;
  }

  MoneyFormat(
    amount: number,
    decimalCount: number = 2,
    decimal: string = '.',
    thousands: string = ',',
  ): string {
    try {
      decimalCount = Math.abs(decimalCount);
      decimalCount = isNaN(decimalCount) ? 2 : decimalCount;

      const negativeSign = amount < 0 ? '-' : '';

      let i = parseInt(
        (amount = Math.abs(Number(amount) || 0).toFixed(decimalCount)),
      ).toString();
      let j = i.length > 3 ? i.length % 3 : 0;

      return (
        negativeSign +
        (j ? i.substr(0, j) + thousands : '') +
        i.substr(j).replace(/(\d{3})(?=\d)/g, '$1' + thousands) +
        (decimalCount
          ? decimal +
            Math.abs(amount - i)
              .toFixed(decimalCount)
              .slice(2)
          : '')
      );
    } catch (e) {
      return false;
    }
  }
}

export default _Functions;
