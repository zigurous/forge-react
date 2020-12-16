import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import '../styles/loading-spinner.css';

const LoadingSpinner = ({ className, loading = true }) => (
  <div
    aria-hidden
    className={classNames('loading-spinner', { loading }, className)}
  >
    <div className="loading-spinner__animation">
      <div />
      <div />
      <div />
      <div />
    </div>
  </div>
);

LoadingSpinner.propTypes = {
  className: PropTypes.string,
  loading: PropTypes.bool,
};

export default LoadingSpinner;
