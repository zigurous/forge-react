export type ColNumber =
  | 0
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 7
  | 8
  | 9
  | 10
  | 11
  | 12
  | '0'
  | '1'
  | '2'
  | '3'
  | '4'
  | '5'
  | '6'
  | '7'
  | '8'
  | '9'
  | '10'
  | '11'
  | '12';

export type ColSize = ColNumber | 'equal' | 'auto' | 'none';
export type ColOrder = ColNumber | 'first' | 'last' | 'none';
export type ColOffset = ColNumber;

export type ColSizeClass =
  | ColSize
  | {
      size?: ColSize;
      order?: ColOrder;
      offset?: ColOffset;
    };
