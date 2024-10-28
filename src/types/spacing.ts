export type SpacingToken =
  | 'xxxs'
  | 'xxs'
  | 'xs'
  | 'sm'
  | 'md'
  | 'lg'
  | 'xl'
  | 'xxl'
  | 'xxxl'
  | '2xl'
  | '2xxl'
  | '2xxxl';

export type EmToken =
  | '1em'
  | '2em'
  | '3em'
  | '4em'
  | '5em'
  | '6em'
  | '7em'
  | '8em';

export type RemToken =
  | '1rem'
  | '2rem'
  | '3rem'
  | '4rem'
  | '5rem'
  | '6rem'
  | '7rem'
  | '8rem';

export type MarginToken =
  | 'auto'
  | '0'
  | '1px'
  | EmToken
  | RemToken
  | SpacingToken;

export type PaddingToken = '0' | '1px' | EmToken | RemToken | SpacingToken;
