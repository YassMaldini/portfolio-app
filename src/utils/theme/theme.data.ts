import {
  spacing as polarisSpacing,
  shape,
  breakpoints as polarisBreakpoints,
  colors as polarisColors,
} from '@shopify/polaris-tokens';
import { remToNumber } from '../numbers/remToNumber';
import { kebabCaseToCamelCase } from '../string/kebabCaseToCamelCase';

export const spacing = {
  none: remToNumber(polarisSpacing['space-0']),
  xxxs: remToNumber(polarisSpacing['space-025']),
  xxs: remToNumber(polarisSpacing['space-05']),
  xs: remToNumber(polarisSpacing['space-1']),
  s: remToNumber(polarisSpacing['space-2']),
  sToStoM: remToNumber(polarisSpacing['space-3']),
  sToM: remToNumber(polarisSpacing['space-4']),
  sToMtoM: remToNumber(polarisSpacing['space-5']),
  m: remToNumber(polarisSpacing['space-6']),
  mToMtoL: remToNumber(polarisSpacing['space-8']),
  mToL: remToNumber(polarisSpacing['space-10']),
  mToLtoL: remToNumber(polarisSpacing['space-12']),
  l: remToNumber(polarisSpacing['space-16']),
  lToXl: remToNumber(polarisSpacing['space-20']),
  xl: remToNumber(polarisSpacing['space-24']),
  xxl: remToNumber(polarisSpacing['space-28']),
  xxxl: remToNumber(polarisSpacing['space-32']),
};

export const borderRadii = {
  xxs: remToNumber(shape['border-radius-05']),
  xs: remToNumber(shape['border-radius-1']),
  s: remToNumber(shape['border-radius-2']),
  m: remToNumber(shape['border-radius-3']),
  l: remToNumber(shape['border-radius-4']),
  xl: remToNumber(shape['border-radius-5']),
  xxl: remToNumber(shape['border-radius-6']),
};

export const breakpoints = {
  phone: remToNumber(polarisBreakpoints['breakpoints-xs']),
  tablet: remToNumber(polarisBreakpoints['breakpoints-md']),
  largeTablet: remToNumber(polarisBreakpoints['breakpoints-lg']),
};

export const textVariants = {
  defaults: {
    color: 'text',
    fontFamily: 'Roboto-Regular',
  },
  title1: {
    fontSize: 36,
    fontFamily: 'Roboto-Medium',
    marginBottom: 's',
  },
  title2: {
    fontSize: 28,
    fontFamily: 'Roboto-Medium',
    marginBottom: 's',
  },
};

export const colors = Object.entries(polarisColors).reduce(
  (acc, [key, value]) => ({
    ...acc,
    [kebabCaseToCamelCase(key)]: value,
  }),
  {}
);
