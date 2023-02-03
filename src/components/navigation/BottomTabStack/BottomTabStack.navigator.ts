import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { BottomTabStackParamsList } from './BottomTabStack.types';

export const { Navigator, Screen } = createBottomTabNavigator<BottomTabStackParamsList>();
