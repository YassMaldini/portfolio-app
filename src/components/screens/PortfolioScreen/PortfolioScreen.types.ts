import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { BottomTabStackParamsList } from '../../navigation/BottomTabStack/BottomTabStack.types';

export type PortfolioScreenProps = NativeStackScreenProps<
  BottomTabStackParamsList,
  'PortfolioScreen'
>;
