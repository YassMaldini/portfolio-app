import Box from '../../designSystem/Box/Box';
import { SvgIcon } from '../../designSystem/SvgIcon/SvgIcon';
import Text from '../../designSystem/Text/Text';
import { ResumeLanguageItemProps } from './ResumeLanguageItem.types';

const ResumeLanguageItem = ({ icon, language, level }: ResumeLanguageItemProps) => {
  return (
    <Box flexDirection="row" alignItems="center" marginBottom="s">
      <SvgIcon icon={icon} marginRight="sToM" />
      <Text fontSize={16} fontFamily="Roboto-Medium">
        {language}
        {' - '}
        <Text fontFamily="Roboto-Medium" color="textHighlight">
          {level}
        </Text>
      </Text>
    </Box>
  );
};

export default ResumeLanguageItem;
