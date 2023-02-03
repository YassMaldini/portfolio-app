import { toPx } from '@shopify/polaris-tokens';
import { pxToNumber } from './pxToNumber';

export const remToNumber = (rem: string) => pxToNumber(toPx(rem) as string);
