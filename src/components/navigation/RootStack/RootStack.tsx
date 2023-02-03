import * as SplashScreen from 'expo-splash-screen';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTheme } from '@shopify/restyle';
import { Theme } from '../../../utils/theme/theme';
import BottomTabStack from '../BottomTabStack/BottomTabStack';

SplashScreen.preventAutoHideAsync();

const RootStack = () => {
  const { colors } = useTheme<Theme>();

  return (
    <SafeAreaView edges={['top']} style={{ flex: 1, backgroundColor: colors.background }}>
      <BottomTabStack />
    </SafeAreaView>
  );
};

export default RootStack;
