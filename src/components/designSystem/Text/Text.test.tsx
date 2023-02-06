import React from 'react';
import renderInProviders from '../../../utils/test/renderInProviders';
import { TextStyle } from 'react-native';
import Text from './Text';
import getTheme from '../../../utils/theme/theme';

describe('<SvgIcon />', () => {
  it('should render text correctly', () => {
    const { getByTestId, queryByText } = renderInProviders(<Text testID="text">My Text</Text>);

    const text = getByTestId('text');

    expect(text).toBeTruthy();
    expect(queryByText('My Text')).toBeTruthy();
  });

  it('should render style correctly', () => {
    const theme = getTheme();

    const { getByTestId } = renderInProviders(
      <Text testID="text" color="textHighlight" margin="s">
        My Text
      </Text>
    );

    const text = getByTestId('text');
    const textColor = (text.props.style as Array<TextStyle>).find((style) =>
      Boolean(style.color)
    )?.color;
    const textMargin = (text.props.style as Array<TextStyle>).find((style) =>
      Boolean(style.margin)
    )?.margin;

    expect(text).toBeTruthy();
    expect(textColor).toEqual(theme.colors.textHighlight);
    expect(textMargin).toEqual(theme.spacing.s);
  });
});
