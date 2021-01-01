import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Icon from './Icon';
import '../styles/input.css';

const Input = ({ className, icon, placeholder, type, ...props }) => {
  return (
    <div className={classNames('input-wrapper', className)}>
      {icon && <Icon name={icon} size="small" />}
      <input placeholder={placeholder} type={type} {...props} />
    </div>
  );
};

Input.propTypes = {
  className: PropTypes.string,
  icon: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
};

export default Input;
