import classNames from 'classnames';
import React from 'react';
import Button from './Button';
import ReactPortal from './ReactPortal';
import { useModalOverlay } from '../hooks';
import type { Theme } from '../types';

export interface ModalProps {
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
  theme?: Theme | string;
  title?: string;
}

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
                  className="modal__close-button"
                  icon="close"
                  iconAlignment="only"
                  onClick={onRequestClose}
                  size="md"
                  variant="unstyled"
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
