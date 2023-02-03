import COMMONS_COLORS from './commons';
import { PALETTE } from './palette';

export const DARK_COLORS = Object.freeze({
  ...COMMONS_COLORS,
  text: PALETTE.textOnDark,
  background: PALETTE.black,

  textSubdued: PALETTE.textSubduedOnDark,

  surface: PALETTE.surfaceDark,
  surfaceHovered: PALETTE.surfaceHoveredDark,
  surfacePressed: PALETTE.surfacePressedDark,
  surfaceSearchField: PALETTE.surfaceSearchFieldDark,
  surfaceNeutralSubdued: PALETTE.surfaceNeutralSubduedDark,

  icon: PALETTE.iconOnDark,
  divider: PALETTE.dividerDark,
  border: PALETTE.borderOnDark,

  interactive: PALETTE.interactiveOnDark,
  interactivePressed: PALETTE.interactivePressedOnDark,

  actionSecondaryHovered: PALETTE.actionSecondaryHoveredDark,
  actionSecondaryPressed: PALETTE.actionSecondaryPressedDark,
});
