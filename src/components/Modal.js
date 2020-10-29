import { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

const createModal = (className) => {
  const modal = document.createElement('div');
  modal.classList.add('modal');

  if (className) {
    modal.classList.add(className);
  }

  return modal;
};

const Modal = ({ children, className, isOpen = false, rootId = 'root' }) => {
  const [modal] = useState(createModal(className));

  useEffect(() => {
    const root = document.getElementById(rootId);
    root.appendChild(modal);

    return () => {
      root.removeChild(modal);
    };
  }, [modal, rootId]);

  useEffect(() => {
    if (isOpen) {
      const canScroll = document.body.scrollHeight > document.body.clientHeight;
      const scrollbarWidth =
        window.innerWidth - document.documentElement.clientWidth;
      if (canScroll && scrollbarWidth > 0) {
        document.body.style.paddingRight = `${scrollbarWidth}px`;
      }
      document.body.classList.add('modal-open');
    } else {
      document.body.classList.remove('modal-open');
      document.body.style.paddingRight = null;
    }
  }, [isOpen]);

  return ReactDOM.createPortal(children, modal);
};

Modal.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  isOpen: PropTypes.bool,
  rootId: PropTypes.string,
};

export default Modal;
