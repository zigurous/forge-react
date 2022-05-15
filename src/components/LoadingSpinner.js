import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

function LoadingSpinner({ className, loading = true, size = 'medium' }) {
  return (
    <div
      aria-hidden
      className={classNames('loading-spinner', { loading }, size, className)}
    >
      <div className="loading-spinner__animation">
        <div />
        <div />
        <div />
        <div />
      </div>
    </div>
  );
}

LoadingSpinner.size = Object.freeze({
  sm: 'sm',
  small: 'small',
  md: 'md',
  medium: 'medium',
  lg: 'lg',
  large: 'large',
});

LoadingSpinner.propTypes = {
  className: PropTypes.string,
  loading: PropTypes.bool,
  size: PropTypes.oneOf(Object.values(LoadingSpinner.size)),
};

export default LoadingSpinner;
