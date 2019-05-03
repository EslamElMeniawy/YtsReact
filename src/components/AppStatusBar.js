import React from 'react';
import { StatusBar } from 'react-native';
import * as Colors from '../utils/Colors';

export default function AppStatusBar() {
  return <StatusBar barStyle="light-content" backgroundColor={Colors.greyDark} />;
}
