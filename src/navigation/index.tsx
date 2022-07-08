import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ColorSchemeName, Platform, useWindowDimensions } from 'react-native';
import ModalScreen from '../screens/ModalScreen';
import NotFoundScreen from '../screens/NotFoundScreen';
import { RootStackParamList } from '../types/Navigation';
import LinkingConfiguration from './LinkingConfiguration';
import { GabbaDarkTheme, GabbaLightTheme } from '../styles/Theme';
import DrawerNavigator from './DrawerNavigator';
import TabNavigator from './TabNavigator';
import useThemeStyles from '../hooks/useThemeStyles';


export default function Navigation() {

  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={useThemeStyles()}>
      <RootNavigator />
    </NavigationContainer>
  );
}

const Stack = createNativeStackNavigator<RootStackParamList>();

export function RootNavigator() {
 
  const dimensions = useWindowDimensions();

  const nav = dimensions.width > 425 ? DrawerNavigator : TabNavigator

  return (
    <Stack.Navigator>
      <Stack.Screen name="Gabba" component={nav} options={{ headerShown: false }} />
      <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
      <Stack.Screen name="Modal" component={ModalScreen} />
    </Stack.Navigator>
  );
}
