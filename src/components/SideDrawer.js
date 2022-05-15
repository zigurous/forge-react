import classNames from 'classnames';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import ClickableDiv from './ClickableDiv';
import Icon from './Icon';
import ReactPortal from './ReactPortal';
import { useModalOverlay } from '../hooks';
import { scrollToTop } from '../utils';

function SideDrawer({
  animated = true,
  children,
  className,
  hideOverlay = false,
  location,
  rootElement,
  theme,
}) {
  const [open, setOpen] = useState(false);

  useModalOverlay(open, true);

  useEffect(() => {
    setOpen(false);
    setTimeout(() => scrollToTop());
  }, [location]);

  return (
    <React.Fragment>
      <button
        aria-label={open ? 'Close' : 'Open'}
        className={classNames('sidedrawer__button')}
        onClick={() => setOpen(!open)}
        size="small"
      >
        <Icon name={open ? 'close' : 'menu'} material />
      </button>
      <ReactPortal rootElement={rootElement}>
        <div
          className={classNames(
            'sidedrawer',
            { 'sidedrawer--open': open, 'sidedrawer--closed': !open },
            { 'sidedrawer--animated': animated },
            className
          )}
          data-theme={theme}
        >
          {!hideOverlay && (
            <ClickableDiv
              className="sidedrawer__overlay"
              onClick={() => setOpen(false)}
            />
          )}
          <div className="sidedrawer__container">{children}</div>
        </div>
      </ReactPortal>
    </React.Fragment>
  );
}

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
