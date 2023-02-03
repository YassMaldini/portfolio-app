import { FC } from 'react';
import { SvgProps } from 'react-native-svg';

export interface ResumeTechnologyItemProps {
  icon: FC<SvgProps>;
  label: string;
  enabled: boolean;
}
