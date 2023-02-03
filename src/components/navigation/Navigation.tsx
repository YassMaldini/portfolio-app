import { DarkTheme, NavigationContainer } from '@react-navigation/native';
import { ThemeProvider } from '@shopify/restyle';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useCallback, useEffect, useMemo } from 'react';
import getTheme from '../../utils/theme/theme';
import RootStack from './RootStack/RootStack';
import { useSelector } from 'react-redux';
import { currentLanguageSelector, darkModeSelector } from '../../store/main/mainReducerSelectors';
import { StatusBar } from 'expo-status-bar';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { DraxProvider } from 'react-native-drax';
import Box from '../designSystem/Box/Box';
import { Loading } from '../commons/Loading/Loading';
import i18n from '../../utils/i18n/i18n';

const Navigation = (): JSX.Element => {
  const isDarkMode = useSelector(darkModeSelector);
  const currentLanguage = useSelector(currentLanguageSelector);

  const theme = useMemo(() => getTheme(isDarkMode), [isDarkMode]);

  const navigationTheme = useMemo(() => {
    return {
      ...DarkTheme,
      colors: {
        ...DarkTheme.colors,
        background: theme.colors.background,
      },
    };
  }, [isDarkMode]);

  useEffect(() => {
    i18n.changeLanguage(currentLanguage);
  }, [currentLanguage]);

  const [fontsLoaded] = useFonts({
    'Roboto-Regular': require('../../../assets/fonts/Roboto/Roboto-Regular.ttf'),
    'Roboto-Medium': require('../../../assets/fonts/Roboto/Roboto-Medium.ttf'),
    'Roboto-Bold': require('../../../assets/fonts/Roboto/Roboto-Bold.ttf'),
    'Roboto-Italic': require('../../../assets/fonts/Roboto/Roboto-Italic.ttf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return <Loading />;
  }

  return (
    <NavigationContainer theme={navigationTheme}>
      <StatusBar style={isDarkMode ? 'light' : 'dark'} translucent />
      <ThemeProvider {...{ theme }}>
        <BottomSheetModalProvider>
          <DraxProvider>
            <SafeAreaProvider style={{ backgroundColor: theme.colors.background }}>
              <Box flex={1} onLayout={onLayoutRootView}>
                <RootStack />
              </Box>
            </SafeAreaProvider>
          </DraxProvider>
        </BottomSheetModalProvider>
      </ThemeProvider>
    </NavigationContainer>
  );
};

export default Navigation;
