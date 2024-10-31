import { FontSize, FontType, FontWeight } from '../enums';

export type FontTypeToken = `${FontType}`;
export type FontWeightToken = `${FontWeight}` | keyof typeof FontWeight;
export type FontSizeToken = `${FontSize}`;
