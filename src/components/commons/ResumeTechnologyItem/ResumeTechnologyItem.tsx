import Box from '../../designSystem/Box/Box';
import { SvgIcon } from '../../designSystem/SvgIcon/SvgIcon';
import Text from '../../designSystem/Text/Text';
import { ResumeTechnologyItemProps } from './ResumeTechnologyItem.types';

const ResumeTechnologyItem = ({ label, icon, enabled }: ResumeTechnologyItemProps) => {
  return (
    <Box flexDirection="row" alignItems="center" marginBottom="s">
      <SvgIcon
        {...{ icon }}
        color={enabled ? 'iconHighlight' : 'iconDisabled'}
        marginRight="sToM"
      />
      <Text fontSize={16} fontFamily="Roboto-Medium">
        {label}
      </Text>
    </Box>
  );
};

export default ResumeTechnologyItem;
