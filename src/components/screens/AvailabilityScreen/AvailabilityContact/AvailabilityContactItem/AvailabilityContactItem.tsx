import Pressable from '../../../../designSystem/Pressable/Pressable';
import { SvgIcon } from '../../../../designSystem/SvgIcon/SvgIcon';
import Text from '../../../../designSystem/Text/Text';
import { AvailabilityContactItemProps } from './AvailabilityContactItem.types';

const AvailabilityContactItem = ({ children, icon, ...props }: AvailabilityContactItemProps) => {
  return (
    <Pressable flexDirection="row" alignItems="center" marginBottom="sToM" {...props}>
      <SvgIcon {...{ icon }} color="iconHighlight" marginRight="sToM" />
      <Text fontSize={17}>{children}</Text>
    </Pressable>
  );
};

export default AvailabilityContactItem;
