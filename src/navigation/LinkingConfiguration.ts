/**
 * Learn more about deep linking with React Navigation
 * https://reactnavigation.org/docs/deep-linking
 * https://reactnavigation.org/docs/configuring-links
 */

import { LinkingOptions } from '@react-navigation/native';
import * as Linking from 'expo-linking';

import { RootStackParamList } from '../types/Navigation';

const linking: LinkingOptions<RootStackParamList> = {
  prefixes: [Linking.makeUrl('/')],
  config: {
    screens: {
      Gabba: {
        screens: {
          'Dashboard': {
            screens: {
              MainFeed: {
                path: '/',
              },
            },
          },
          'Search': {
            path: '/Search',
          },
          'Flow': {
            path: '/Flow',
          },
          'News': {
            path: '/News',
          },
          'Account': {
            path: '/Account',
            screens: {
              Login: {
                path: '/login',
              },
              SignUp: {
                path: '/signup',
              },
            },
          },
        },
      },
      Modal: 'modal',
      NotFound: '*',
    },
  },
};

export default linking;
