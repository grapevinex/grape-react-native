import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { GabbaStackParams, RootDrawerParamList } from '../types/Navigation';
import DashboardScreen from '../screens/DashboardScreen';


declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace ReactNavigation {
    interface RootParamList extends RootDrawerParamList { }
  }
}

const Stack = createStackNavigator<GabbaStackParams>();

export default function DashboardNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false, animationEnabled: false }}>
      <Stack.Screen name="Dashboard" component={DashboardScreen} />
    </Stack.Navigator>
  );
}
