import * as Colors from './Colors';

export const GeneralStyles = {
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
  },
  toolbarImage: {
    flex: 1,
    resizeMode: 'contain',
    width: undefined,
    height: undefined,
    marginStart: 16,
    marginEnd: 16,
  },
};

export const SplashStyles = {
  image: {
    flex: 1,
    alignSelf: 'center',
    resizeMode: 'contain',
    width: 300,
    height: undefined,
    marginStart: 16,
    marginEnd: 16,
  },
};

export const MainStyles = {
  loadingErrorContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  error: {
    color: Colors.greyLight,
    textAlign: 'center',
    margin: 16,
    fontSize: 20,
  },
};

export const MovieCardStyles = {
  card: {
    container: {
      flex: 1,
      backgroundColor: Colors.greyDark,
      marginTop: 16,
      marginStart: 16,
      marginEnd: 16,
      padding: 8,
      borderRadius: 8,
    },
  },
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  imageContainer: {
    width: 79,
    height: 120,
    alignSelf: 'center',
    backgroundColor: Colors.greyLight,
    borderColor: Colors.white,
    borderWidth: 2,
    borderRadius: 8,
  },
  textContainer: {
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
  title: {
    color: Colors.white,
    fontWeight: 'bold',
  },
  yearRatingContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 8,
    marginBottom: 8,
  },
  year: {
    color: Colors.greyLight,
  },
  ratingContainer: {
    flexDirection: 'row',
  },
  rating: {
    color: Colors.white,
    marginStart: 4,
  },
  genre: {
    backgroundColor: Colors.grey,
    color: Colors.white,
    fontWeight: 'bold',
    marginEnd: 8,
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  button: {
    container: {
      backgroundColor: Colors.green,
      marginTop: 8,
      borderRadius: 16,
      alignSelf: 'center',
    },
    text: {
      color: Colors.white,
    },
  },
};
