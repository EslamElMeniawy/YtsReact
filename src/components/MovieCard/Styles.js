import { PixelRatio } from 'react-native';
import * as Colors from '../../utils/Colors';

const Styles = {
  card: {
    container: {
      flex: 1,
      backgroundColor: Colors.greyDark,
      marginTop: PixelRatio.roundToNearestPixel(16),
      marginStart: PixelRatio.roundToNearestPixel(16),
      marginEnd: PixelRatio.roundToNearestPixel(16),
      padding: PixelRatio.roundToNearestPixel(8),
      borderRadius: PixelRatio.roundToNearestPixel(8),
    },
  },
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  imageContainer: {
    width: PixelRatio.roundToNearestPixel(79),
    height: PixelRatio.roundToNearestPixel(120),
    alignSelf: 'center',
    backgroundColor: Colors.greyLight,
    borderColor: Colors.white,
    borderWidth: PixelRatio.roundToNearestPixel(2),
    borderRadius: PixelRatio.roundToNearestPixel(8),
  },
  textContainer: {
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
  title: {
    color: Colors.white,
    fontWeight: 'bold',
  },
  yearRatingContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: PixelRatio.roundToNearestPixel(8),
    marginBottom: PixelRatio.roundToNearestPixel(8),
  },
  year: {
    color: Colors.greyLight,
  },
  ratingContainer: {
    flexDirection: 'row',
  },
  rating: {
    color: Colors.white,
    marginStart: PixelRatio.roundToNearestPixel(4),
  },
  genre: {
    backgroundColor: Colors.grey,
    color: Colors.white,
    marginEnd: PixelRatio.roundToNearestPixel(8),
    paddingHorizontal: PixelRatio.roundToNearestPixel(8),
    paddingVertical: PixelRatio.roundToNearestPixel(4),
  },
  button: {
    container: {
      backgroundColor: Colors.green,
      marginTop: PixelRatio.roundToNearestPixel(8),
      borderRadius: PixelRatio.roundToNearestPixel(16),
      alignSelf: 'center',
    },
    text: {
      color: Colors.white,
    },
  },
};

export default Styles;
