import * as SplashScreen from 'expo-splash-screen';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTheme } from '@shopify/restyle';
import { Theme } from '../../../utils/theme/theme';
import BottomTabStack from '../BottomTabStack/BottomTabStack';
import { useEffect } from 'react';
import { setAvailability } from '../../../store/main/mainActions/mainActions';
import { useDispatch } from 'react-redux';

SplashScreen.preventAutoHideAsync();

const RootStack = () => {
  const dispatch = useDispatch();
  const { colors } = useTheme<Theme>();

  useEffect(() => {
    (async () => {
      const response = await fetch('https://app.yassbk.com/is_available');
      const { isAvailable } = await response.json();
      setAvailability(isAvailable)(dispatch);
    })();
  }, [dispatch]);

  return (
    <SafeAreaView edges={['top']} style={{ flex: 1, backgroundColor: colors.background }}>
      <BottomTabStack />
    </SafeAreaView>
  );
};

export default RootStack;
