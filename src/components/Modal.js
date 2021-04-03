import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import Button from './Button';
import ReactPortal from './ReactPortal';
import { useModal } from '../hooks';

const Modal = ({
  children,
  className,
  footer,
  footerAlignment = 'left',
  id,
  isOpen = false,
  onRequestClose = () => {},
  rootElement,
  title,
}) => {
  useModal(isOpen, true);
  return (
    <ReactPortal rootElement={rootElement}>
      <div
        className={classNames('modal', { 'modal--open': isOpen }, className)}
        id={id}
        role="dialog"
        tabIndex="-1"
      >
        <div className="modal__dialog" role="document">
          <div className="modal__content">
            <div className="modal__header">
              <div className="modal__title h5">{title}</div>
              <Button
                borderless
                className="modal__close-button"
                icon="only"
                iconName="close"
                onClick={onRequestClose}
              />
            </div>
            <div className="modal__body">{children}</div>
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
        </div>
      </div>
    </ReactPortal>
  );
};

Modal.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  footer: PropTypes.element,
  footerAlignment: PropTypes.oneOf(['left', 'right']),
  id: PropTypes.string,
  isOpen: PropTypes.bool,
  onRequestClose: PropTypes.func,
  rootElement: PropTypes.string,
  title: PropTypes.string,
};

export default Modal;
