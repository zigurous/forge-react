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
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'fluid';
  title?: string;
} & Omit<OverlayProps, 'dialogClassName' | 'dialogZIndex'>;

export default function Modal({
  children,
  className,
  footer,
  footerAlignment = 'right',
  hideHeader = false,
  onRequestClose,
  size,
  title,
  ...rest
}: ModalProps) {
  return (
    <Overlay
      className={classNames('modal', { [`modal--${size}`]: size }, className)}
      dialogClassName="modal__dialog"
      dialogZIndex="modal"
      onRequestClose={onRequestClose}
      {...rest}
    >
      <div className="modal__content">
        {!hideHeader && title && (
          <div className="modal__header">
            <h1 className="modal__title title-sm">{title}</h1>
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
