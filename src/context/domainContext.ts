import Constants from 'expo-constants';
import { Platform } from 'react-native';

export default function domainContext() {
  if (Platform.OS === 'web') {
    if (window.location.hostname === 'travelers.tnaa.com') {
      return 'tnaa';
    }
    if (window.location.hostname === 'travelers.qa-tnaa.com') {
      return 'qa-tnaa';
    }
    if (window.location.hostname === 'localhost:5001') {
      return 'qa-tnaa';
    }
  }
  if (Constants?.manifest?.releaseChannel === 'default') {
    return 'qa-tnaa';
  }
  if (Constants?.manifest?.releaseChannel === 'staging') {
    return 'qa-tnaa';
  }
  if (Constants?.manifest?.releaseChannel === 'production') {
    return 'tnaa';
  }
  if (__DEV__) {
    return 'qa-tnaa';
  }
  return 'qa-tnaa';
}
