import Box from '../../designSystem/Box/Box';
import Pressable from '../../designSystem/Pressable/Pressable';
import { SvgIcon } from '../../designSystem/SvgIcon/SvgIcon';
import Text from '../../designSystem/Text/Text';
import { ProjectListItemProps } from './ProjectListItem.types';
import CalendarIcon from '../../../../assets/vectors/calendar-outline.svg';
import ImageIcon from '../../../../assets/vectors/image-outline.svg';
import { Trans } from 'react-i18next';

const ProjectListItem = ({ title, stack, date, images, ...props }: ProjectListItemProps) => {
  return (
    <Pressable marginBottom="m" {...props}>
      <Box
        paddingHorizontal="sToM"
        paddingVertical="sToStoM"
        backgroundColor="surface"
        borderRadius="l">
        <Text fontFamily="Roboto-Medium" fontSize={18} marginBottom="sToStoM">
          <Trans components={[<Text key="title" fontFamily="Roboto-Medium" />]}>{title}</Trans>
        </Text>
        <Box flexDirection="row" marginBottom="sToStoM">
          {stack.map((item, index) => (
            <Box
              key={index}
              backgroundColor="surfaceSubdued"
              paddingHorizontal="s"
              paddingVertical="xxs"
              borderRadius="l"
              marginRight="s">
              <Text color="white" fontSize={12}>
                {item}
              </Text>
            </Box>
          ))}
        </Box>
        <Box flexDirection="row" justifyContent="space-between">
          <Box flexDirection="row" alignItems="center">
            <SvgIcon
              icon={CalendarIcon}
              width={16}
              height={16}
              color="textSubdued"
              marginRight="s"
            />
            <Text color="textSubdued" textTransform="capitalize">
              {date}
            </Text>
          </Box>
          <Box flexDirection="row" alignItems="center">
            <SvgIcon icon={ImageIcon} width={16} height={16} color="textSubdued" marginRight="s" />
            <Text color="textSubdued">{images.length}</Text>
          </Box>
        </Box>
      </Box>
    </Pressable>
  );
};

export default ProjectListItem;
