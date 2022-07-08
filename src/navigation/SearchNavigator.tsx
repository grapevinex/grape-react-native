import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { GabbaStackParams, RootDrawerParamList } from '../types/Navigation';
import { useAuthentication } from '../hooks/useAuthentication';
import SearchScreen from '../screens/SearchScreen';


declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace ReactNavigation {
    interface RootParamList extends RootDrawerParamList { }
  }
}

const Stack = createStackNavigator<GabbaStackParams>();

export default function SearchNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false, animationEnabled: false }}>
      <Stack.Screen name="Search" component={SearchScreen} />
    </Stack.Navigator>
  );
}
