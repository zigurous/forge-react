import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { useParallax } from '../utils/hooks';
import '../styles/page-banner.css';

const PageBanner = ({
  backgroundColor,
  children,
  className,
  direction = 'right',
  reversed = false,
  shadowed = false,
  theme,
  transparent = false,
}) => {
  const parallax = useParallax();
  return (
    <div
      className={classNames(
        'page-banner',
        { [`page-banner--${direction}`]: direction && direction !== 'none' },
        { [`page-banner--${theme}`]: theme },
        { 'page-banner--transparent': transparent },
        { 'page-banner--reversed': reversed },
        { 'page-banner--shadowed': shadowed },
        className
      )}
      ref={parallax}
      style={{ backgroundColor: backgroundColor }}
    >
      <div className="page-banner__container" theme={theme}>
        {children}
      </div>
    </div>
  );
};

PageBanner.propTypes = {
  backgroundColor: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
  direction: PropTypes.oneOf(['none', 'left', 'right']),
  reversed: PropTypes.bool,
  shadowed: PropTypes.bool,
  theme: PropTypes.string,
  transparent: PropTypes.bool,
};

export default PageBanner;
