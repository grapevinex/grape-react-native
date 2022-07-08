import { Platform } from 'react-native';
import * as Application from 'expo-application';

const appIdentifier = Application.applicationId;

export function getTestID(testID: string) {
  const prefix = `${appIdentifier}:id/`;

  if (Platform.OS === 'android') {
    return `${prefix}${testID}`;
  }
  if (Platform.OS === 'ios') {
    return testID;
  }
  return testID;
}

export function testID(id: string) {
  return Platform.OS === 'android'
    ? { accessible: true, accessibilityLabel: id, testID: id }
    : { testID: id };
}
export const tID = getTestID;
export const androidID = testID;
