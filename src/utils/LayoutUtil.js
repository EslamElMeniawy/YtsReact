/* eslint-disable no-param-reassign */
import { LayoutProvider } from 'recyclerlistview';
import { Dimensions } from 'react-native';

export default class LayoutUtil {
  static getWindowWidth() {
    // To deal with precision issues on android
    return Math.round(Dimensions.get('window').width * 1000) / 1000 - 0; // Adjustment for margin given to RLV;
  }

  static getLayoutProvider() {
    return new LayoutProvider(
      () => 'VSEL',
      (type, dim) => {
        switch (type) {
          case 'VSEL':
            dim.width = LayoutUtil.getWindowWidth();
            dim.height = 165;
            break;
          default:
            dim.width = 0;
            dim.heigh = 0;
        }
      },
    );
  }
}
