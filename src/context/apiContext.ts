import Constants from 'expo-constants';
import { Platform } from 'react-native';

export default function apiContext() {
  if (Constants?.manifest?.releaseChannel === 'default') {
    return 'https://travelers.qa-tnaa.com';
  }
  if (Constants?.manifest?.releaseChannel === 'staging') {
    return 'https://travelers.qa-tnaa.com';
  }
  if (Constants?.manifest?.releaseChannel === 'production') {
    return 'https://travelers.tnaa.com';
  }
  if (Platform.OS === 'web') {
    return window.location.origin;
  }
  if (__DEV__) {
    return Platform.OS === 'ios' ? 'http://localhost:5001' : 'http://10.0.2.2:5001';
  }
  return 'https://travelers.qa-tnaa.com';
}
