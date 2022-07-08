import { DrawerNavigationHelpers, DrawerDescriptorMap } from '@react-navigation/drawer/lib/typescript/src/types';
import { DrawerNavigationState, NavigatorScreenParams, ParamListBase } from '@react-navigation/native';

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
export type RootStackParamList = {
  'Gabba': NavigatorScreenParams<GabbaStackParams>;
  'NotFound': undefined;
  Modal: undefined;
};

export type RootDrawerParamList = {
  'Dashboard': undefined;
  'Account': undefined;
  'Search': undefined;
  'Flow': undefined;
  'News': undefined;
};

export type GabbaStackParams = {
  'Dashboard': undefined;
  'Account': undefined;
  'Search': undefined;
  'Flow': undefined;
  'News': undefined;
  'SignUp': undefined;
  'Login': undefined;
};

export type SideHeaderProps = {
  userName: string
};

export type DrawerListItemProps = {
  state: DrawerNavigationState<ParamListBase>;
  navigation: DrawerNavigationHelpers;
  descriptors: DrawerDescriptorMap;
};
