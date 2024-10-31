import classNames from 'classnames';
import React from 'react';
import ClickableDiv from './ClickableDiv';
import ReactPortal from './ReactPortal';
import { useModalOverlay } from '../hooks';
import type { ThemeToken } from '../types';

export type DrawerProps = {
  anchor?: 'left' | 'right' | 'top' | 'bottom';
  animated?: boolean;
  children?: React.ReactNode;
  className?: string;
  hideOverlay?: boolean;
  onRequestClose?: () => void;
  open?: boolean;
  rootElement?: string;
  size?: 'sm' | 'md' | 'lg' | number;
  theme?: ThemeToken | string;
} & React.ComponentPropsWithRef<'div'>;

export default function Drawer({
  anchor = 'left',
  animated = true,
  children,
  className,
  hideOverlay = false,
  onRequestClose,
  open = false,
  rootElement = 'body',
  size = 'md',
  style,
  theme,
}: DrawerProps) {
  const customStyles = {
    '--drawer-size': typeof size === 'number' ? `${size}px` : undefined,
  };
  useModalOverlay(open, true);
  return (
    <ReactPortal rootElement={rootElement}>
      <div
        className={classNames(
          'drawer',
          {
            'drawer--open': open,
            'drawer--closed': !open,
            'drawer--animated': animated,
            [`drawer--${anchor}`]: anchor,
            [`drawer--${size}`]: size && typeof size === 'string',
          },
          className,
        )}
        data-theme={theme}
        style={{
          ...customStyles,
          ...style,
        }}
      >
        {!hideOverlay && (
          <ClickableDiv className="drawer__overlay" onClick={onRequestClose} />
        )}
        <div className="drawer__container">{children}</div>
      </div>
    </ReactPortal>
  );
}
