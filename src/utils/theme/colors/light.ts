import COMMONS_COLORS from './commons';
import { PALETTE } from './palette';

export const LIGHT_COLORS = Object.freeze({
  ...COMMONS_COLORS,
  text: PALETTE.text,
  background: PALETTE.background,

  textSubdued: PALETTE.textSubdued,

  surface: PALETTE.surface,
  surfaceHovered: PALETTE.surfaceHovered,
  surfacePressed: PALETTE.surfacePressed,
  surfaceSearchField: PALETTE.surfaceSearchField,
  surfaceNeutralSubdued: PALETTE.surfaceNeutralSubdued,

  icon: PALETTE.icon,
  divider: PALETTE.divider,
  border: PALETTE.border,

  interactive: PALETTE.interactive,
  interactivePressed: PALETTE.interactivePressed,

  actionSecondaryHovered: PALETTE.actionSecondaryHovered,
  actionSecondaryPressed: PALETTE.actionSecondaryPressed,
});
