import classNames from 'classnames';
import React from 'react';
import ClickableDiv from './ClickableDiv';
import ReactPortal from './ReactPortal';
import { useModalOverlay } from '../hooks';
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
  scrimColor?: 'auto' | 'dark' | 'light';
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
  onRequestClose,
  open = false,
  reflow = true,
  rootElement = 'body',
  scrimColor = 'dark',
  theme,
  ...rest
}: OverlayProps) {
  const scrimClassNames = classNames('overlay__scrim', {
    'bg-white':
      scrimColor === 'light' || (scrimColor === 'auto' && theme === 'light'),
    'bg-black':
      scrimColor === 'dark' || (scrimColor === 'auto' && theme !== 'light'),
    'bg-background': scrimColor === 'auto' && !theme,
    hidden: hideScrim,
  });
  useModalOverlay(open, reflow);
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
