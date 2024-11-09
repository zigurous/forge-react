import classNames from 'classnames';
import React from 'react';
import Overlay, { type OverlayProps } from './Overlay';

export type DrawerProps = {
  anchor?: 'left' | 'right' | 'top' | 'bottom';
  children?: React.ReactNode;
  className?: string;
  size?: 'sm' | 'md' | 'lg' | number;
} & Omit<OverlayProps, 'dialogClassName' | 'dialogZIndex'>;

export default function Drawer({
  anchor = 'left',
  children,
  className,
  size = 'md',
  style,
  ...rest
}: DrawerProps) {
  const customStyles = {
    '--drawer-size': typeof size === 'number' ? `${size}px` : undefined,
  };
  return (
    <Overlay
      className={classNames(
        'drawer',
        {
          [`drawer--${anchor}`]: anchor,
          [`drawer--${size}`]: size && typeof size === 'string',
        },
        className,
      )}
      dialogClassName="drawer__dialog"
      dialogZIndex="menu"
      style={{
        ...customStyles,
        ...style,
      }}
      {...rest}
    >
      {children}
    </Overlay>
  );
}
