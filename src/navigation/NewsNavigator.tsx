import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { GabbaStackParams, RootDrawerParamList } from '../types/Navigation';
import NewsScreen from '../screens/NewsScreen';


declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace ReactNavigation {
    interface RootParamList extends RootDrawerParamList { }
  }
}

const Stack = createStackNavigator<GabbaStackParams>();

export default function NewsNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false, animationEnabled: false }}>
      <Stack.Screen name="News" component={NewsScreen} />
    </Stack.Navigator>
  );
}
