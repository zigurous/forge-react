import { Spacing } from '../enums';

export type SpacingToken = `${Spacing}`;
export type PaddingToken = '0' | '1px' | SpacingToken;
export type MarginToken = 'auto' | '0' | '1px' | SpacingToken;
