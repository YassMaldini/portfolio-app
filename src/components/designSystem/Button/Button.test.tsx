import React from 'react';
import { fireEvent } from '@testing-library/react-native';
import Button from './Button';
import { ButtonColors, ButtonVariants } from './Button.types';
import renderInProviders from '../../../utils/test/renderInProviders';
import Box from '../Box/Box';
import getTheme from '../../../utils/theme/theme';
import { TextStyle } from 'react-native';
// import TextProps from '../Text/Text.types';

describe('<Button />', () => {
  it('should render correctly', () => {
    const { getByText, getByTestId } = renderInProviders(
      <Button color={ButtonColors.Primary} variant={ButtonVariants.Contained} testID="button">
        My Button
      </Button>
    );

    const button = getByTestId('button');
    const text = getByText('My Button');

    expect(button).toBeTruthy();
    expect(text).toBeTruthy();
  });

  it('should render colors correctly', () => {
    const theme = getTheme();

    const { getByTestId } = renderInProviders(
      <Button color={ButtonColors.Primary} variant={ButtonVariants.Contained} testID="button">
        Test
      </Button>
    );

    const button = getByTestId('button');

    expect(button.props.style.backgroundColor).toEqual(theme.colors.actionPrimary);
  });

  it('should render variants correctly', () => {
    const theme = getTheme();

    const containedVariantButton = renderInProviders(
      <Button color={ButtonColors.Primary} variant={ButtonVariants.Contained} testID="button">
        Test
      </Button>
    );

    const containedButton = containedVariantButton.getByTestId('button');
    const containedButtonText = containedVariantButton.getByTestId('buttonText');
    const containedButtonTextColor = (containedButtonText.props.style as Array<TextStyle>).find(
      (style) => Boolean(style.color)
    )?.color;

    expect(containedButton.props.style.backgroundColor).toEqual(theme.colors.actionPrimary);
    expect(containedButtonTextColor).toEqual(theme.colors.textOnPrimary);

    const outlinedVariantButton = renderInProviders(
      <Button color={ButtonColors.Primary} variant={ButtonVariants.Outlined} testID="button">
        Test
      </Button>
    );

    const outlinedButton = outlinedVariantButton.getByTestId('button');
    const outlinedButtonText = outlinedVariantButton.getByTestId('buttonText');
    const outlinedButtonTextColor = (outlinedButtonText.props.style as Array<TextStyle>).find(
      (style) => Boolean(style.color)
    )?.color;

    expect(outlinedButton.props.style.backgroundColor).toEqual(theme.colors.transparent);
    expect(outlinedButtonTextColor).toEqual(theme.colors.actionPrimary);
  });

  it('should handle onPress correctly', () => {
    const onPress = jest.fn();

    const { getByTestId } = renderInProviders(
      <Button testID="button" {...{ onPress }}>
        Test
      </Button>
    );

    const button = getByTestId('button');

    fireEvent.press(button);

    expect(onPress).toHaveBeenCalledTimes(1);
  });

  it('should be able to render start and end element', () => {
    const startElement = <Box testID="startElement" />;
    const endElement = <Box testID="endElement" />;

    const { getByTestId } = renderInProviders(
      <Button testID="button" {...{ startElement, endElement }}>
        Test
      </Button>
    );

    const start = getByTestId('startElement');
    const end = getByTestId('endElement');
    const button = getByTestId('button');

    expect(start).toBeTruthy();
    expect(end).toBeTruthy();
    expect(button).toBeTruthy();
  });
});
