import classNames from 'classnames';
import React from 'react';
import type { ColOffset, ColOrder, ColSize, ColSizeClass, SpacingToken } from '../types'; // prettier-ignore

export type ColProps = {
  gutters?: SpacingToken | 'none';
  size?: ColSize;
  offset?: ColOffset;
  order?: ColOrder;
  sm?: ColSizeClass;
  md?: ColSizeClass;
  lg?: ColSizeClass;
  xl?: ColSizeClass;
} & React.ComponentPropsWithRef<'div'>;

export default function Col({
  children,
  className,
  gutters,
  size,
  order,
  offset,
  sm,
  md,
  lg,
  xl,
  ...rest
}: ColProps) {
  return (
    <div
      className={classNames(
        getClassNames('', { size, order, offset }),
        getClassNames('sm:', sm),
        getClassNames('md:', md),
        getClassNames('lg:', lg),
        getClassNames('xl:', xl),
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
  sizeClass: ColSizeClass | undefined,
): { [key: string]: boolean } | null {
  if (typeof sizeClass === 'number' || typeof sizeClass === 'string') {
    return {
      [`${breakpoint}col`]: sizeClass === 'equal',
      [`${breakpoint}col-${sizeClass}`]:
        sizeClass !== 'none' && sizeClass !== 'equal',
    };
  }
  if (typeof sizeClass === 'object') {
    const { size, order, offset } = sizeClass;
    return {
      [`${breakpoint}col`]: typeof size === 'undefined' || size === 'equal',
      [`${breakpoint}col-${size}`]:
        typeof size !== 'undefined' && size != 'none' && size !== 'equal',
      [`${breakpoint}order-${order}`]: typeof order !== 'undefined',
      [`${breakpoint}offset-${offset}`]: typeof offset !== 'undefined',
    };
  }
  return null;
}
