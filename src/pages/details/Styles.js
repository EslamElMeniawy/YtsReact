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
    rightElementContainer: {
      opacity: 0,
    },
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  error: {
    color: Colors.greyLight,
    textAlign: 'center',
    margin: PixelRatio.roundToNearestPixel(16),
    fontSize: PixelRatio.roundToNearestPixel(20),
  },
  background: {
    resizeMode: 'cover',
    width: '100%',
    height: undefined,
  },
  title: {
    color: Colors.white,
    fontWeight: 'bold',
    marginTop: PixelRatio.roundToNearestPixel(16),
    marginStart: PixelRatio.roundToNearestPixel(8),
    marginEnd: PixelRatio.roundToNearestPixel(8),
  },
  yearGenres: {
    color: Colors.white,
    marginTop: PixelRatio.roundToNearestPixel(8),
    marginStart: PixelRatio.roundToNearestPixel(8),
    marginEnd: PixelRatio.roundToNearestPixel(8),
  },
  container: {
    marginTop: PixelRatio.roundToNearestPixel(8),
    marginBottom: PixelRatio.roundToNearestPixel(16),
    marginStart: PixelRatio.roundToNearestPixel(8),
    marginEnd: PixelRatio.roundToNearestPixel(8),
    flexDirection: 'row',
  },
  imageContainer: {
    width: PixelRatio.roundToNearestPixel(79),
    height: PixelRatio.roundToNearestPixel(120),
    backgroundColor: Colors.greyLight,
    borderColor: Colors.white,
    borderWidth: PixelRatio.roundToNearestPixel(2),
    borderRadius: PixelRatio.roundToNearestPixel(8),
  },
  dataContainer: {
    flex: 1,
    marginStart: PixelRatio.roundToNearestPixel(8),
  },
  image: {
    flex: 1,
    resizeMode: 'contain',
    width: PixelRatio.roundToNearestPixel(75),
    height: PixelRatio.roundToNearestPixel(120),
    borderRadius: PixelRatio.roundToNearestPixel(8),
  },
  rowContainer: {
    flexDirection: 'row',
    marginTop: PixelRatio.roundToNearestPixel(8),
  },
  durationRating: {
    color: Colors.white,
    marginStart: PixelRatio.roundToNearestPixel(8),
    alignSelf: 'center',
  },
  button: {
    container: {
      backgroundColor: Colors.greyDark,
      margin: PixelRatio.roundToNearestPixel(8),
      borderRadius: PixelRatio.roundToNearestPixel(16),
      alignSelf: 'center',
      flex: 1,
    },
    text: {
      color: Colors.white,
      textAlign: 'center',
    },
  },
  synopsisContainer: {
    marginStart: PixelRatio.roundToNearestPixel(8),
    marginEnd: PixelRatio.roundToNearestPixel(8),
    marginTop: PixelRatio.roundToNearestPixel(16),
  },
  synopsisTitle: {
    color: Colors.white,
    fontWeight: 'bold',
  },
  synopsis: {
    color: Colors.greyLight,
    marginTop: PixelRatio.roundToNearestPixel(8),
  },
};

export default Styles;
