import React from 'react';
import { SafeAreaView } from 'react-native';
import { Toolbar } from 'react-native-material-ui';
import PropTypes from 'prop-types';

import { logDebug } from '../../utils/DebugUtils';
import AppStatusBar from '../../components/AppStatusBar';
import { GeneralStyles } from '../../utils/Styles';

export default function DetailsScreen({ navigation }) {
  const movie = navigation.getParam('movie', {});
  logDebug('Got movie: ', movie);

  return (
    <SafeAreaView style={GeneralStyles.safeAreaView}>
      <AppStatusBar />
      <Toolbar centerElement="Details" style={GeneralStyles.toolbar} />
    </SafeAreaView>
  );
}

DetailsScreen.propTypes = {
  navigation: PropTypes.shape({
    goBack: PropTypes.func.isRequired,
  }).isRequired,
};
