import React from 'react';
import renderInProviders from '../../../utils/test/renderInProviders';
import Image from './Image';

describe('<Image />', () => {
  it('should render correctly', () => {
    const { getByTestId } = renderInProviders(<Image testID="image" />);

    const image = getByTestId('image');

    expect(image).toBeTruthy();
  });
});
