import classNames from 'classnames';
import React from 'react';
import Button from './Button';
import Overlay, { type OverlayProps } from './Overlay';

export type ModalProps = {
  children?: React.ReactNode;
  className?: string;
  footer?: React.ReactElement;
  footerAlignment?: 'left' | 'right';
  hideHeader?: boolean;
  title?: string;
} & Omit<OverlayProps, 'dialogClassName' | 'dialogZIndex'>;

export default function Modal({
  children,
  className,
  footer,
  footerAlignment = 'right',
  hideHeader = false,
  onRequestClose,
  title,
  ...rest
}: ModalProps) {
  return (
    <Overlay
      className={classNames('modal', className)}
      dialogClassName="modal__dialog"
      dialogZIndex="modal"
      onRequestClose={onRequestClose}
      {...rest}
    >
      <div className="modal__content">
        {!hideHeader && title && (
          <div className="modal__header">
            <div className="modal__title title-sm">{title}</div>
            <Button
              aria-label="Close"
              className="modal__close-button"
              icon="close"
              iconAlignment="only"
              iconProps={{ color: '', size: 'md' }}
              onClick={onRequestClose}
              size="lg"
              variant="text"
            />
          </div>
        )}
        <div className="modal__body" role="document">
          {children}
        </div>
        {footer && (
          <div
            className={classNames('modal__footer', {
              [`modal__footer--${footerAlignment}-aligned`]: footerAlignment,
            })}
          >
            {footer}
          </div>
        )}
      </div>
    </Overlay>
  );
}
