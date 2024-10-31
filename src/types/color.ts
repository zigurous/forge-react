import { Color, SemanticColor, SyntaxColor } from '../enums';

export type ColorToken = `${Color}`;
export type SemanticColorToken = `${SemanticColor}`;
export type SyntaxColorToken = `${SyntaxColor}`;
export type TextColorToken =
  | ColorToken
  | 'subtle'
  | 'muted'
  | 'disabled'
  | 'soft';
