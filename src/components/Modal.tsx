import classNames from 'classnames';
import React from 'react';
import Button from './Button';
import ClickableDiv from './ClickableDiv';
import ReactPortal from './ReactPortal';
import { useModalOverlay } from '../hooks';
import type { ThemeToken } from '../types';

export type ModalProps = {
  animated?: boolean;
  children?: React.ReactNode;
  className?: string;
  closeOnOverlayClick?: boolean;
  dialogClassName?: string;
  footer?: React.ReactElement;
  footerAlignment?: 'left' | 'right';
  hideHeader?: boolean;
  hideOverlay?: boolean;
  onRequestClose?: () => void;
  open?: boolean;
  rootElement?: string;
  theme?: ThemeToken;
  title?: string;
} & React.ComponentPropsWithRef<'div'>;

export default function Modal({
  animated = true,
  children,
  className,
  closeOnOverlayClick = true,
  dialogClassName,
  footer,
  footerAlignment = 'right',
  hideHeader = false,
  hideOverlay = false,
  onRequestClose = () => {},
  open = false,
  rootElement = 'body',
  theme,
  title,
  ...rest
}: ModalProps) {
  useModalOverlay(open, true);
  return (
    <ReactPortal rootElement={rootElement}>
      <div
        className={classNames(
          'modal',
          {
            'modal--open': open,
            'modal--closed': !open,
            'modal--animated': animated,
          },
          className,
        )}
        data-theme={theme}
        {...rest}
      >
        {!hideOverlay && (
          <>
            {closeOnOverlayClick ? (
              <ClickableDiv
                className="modal__overlay scrim-fixed"
                onClick={onRequestClose}
              />
            ) : (
              <div className="modal__overlay scrim-fixed" />
            )}
          </>
        )}
        <div
          className={classNames('modal__dialog', dialogClassName)}
          role="dialog"
        >
          <div className="modal__content" role="document">
            {!hideHeader && title && (
              <div className="modal__header">
                <div className="modal__title h5">{title}</div>
                <Button
                  aria-label="Close"
                  className="modal__close-button"
                  icon="close"
                  iconAlignment="only"
                  iconProps={{ color: '' }}
                  onClick={onRequestClose}
                  size="md"
                  variant="text"
                />
              </div>
            )}
            <div className="modal__body">{children}</div>
            {footer && (
              <div
                className={classNames('modal__footer', {
                  [`modal__footer--${footerAlignment}-aligned`]:
                    footerAlignment,
                })}
              >
                {footer}
              </div>
            )}
          </div>
        </div>
      </div>
    </ReactPortal>
  );
}
