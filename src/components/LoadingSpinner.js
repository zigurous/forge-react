import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import '../styles/loading-spinner.css';

const LoadingSpinner = ({ className }) => (
  <div className={classNames('loading-spinner', className)}>
    <div />
    <div />
    <div />
    <div />
  </div>
);

LoadingSpinner.propTypes = {
  className: PropTypes.string,
};

export default LoadingSpinner;
