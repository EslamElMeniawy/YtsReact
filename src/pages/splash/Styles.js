import { PixelRatio } from 'react-native';
import * as Colors from '../../utils/Colors';

const Styles = {
  safeAreaView: {
    flex: 1,
    backgroundColor: Colors.grey,
  },
  image: {
    flex: 1,
    alignSelf: 'center',
    resizeMode: 'contain',
    width: PixelRatio.roundToNearestPixel(300),
    height: undefined,
    marginStart: PixelRatio.roundToNearestPixel(16),
    marginEnd: PixelRatio.roundToNearestPixel(16),
  },
};

export default Styles;
