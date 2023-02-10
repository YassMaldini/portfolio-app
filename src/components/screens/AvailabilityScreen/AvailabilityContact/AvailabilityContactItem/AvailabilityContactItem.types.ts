import { FC, ReactNode } from 'react';
import { SvgProps } from 'react-native-svg';
import { PressableProps } from '../../../../designSystem/Pressable/Pressable.types';

export interface AvailabilityContactItemProps extends PressableProps {
  children: string | ReactNode;
  icon: FC<SvgProps>;
}
