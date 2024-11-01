import classNames from 'classnames';
import React from 'react';
import Button from './Button';
import ReactPortal from './ReactPortal';
import { useModalOverlay } from '../hooks';
import type { ThemeToken } from '../types';

export type ModalProps = {
  children?: React.ReactNode;
  className?: string;
  dialogClassName?: string;
  footer?: React.ReactElement;
  footerAlignment?: 'left' | 'right';
  hideHeader?: boolean;
  id?: string;
  onRequestClose?: () => void;
  open?: boolean;
  rootElement?: string;
  theme?: ThemeToken;
  title?: string;
} & React.ComponentPropsWithRef<'div'>;

export default function Modal({
  children,
  className,
  dialogClassName,
  footer,
  footerAlignment = 'left',
  hideHeader = false,
  id,
  onRequestClose = () => {},
  open = false,
  rootElement = 'body',
  theme,
  title,
  ...rest
}: ModalProps) {
  useModalOverlay(open, true);
  if (!open) return null;
  return (
    <ReactPortal rootElement={rootElement}>
      <div
        className={classNames('modal', { 'modal--open': open }, className)}
        id={id}
        role="dialog"
        tabIndex={-1}
        data-theme={theme}
        {...rest}
      >
        <div
          className={classNames('modal__dialog', dialogClassName)}
          role="document"
        >
          <div className="modal__content">
            {!hideHeader && (
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
