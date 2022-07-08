import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { GabbaStackParams, RootDrawerParamList } from '../types/Navigation';
import AccountScreen from '../screens/AccountScreen';
import LoginScreen from '../screens/LoginScreen';
import SignUpScreen from '../screens/SignUpScreen';
import { useAuthentication } from '../hooks/useAuthentication';


declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace ReactNavigation {
    interface RootParamList extends RootDrawerParamList { }
  }
}

const Stack = createStackNavigator<GabbaStackParams>();

export default function AccountNavigator() {
  const { user } = useAuthentication();
  return (
    <Stack.Navigator screenOptions={{ headerShown: false, animationEnabled: false }}>
      <Stack.Screen name="Account" component={AccountScreen} />
      <Stack.Screen name="Login" options={{ headerShown: false }} component={LoginScreen}/>
      <Stack.Screen name="SignUp" options={{ headerShown: false }} component={SignUpScreen}/>
    </Stack.Navigator>
  );
}
