import { createTheme } from '@shopify/restyle';
import { DARK_COLORS } from './colors/dark';
import { LIGHT_COLORS } from './colors/light';
import { borderRadii, breakpoints, spacing, textVariants } from './theme.data';

const getTheme = (darkMode?: boolean) =>
  createTheme({
    colors: darkMode ? DARK_COLORS : LIGHT_COLORS,
    spacing,
    borderRadii,
    breakpoints,
    textVariants,
  });

export default getTheme;

export type Theme = ReturnType<typeof getTheme>;
