import React from 'react';
import renderInProviders from '../../../utils/test/renderInProviders';
import Box from '../Box/Box';

describe('<Box />', () => {
  it('should render correctly', () => {
    const { getByTestId } = renderInProviders(<Box testID="box" />);

    const box = getByTestId('box');

    expect(box).toBeTruthy();
  });

  it('should render children correctly', () => {
    const { getByTestId } = renderInProviders(
      <Box testID="box">
        <Box testID="children" />
      </Box>
    );

    const box = getByTestId('box');
    const children = getByTestId('children');

    expect(box).toBeTruthy();
    expect(children).toBeTruthy();
  });
});
