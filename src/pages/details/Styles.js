import * as Colors from '../../utils/Colors';

const Styles = {
  safeAreaView: {
    flex: 1,
    backgroundColor: Colors.grey,
  },
  toolbar: {
    container: { backgroundColor: Colors.grey },
    centerElementContainer: {
      marginRight: 16,
      marginTop: 8,
      marginBottom: 8,
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
    margin: 16,
    fontSize: 20,
  },
  background: {
    resizeMode: 'cover',
    width: '100%',
    height: undefined,
  },
  title: {
    color: Colors.white,
    fontWeight: 'bold',
    marginTop: 16,
    marginStart: 8,
    marginEnd: 8,
  },
  yearGenres: {
    color: Colors.white,
    marginTop: 8,
    marginStart: 8,
    marginEnd: 8,
  },
  container: {
    marginTop: 8,
    marginBottom: 16,
    marginStart: 8,
    marginEnd: 8,
    flexDirection: 'row',
  },
  imageContainer: {
    width: 79,
    height: 120,
    backgroundColor: Colors.greyLight,
    borderColor: Colors.white,
    borderWidth: 2,
    borderRadius: 8,
  },
  dataContainer: {
    flex: 1,
    marginStart: 8,
  },
  image: {
    flex: 1,
    resizeMode: 'contain',
    width: 75,
    height: 120,
    borderRadius: 8,
  },
  rowContainer: {
    flexDirection: 'row',
    marginTop: 8,
  },
  durationRating: {
    color: Colors.white,
    marginStart: 8,
    alignSelf: 'center',
  },
  button: {
    container: {
      backgroundColor: Colors.greyDark,
      margin: 8,
      borderRadius: 16,
      alignSelf: 'center',
      flex: 1,
    },
    text: {
      color: Colors.white,
      textAlign: 'center',
    },
  },
  synopsisContainer: {
    marginStart: 8,
    marginEnd: 8,
    marginTop: 16,
  },
  synopsisTitle: {
    color: Colors.white,
    fontWeight: 'bold',
  },
  synopsis: {
    color: Colors.greyLight,
    marginTop: 8,
  },
};

export default Styles;
