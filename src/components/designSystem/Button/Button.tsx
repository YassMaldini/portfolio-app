import { createBox } from '@shopify/restyle';
import React from 'react';
import { TouchableOpacity, TouchableOpacityProps } from 'react-native';
import { Theme } from '../../../utils/theme/theme';
import Text from '../Text/Text';
import { getBaseButtonColor, getButtonContentColor } from './Button.theme';
import { ButtonColors, ButtonProps, ButtonVariants } from './Button.types';

const BaseButton = createBox<Theme, TouchableOpacityProps>(TouchableOpacity);

const Button = ({
  children,
  color = ButtonColors.Primary,
  variant = ButtonVariants.Contained,
  startElement,
  endElement,
  ...props
}: ButtonProps) => {
  const baseButtonColor = getBaseButtonColor({ color, variant });
  const buttonContentColor = getButtonContentColor({ color, variant });

  return (
    <BaseButton
      flexDirection="row"
      alignItems="center"
      justifyContent="center"
      backgroundColor={baseButtonColor}
      borderWidth={1}
      borderColor={variant === ButtonVariants.Outlined ? buttonContentColor : 'transparent'}
      padding="s"
      borderRadius="xl"
      {...props}>
      {Boolean(startElement) && startElement}
      <Text color={buttonContentColor} fontFamily="Roboto-Medium" fontSize={16}>
        {children}
      </Text>
      {Boolean(endElement) && endElement}
    </BaseButton>
  );
};

export default Button;
