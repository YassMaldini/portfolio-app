import { FC } from 'react';
import { SvgProps } from 'react-native-svg';

export interface LanguageListItem {
  language: string;
  level: string;
  icon: FC<SvgProps>;
}
