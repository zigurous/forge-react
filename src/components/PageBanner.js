import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import '../styles/page-banner.css';

const PageBanner = ({
  backgroundColor,
  children,
  className,
  size = 'medium',
  style,
  theme,
  transparent = false,
}) => {
  return (
    <div
      className={classNames(
        'page-banner',
        { [`page-banner--${size}`]: size },
        { 'page-banner--transparent': transparent },
        className
      )}
      style={{ backgroundColor: backgroundColor, ...style }}
      theme={theme}
    >
      {children}
    </div>
  );
};

PageBanner.size = Object.freeze({
  xs: 'xs',
  extraSmall: 'extraSmall',
  sm: 'sm',
  small: 'small',
  md: 'md',
  medium: 'medium',
  lg: 'lg',
  large: 'large',
  xl: 'xl',
  extraLarge: 'extraLarge',
});

PageBanner.propTypes = {
  backgroundColor: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
  size: PropTypes.oneOf(Object.values(PageBanner.size)),
  style: PropTypes.object,
  theme: PropTypes.string,
  transparent: PropTypes.bool,
};

export default PageBanner;
