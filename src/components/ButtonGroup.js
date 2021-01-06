import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const ButtonGroup = ({ children, className, layout = 'horizontal' }) => (
  <div
    className={classNames(
      'btn-group',
      { [`btn-group--${layout}`]: layout },
      className
    )}
  >
    {children}
  </div>
);

ButtonGroup.layout = Object.freeze({
  horizontal: 'horizontal',
  vertical: 'vertical',
});

ButtonGroup.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  layout: PropTypes.oneOf(Object.values(ButtonGroup.layout)),
};

export default ButtonGroup;
