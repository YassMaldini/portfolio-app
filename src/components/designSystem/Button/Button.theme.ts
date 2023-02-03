import { Theme } from '../../../utils/theme/theme';
import {
  ButtonColors,
  ButtonColorsData,
  ButtonVariants,
  GetBaseButtonColorProps,
} from './Button.types';

export const BUTTON_COLORS = Object.freeze<ButtonColorsData>({
  [ButtonColors.Primary]: 'actionPrimary',
});

export const getBaseButtonColor = ({
  color,
  variant,
}: GetBaseButtonColorProps): keyof Theme['colors'] => {
  const buttonColor = BUTTON_COLORS[color];
  switch (variant) {
    case ButtonVariants.Contained:
      return buttonColor;
    case ButtonVariants.Outlined:
      return 'transparent';
    case ButtonVariants.Text:
      return 'transparent';
    default:
      return buttonColor;
  }
};

export const getButtonContentColor = ({
  color,
  variant,
}: GetBaseButtonColorProps): keyof Theme['colors'] => {
  const buttonColor = BUTTON_COLORS[color];
  switch (variant) {
    case ButtonVariants.Contained:
      return 'textOnPrimary';
    case ButtonVariants.Outlined:
      return buttonColor;
    case ButtonVariants.Text:
      return buttonColor;
    default:
      return 'textOnPrimary';
  }
};
