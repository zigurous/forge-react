import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Badge = ({ children, className, pill = false, type = 'filled' }) => (
  <div
    className={classNames(
      'badge',
      { [`badge--${type}`]: type },
      { 'badge--pill': pill },
      className
    )}
  >
    {children}
  </div>
);

Badge.type = Object.freeze({
  filled: 'filled',
  outline: 'outline',
});

Badge.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  pill: PropTypes.bool,
  type: PropTypes.oneOf(Object.values(Badge.type)),
};

export default Badge;
