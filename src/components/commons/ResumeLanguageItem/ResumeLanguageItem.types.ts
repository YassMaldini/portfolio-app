import { FC } from 'react';
import { SvgProps } from 'react-native-svg';

export interface ResumeLanguageItemProps {
  icon: FC<SvgProps>;
  language: string;
  level: string;
}
