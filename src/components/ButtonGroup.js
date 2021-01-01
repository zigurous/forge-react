import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import '../styles/button-group.css';

const ButtonGroup = ({ children, className, layout = 'row' }) => (
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

ButtonGroup.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  layout: PropTypes.oneOf(['row', 'column']),
};

export default ButtonGroup;
