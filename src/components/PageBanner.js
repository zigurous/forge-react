import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import '../styles/page-banner.css';

const PageBanner = ({
  backgroundColor,
  children,
  className,
  shadowed = false,
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
        { 'page-banner--shadowed': shadowed },
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

export const pageBannerSizes = [
  'xs',
  'extraSmall',
  'sm',
  'small',
  'md',
  'medium',
  'lg',
  'large',
  'xl',
  'extraLarge',
];

PageBanner.propTypes = {
  backgroundColor: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
  shadowed: PropTypes.bool,
  size: PropTypes.oneOf(pageBannerSizes),
  style: PropTypes.object,
  theme: PropTypes.string,
  transparent: PropTypes.bool,
};

export default PageBanner;
