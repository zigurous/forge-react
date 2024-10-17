import classNames from 'classnames';
import React from 'react';

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
  gutters?: 'sm' | 'md' | 'lg' | 'none';
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
  name: string,
  obj: ColSizeClass | undefined,
): { [key: string]: boolean } | null {
  if (typeof obj === 'boolean') {
    return {
      [`col-${name}`]: obj,
    };
  }
  if (typeof obj === 'number' || typeof obj === 'string') {
    return {
      [`col-${name}-${obj}`]: true,
    };
  }
  if (typeof obj === 'object' && obj) {
    const { size, order, offset } = obj;
    return {
      [`col-${name}`]: typeof size === 'undefined',
      [`col-${name}-${size}`]: typeof size !== 'undefined',
      [`order-${name}-${order}`]: typeof order !== 'undefined',
      [`offset-${name}-${offset}`]: typeof offset !== 'undefined',
    };
  }
  return null;
}
