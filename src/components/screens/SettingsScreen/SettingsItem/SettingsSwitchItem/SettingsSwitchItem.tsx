import { useTheme } from '@shopify/restyle';
import { Switch } from 'react-native';
import { Theme } from '../../../../../utils/theme/theme';
import SettingsItem from '../SettingsItem';
import { SettingsSwitchItemProps } from './SettingsSwitchItem.types';

const SettingsSwitchItem = ({ label, toggleSwitch, isEnabled = true }: SettingsSwitchItemProps) => {
  const { colors } = useTheme<Theme>();

  return (
    <SettingsItem
      {...{ label }}
      rightElement={
        <Switch
          testID="settingsSwitchItem"
          trackColor={{ false: '#767577', true: colors.actionPrimary }}
          thumbColor={isEnabled ? colors.actionSecondary : colors.surfaceNeutralSubdued}
          ios_backgroundColor={colors.surfaceNeutralSubdued}
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      }
    />
  );
};

export default SettingsSwitchItem;
