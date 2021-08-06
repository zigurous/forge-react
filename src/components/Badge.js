import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

const Badge = ({ children, className, pill = false, type = 'solid' }) => (
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
  solid: 'solid',
  outline: 'outline',
});

Badge.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  pill: PropTypes.bool,
  type: PropTypes.oneOf(Object.values(Badge.type)),
};

export default Badge;
