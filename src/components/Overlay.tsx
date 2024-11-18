import classNames from 'classnames';
import React from 'react';
import ClickableDiv from './ClickableDiv';
import ReactPortal from './ReactPortal';
import { useBodyOverflow, useKeyboardEvent } from '../hooks';
import type { ThemeToken, ZIndexToken } from '../types';

export type OverlayProps = {
  animated?: boolean;
  children?: React.ReactNode;
  className?: string;
  closeOnScrimClick?: boolean;
  dialogClassName?: string;
  dialogZIndex?: ZIndexToken | number;
  hideScrim?: boolean;
  onRequestClose?: () => void;
  open?: boolean;
  reflow?: boolean;
  rootElement?: string;
  scrim?: 'auto' | 'dark' | 'light';
  theme?: ThemeToken;
} & React.ComponentPropsWithoutRef<'div'>;

export default function Overlay({
  animated = true,
  children,
  className,
  closeOnScrimClick = true,
  dialogClassName,
  dialogZIndex,
  hideScrim = false,
  onRequestClose = () => {},
  open = false,
  reflow = true,
  rootElement = 'body',
  scrim = 'dark',
  theme,
  ...rest
}: OverlayProps) {
  const scrimClassNames = classNames('overlay__scrim', {
    'bg-white': scrim === 'light' || (scrim === 'auto' && theme === 'light'),
    'bg-black':
      scrim === 'dark' || (scrim === 'auto' && theme !== 'light' && theme),
    'bg-background': scrim === 'auto' && !theme,
    hidden: hideScrim,
  });
  useBodyOverflow(open, reflow);
  useKeyboardEvent(['Escape', 'Backspace'], onRequestClose, false);
  return (
    <ReactPortal rootElement={rootElement}>
      <div
        className={classNames(className, 'overlay', {
          'overlay--open': open,
          'overlay--closed': !open,
          'overlay--animated': animated,
        })}
        {...rest}
      >
        {closeOnScrimClick ? (
          <ClickableDiv className={scrimClassNames} onClick={onRequestClose} />
        ) : (
          <div aria-hidden className={scrimClassNames} />
        )}
        <div
          aria-modal
          className={classNames(dialogClassName, 'overlay__dialog', {
            [`z-${dialogZIndex}`]: typeof dialogZIndex === 'string',
          })}
          data-theme={theme}
          role="dialog"
          style={{
            zIndex: typeof dialogZIndex === 'number' ? dialogZIndex : undefined,
          }}
        >
          {children}
        </div>
      </div>
    </ReactPortal>
  );
}
