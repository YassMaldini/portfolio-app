import Box from '../../../../designSystem/Box/Box';
import { SvgIcon } from '../../../../designSystem/SvgIcon/SvgIcon';
import Text from '../../../../designSystem/Text/Text';
import { SettingsLanguageItemProps } from './SettingsLanguageItem.types';
import ChevronForwardIcon from '../../../../../../assets/vectors/chevron-forward-outline.svg';
import SettingsItem from '../SettingsItem';

const SettingsLanguageItem = ({ label, value, onPress }: SettingsLanguageItemProps) => {
  const ICON_SIZE = 18;
  return (
    <SettingsItem
      {...{ label, onPress }}
      rightElement={
        <Box flexDirection="row" alignItems="center">
          <Text fontSize={16} color="textSubdued">
            {value}
          </Text>
          <SvgIcon
            icon={ChevronForwardIcon}
            color="textSubdued"
            width={ICON_SIZE}
            height={ICON_SIZE}
          />
        </Box>
      }
    />
  );
};

export default SettingsLanguageItem;
