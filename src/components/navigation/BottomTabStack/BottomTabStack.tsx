import { Navigator, Screen } from './BottomTabStack.navigator';
import { useTheme } from '@shopify/restyle';
import { Theme } from '../../../utils/theme/theme';
import HomeScreen from '../../screens/HomeScreen/HomeScreen';
import { SvgIcon } from '../../designSystem/SvgIcon/SvgIcon';
import HomeIcon from '../../../../assets/vectors/home-outline.svg';
import SettingsIcon from '../../../../assets/vectors/settings-outline.svg';
import NewspaperIcon from '../../../../assets/vectors/newspaper-outline.svg';
import ResumeScreen from '../../screens/ResumeScreen/ResumeScreen';
import SettingsScreen from '../../screens/SettingsScreen/SettingsScreen';
import { useTranslation } from 'react-i18next';

const BottomTabStack = () => {
  const { t } = useTranslation('commons', { keyPrefix: 'bottomTab' });

  const theme = useTheme<Theme>();

  const iconSize = 24;
  const iconColor = (focused: boolean) => (focused ? 'iconHighlight' : 'text');

  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarStyle: {
          elevation: 0,
          borderTopWidth: 1,
          borderTopColor: 'rgba(0, 0, 0, .04)',
          backgroundColor: theme.colors.background,
        },
      }}>
      <Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          tabBarLabel: t('home'),
          tabBarIcon: ({ focused }) => (
            <SvgIcon
              width={iconSize}
              height={iconSize}
              icon={HomeIcon}
              color={iconColor(focused)}
            />
          ),
          tabBarActiveTintColor: theme.colors.textHighlight,
          tabBarInactiveTintColor: theme.colors.text,
        }}
      />
      <Screen
        name="ResumeScreen"
        component={ResumeScreen}
        options={{
          tabBarLabel: t('resume'),
          tabBarIcon: ({ focused }) => (
            <SvgIcon
              width={iconSize}
              height={iconSize}
              icon={NewspaperIcon}
              color={iconColor(focused)}
            />
          ),
          tabBarActiveTintColor: theme.colors.textHighlight,
          tabBarInactiveTintColor: theme.colors.text,
        }}
      />
      <Screen
        name="SettingsScreen"
        component={SettingsScreen}
        options={{
          tabBarLabel: t('settings'),
          tabBarIcon: ({ focused }) => (
            <SvgIcon
              width={iconSize}
              height={iconSize}
              icon={SettingsIcon}
              color={iconColor(focused)}
            />
          ),
          tabBarActiveTintColor: theme.colors.textHighlight,
          tabBarInactiveTintColor: theme.colors.text,
        }}
      />
    </Navigator>
  );
};

export default BottomTabStack;