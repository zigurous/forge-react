import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Badge = ({ children, className, type = 'filled' }) => (
  <div className={classNames('badge', { [`badge--${type}`]: type }, className)}>
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
  type: PropTypes.oneOf(Object.values(Badge.type)),
};

export default Badge;
