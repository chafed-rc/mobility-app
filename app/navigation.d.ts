// navigation.d.ts

import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

export type RootStackParamList = {
  Home: undefined;
  Analytics: undefined;
};

export type HomeScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Home'
>;

export type AnalyticsScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Analytics'
>;

export type HomeScreenRouteProp = RouteProp<RootStackParamList, 'Home'>;
export type AnalyticsScreenRouteProp = RouteProp<RootStackParamList, 'Analytics'>;