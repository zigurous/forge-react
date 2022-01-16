import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import Icon from './Icon';
import '../styles/input.css';

function Input({ className, icon, placeholder, type, ...props }) {
  return (
    <div
      className={classNames(
        'input-wrapper',
        { 'input-wrapper--icon': icon },
        className
      )}
    >
      <input placeholder={placeholder} type={type} {...props} />
      {icon && <Icon name={icon} size="md" />}
    </div>
  );
}

Input.propTypes = {
  className: PropTypes.string,
  icon: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
};

export default Input;
