import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

function Badge({
  children,
  className,
  pill = false,
  selected = false,
  type = 'solid',
}) {
  return (
    <div
      className={classNames(
        'badge',
        { [`badge--${type}`]: type },
        { 'badge--pill': pill },
        { 'badge--selected': selected },
        className
      )}
    >
      {children}
    </div>
  );
}

Badge.type = Object.freeze({
  solid: 'solid',
  outline: 'outline',
});

Badge.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  pill: PropTypes.bool,
  selected: PropTypes.bool,
  type: PropTypes.oneOf(Object.values(Badge.type)),
};

export default Badge;
