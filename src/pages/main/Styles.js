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
  },
  toolbarImage: {
    flex: 1,
    resizeMode: 'contain',
    width: undefined,
    height: undefined,
    marginStart: 16,
    marginEnd: 16,
  },
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
  recycler: {
    flex: 1,
  },
};

export default Styles;
