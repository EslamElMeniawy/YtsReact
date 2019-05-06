import { PixelRatio } from 'react-native';
import * as Colors from '../../utils/Colors';

const Styles = {
  safeAreaView: {
    flex: 1,
    backgroundColor: Colors.grey,
  },
  toolbar: {
    container: { backgroundColor: Colors.grey },
    centerElementContainer: {
      marginRight: PixelRatio.roundToNearestPixel(16),
      marginTop: PixelRatio.roundToNearestPixel(8),
      marginBottom: PixelRatio.roundToNearestPixel(8),
    },
    titleText: {
      color: Colors.white,
      textAlign: 'center',
    },
  },
  toolbarImage: {
    flex: 1,
    resizeMode: 'contain',
    width: undefined,
    height: undefined,
    marginStart: PixelRatio.roundToNearestPixel(16),
    marginEnd: PixelRatio.roundToNearestPixel(16),
  },
  loadingErrorContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  error: {
    color: Colors.greyLight,
    textAlign: 'center',
    margin: PixelRatio.roundToNearestPixel(16),
    fontSize: PixelRatio.roundToNearestPixel(20),
  },
  recycler: {
    flex: 1,
  },
};

export default Styles;
