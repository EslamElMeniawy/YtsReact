import React, { Component } from 'react';
import { SafeAreaView, StatusBar, Image } from 'react-native';
import PropTypes from 'prop-types';

import { Logo } from '../../utils/StaticImages';
import * as Colors from '../../utils/Colors';
import Styles from './Styles';

export default class SplashScreen extends Component {
  componentDidMount() {
    const { navigation } = this.props;

    setTimeout(() => {
      navigation.navigate('App');
    }, 2000);
  }

  render() {
    return (
      <SafeAreaView style={Styles.safeAreaView}>
        <StatusBar barStyle="light-content" backgroundColor={Colors.grey} />
        <Image style={Styles.image} source={Logo} />
      </SafeAreaView>
    );
  }
}

SplashScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};
