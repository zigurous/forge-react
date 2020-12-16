import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import '../styles/loading-spinner.css';

const LoadingSpinner = ({ className, loading = true, size = 'medium' }) => (
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

export const loadingSpinnerSizes = [
  'sm',
  'small',
  'md',
  'medium',
  'lg',
  'large',
];

LoadingSpinner.propTypes = {
  className: PropTypes.string,
  loading: PropTypes.bool,
  size: PropTypes.oneOf(loadingSpinnerSizes),
};

export default LoadingSpinner;
