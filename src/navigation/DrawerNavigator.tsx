import React from 'react';
import {
  createDrawerNavigator,
} from '@react-navigation/drawer';
import { Appearance, useWindowDimensions } from 'react-native';
import NavigationSidebar from './NavigationSidebar';
import { RootDrawerParamList } from '../types/Navigation';
import { Ionicons } from '@expo/vector-icons';
import AccountScreen from '../screens/AccountScreen';
import DashboardScreen from '../screens/DashboardScreen';
import FlowScreen from '../screens/FlowScreen';
import NewsScreen from '../screens/NewsScreen';
import SearchScreen from '../screens/SearchScreen';
import AccountNavigator from './AccountNavigator';

const Drawer = createDrawerNavigator<RootDrawerParamList>();

function DrawerNavigator() {
  const dimensions = useWindowDimensions();
  const drawerStyle = dimensions.width > 768 ? { width: 300, marginLeft: 0, paddingTop: 80 } : { width: 60, marginLeft: 0, paddingTop: 80 };
  const colorScheme = Appearance.getColorScheme();

  const renderTitle = (title:string) => {
    return dimensions.width > 768 ? title : '';
  }

  const renderIconColor = () => {
    return colorScheme === 'light' ? '#000' : '#FFF';
  }

  return (
    <Drawer.Navigator
      useLegacyImplementation
      screenOptions={{
        drawerType: 'permanent',
        headerShown: false,
        drawerActiveTintColor: '#ED203D',
        drawerLabelStyle: {
          padding: 8,
          fontSize: 18,
        },
        drawerStyle,
      }}
      drawerContent={(props) => <NavigationSidebar {...props} />}
    >
      <Drawer.Screen name="Dashboard" component={DashboardScreen} options={{
           title: renderTitle('Home'),
           drawerIcon: ({focused, size}) => (
              <Ionicons
                 name="home-outline"
                 size={size}
                 color={focused ? '#ED203D' : renderIconColor()}
              />
           ),
        }}/>
      <Drawer.Screen name="Search" component={SearchScreen} options={{
           title: renderTitle('Search'),
           drawerIcon: ({focused, size}) => (
              <Ionicons
                 name="search-outline"
                 size={size}
                 color={focused ? '#ED203D' : renderIconColor()}
              />
           ),
        }}/>
      <Drawer.Screen name="Flow" component={FlowScreen} options={{
           title: renderTitle('Flow'),
           drawerIcon: ({focused, size}) => (
              <Ionicons
                 name="pulse-outline"
                 size={size}
                 color={focused ? '#ED203D' : renderIconColor()}
              />
           ),
        }}/>
      <Drawer.Screen name="News" component={NewsScreen} options={{
           title: renderTitle('News'),
           drawerIcon: ({focused, size}) => (
              <Ionicons
                 name="globe-outline"
                 size={size}
                 color={focused ? '#ED203D' : renderIconColor()}
              />
           ),
        }}/>
      <Drawer.Screen name="Account" component={AccountNavigator} options={{
           title: renderTitle('Account'),
           drawerIcon: ({focused, size}) => (
              <Ionicons
                 name="person-outline"
                 size={size}
                 color={focused ? '#ED203D' : renderIconColor()}
              />
           ),
        }}/>
    </Drawer.Navigator>
  );
}

export default DrawerNavigator;
