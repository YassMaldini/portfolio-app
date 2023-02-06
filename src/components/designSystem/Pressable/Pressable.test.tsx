import React from 'react';
import { fireEvent } from '@testing-library/react-native';
import renderInProviders from '../../../utils/test/renderInProviders';
import Box from '../Box/Box';
import Pressable from './Pressable';

describe('<Pressable />', () => {
  it('should render correctly', () => {
    const { getByTestId } = renderInProviders(<Pressable testID="pressable" />);

    const pressable = getByTestId('pressable');

    expect(pressable).toBeTruthy();
  });

  it('should render children correctly', () => {
    const { getByTestId } = renderInProviders(
      <Pressable testID="pressable">
        <Box testID="children" />
      </Pressable>
    );

    const pressable = getByTestId('pressable');
    const children = getByTestId('children');

    expect(pressable).toBeTruthy();
    expect(children).toBeTruthy();
  });

  it('should handle onPress correctly', () => {
    const onPress = jest.fn();

    const { getByTestId } = renderInProviders(<Pressable testID="pressable" {...{ onPress }} />);

    const pressable = getByTestId('pressable');

    fireEvent.press(pressable);

    expect(onPress).toHaveBeenCalledTimes(1);
  });
});
