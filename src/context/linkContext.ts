import { Linking, Platform } from 'react-native';

export default function linkContext(url: string) {
  if (Platform.OS === 'web') {
    window.open(url, '_blank');
  } else {
    Linking.openURL(url);
  }
}
