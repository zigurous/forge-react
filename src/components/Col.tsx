import classNames from 'classnames';
import React from 'react';
import type { SpacingToken } from '../types';

export type ColSizeClass =
  | number
  | string
  | boolean
  | {
      size?: number | string;
      order?: number | string;
      offset?: number | string;
    };

export type ColProps = {
  gutters?: SpacingToken | 'none';
  sm?: ColSizeClass;
  md?: ColSizeClass;
  lg?: ColSizeClass;
  xl?: ColSizeClass;
} & React.ComponentPropsWithRef<'div'>;

export default function Col({
  children,
  className,
  gutters,
  sm,
  md,
  lg,
  xl,
  ...rest
}: ColProps) {
  return (
    <div
      className={classNames(
        { col: !sm && !md && !lg && !xl },
        getClassNames('sm', sm),
        getClassNames('md', md),
        getClassNames('lg', lg),
        getClassNames('xl', xl),
        { [`gutters-${gutters}`]: gutters },
        className,
      )}
      {...rest}
    >
      {children}
    </div>
  );
}

function getClassNames(
  breakpoint: string,
  obj: ColSizeClass | undefined,
): { [key: string]: boolean } | null {
  if (typeof obj === 'boolean') {
    return {
      [`${breakpoint}:col`]: obj,
    };
  }
  if (typeof obj === 'number' || typeof obj === 'string') {
    return {
      [`${breakpoint}:col-${obj}`]: true,
    };
  }
  if (typeof obj === 'object' && obj) {
    const { size, order, offset } = obj;
    return {
      [`${breakpoint}:col`]: typeof size === 'undefined',
      [`${breakpoint}:col-${size}`]: typeof size !== 'undefined',
      [`${breakpoint}:order-${order}`]: typeof order !== 'undefined',
      [`${breakpoint}:offset-${offset}`]: typeof offset !== 'undefined',
    };
  }
  return null;
}
