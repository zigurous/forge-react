import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import '../styles/page-banner.css';

const PageBanner = ({
  backgroundColor,
  children,
  className,
  header = false,
  reversed = false,
  shadowed = false,
  size = 'medium',
  theme,
  transparent = false,
}) => {
  return (
    <div
      className={classNames(
        'page-banner',
        { [`page-banner--${size}`]: size },
        { 'page-banner--header': header },
        { 'page-banner--reversed': reversed },
        { 'page-banner--shadowed': shadowed },
        { 'page-banner--transparent': transparent },
        className
      )}
      style={{ backgroundColor: backgroundColor }}
      theme={theme}
    >
      <div className="page-banner__container" theme={theme}>
        {children}
      </div>
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
  header: PropTypes.bool,
  reversed: PropTypes.bool,
  shadowed: PropTypes.bool,
  size: PropTypes.oneOf(pageBannerSizes),
  theme: PropTypes.string,
  transparent: PropTypes.bool,
};

export default PageBanner;
