/* eslint-disable no-console */
/* global __DEV__ */

export function logDebug(message, data) {
  if (__DEV__) {
    if (data) {
      console.log(message, data);
    } else {
      console.log(message);
    }
  }
}

export function logError(error) {
  if (__DEV__) {
    console.error(error);
  }
}
