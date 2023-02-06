import React from 'react';
import renderInProviders from '../../../utils/test/renderInProviders';
import { DEFAULT_SVG_ICON_SIZE, SvgIcon } from './SvgIcon';
import FrIcon from '../../../../assets/vectors/flags/fr.svg';
import { ViewStyle } from 'react-native';

describe('<SvgIcon />', () => {
  it('should render correctly', () => {
    const { getByTestId } = renderInProviders(<SvgIcon testID="icon" icon={FrIcon} />);

    const icon = getByTestId('icon');

    expect(icon).toBeTruthy();
  });

  it('should render with correct size', () => {
    const DEFAULT_SIZE = DEFAULT_SVG_ICON_SIZE;
    const CUSTOM_SIZE = 32;

    // Icon with default size
    const defaultSizeIcon = renderInProviders(<SvgIcon testID="defaultIcon" icon={FrIcon} />);

    const defaultIcon = defaultSizeIcon.getByTestId('defaultIcon');

    const defaultIconWidth = (defaultIcon.props.style as Array<ViewStyle>).find((style) =>
      Boolean(style.width)
    )?.width;
    const defaultIconHeight = (defaultIcon.props.style as Array<ViewStyle>).find((style) =>
      Boolean(style.width)
    )?.height;

    expect(defaultIcon).toBeTruthy();
    expect(defaultIconWidth).toEqual(DEFAULT_SIZE);
    expect(defaultIconHeight).toEqual(DEFAULT_SIZE);

    // Icon with custom size
    const customSizeIcon = renderInProviders(
      <SvgIcon testID="customIcon" icon={FrIcon} width={CUSTOM_SIZE} height={CUSTOM_SIZE} />
    );

    const customIcon = customSizeIcon.getByTestId('customIcon');

    const customIconWidth = (customIcon.props.style as Array<ViewStyle>).find((style) =>
      Boolean(style.width)
    )?.width;
    const customIconHeight = (customIcon.props.style as Array<ViewStyle>).find((style) =>
      Boolean(style.width)
    )?.height;

    expect(customIcon).toBeTruthy();
    expect(customIconWidth).toEqual(CUSTOM_SIZE);
    expect(customIconHeight).toEqual(CUSTOM_SIZE);
  });
});
