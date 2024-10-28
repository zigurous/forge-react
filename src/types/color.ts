export type ColorToken =
  | 'inherit'
  | 'current'
  | 'transparent'
  | 'black'
  | 'white'
  | 'foreground'
  | 'background'
  | 'surface-1'
  | 'surface-2'
  | 'surface-3'
  | 'surface-4'
  | 'surface-5'
  | 'surface-6'
  | 'surface-7'
  | 'surface-8'
  | 'surface-9'
  | SemanticColorToken;

export type SemanticColorToken =
  | 'default'
  | 'primary'
  | 'secondary'
  | 'success'
  | 'danger'
  | 'warning'
  | 'info';

export type SyntaxColorToken =
  | 'comment'
  | 'constant'
  | 'diff-changed-text'
  | 'diff-changed-bg'
  | 'diff-deleted-text'
  | 'diff-deleted-bg'
  | 'diff-ignored-text'
  | 'diff-ignored-bg'
  | 'diff-inserted-text'
  | 'diff-inserted-bg'
  | 'entity'
  | 'function'
  | 'keyword'
  | 'property'
  | 'string';
