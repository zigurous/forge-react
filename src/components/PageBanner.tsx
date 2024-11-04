import classNames from 'classnames';
import React from 'react';
import type { ThemeToken } from '../types';

export type PageBannerProps = {
  backgroundColor?: string;
  children?: React.ReactNode;
  className?: string;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  style?: React.CSSProperties;
  theme?: ThemeToken;
  transparent?: boolean;
} & React.ComponentPropsWithRef<'div'>;

export default function PageBanner({
  backgroundColor,
  children,
  className,
  size = 'md',
  style,
  theme,
  transparent = false,
  ...rest
}: PageBannerProps) {
  return (
    <div
      className={classNames(
        'page-banner',
        {
          [`page-banner--${size}`]: size,
          'page-banner--transparent': transparent,
        },
        className,
      )}
      data-theme={theme}
      style={{ backgroundColor: backgroundColor, ...style }}
      {...rest}
    >
      {children}
    </div>
  );
}
