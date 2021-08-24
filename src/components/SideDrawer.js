import classNames from 'classnames';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import ClickableDiv from './ClickableDiv';
import Icon from './Icon';
import ReactPortal from './ReactPortal';
import { useModalOverlay } from '../hooks';
import { scrollToTop } from '../utils/scrolling';
import '../styles/sidedrawer.css';

const SideDrawer = ({
  animated = true,
  children,
  className,
  hideOverlay = false,
  location,
  rootElement,
  theme,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  useModalOverlay(isOpen, true);
  useEffect(() => {
    setIsOpen(false);
    setTimeout(() => scrollToTop());
  }, [location, setIsOpen]);

  return (
    <React.Fragment>
      <button
        aria-label={isOpen ? 'Close' : 'Open'}
        className={classNames('sidedrawer__button')}
        onClick={() => setIsOpen(!isOpen)}
        size="small"
      >
        <Icon name={isOpen ? 'close' : 'menu'} material />
      </button>
      <ReactPortal rootElement={rootElement}>
        <div
          className={classNames(
            'sidedrawer',
            { 'sidedrawer--open': isOpen, 'sidedrawer--closed': !isOpen },
            { 'sidedrawer--animated': animated },
            className
          )}
          data-theme={theme}
        >
          {!hideOverlay && (
            <ClickableDiv
              className="sidedrawer__overlay"
              onClick={() => setIsOpen(false)}
            />
          )}
          <div className="sidedrawer__container">{children}</div>
        </div>
      </ReactPortal>
    </React.Fragment>
  );
};

SideDrawer.propTypes = {
  animated: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.node,
  hideOverlay: PropTypes.bool,
  location: PropTypes.object,
  rootElement: PropTypes.string,
  theme: PropTypes.string,
};

export default SideDrawer;
