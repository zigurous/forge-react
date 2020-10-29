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
  hideBackground = false,
  reversed = false,
  shadowed = false,
  textured = false,
  theme,
}) => {
  const parallax = useParallax();
  return (
    <div
      className={classNames(
        'page-banner',
        { [`page-banner--${direction}`]: direction && direction !== 'none' },
        { [`page-banner--${theme}`]: theme },
        { 'page-banner--reversed': reversed },
        { 'page-banner--textured': textured },
        { 'page-banner--shadowed': shadowed },
        { 'page-banner--hide-background': hideBackground },
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
  hideBackground: PropTypes.bool,
  reversed: PropTypes.bool,
  shadowed: PropTypes.bool,
  textured: PropTypes.bool,
  theme: PropTypes.string,
};

export default PageBanner;
