import { ReactNode } from 'react';
import { TouchableOpacityProps } from 'react-native';
import { Theme } from '../../../utils/theme/theme';

export interface ButtonProps extends TouchableOpacityProps {
  children: string;
  isLoading?: boolean;
  color?: ButtonColors;
  variant?: ButtonVariants;
  startElement?: ReactNode;
  endElement?: ReactNode;
}

export enum ButtonColors {
  Primary = 'primary',
}

export type ButtonColorsData = {
  [color in ButtonColors]: keyof Theme['colors'];
};

export enum ButtonVariants {
  Contained = 'container',
  Outlined = 'outlined',
  Text = 'text',
}

export interface GetBaseButtonColorProps {
  color: ButtonColors;
  variant?: ButtonVariants;
}
