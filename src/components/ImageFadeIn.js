import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import LoadingSpinner from './LoadingSpinner';
import { useLoading } from '../hooks';

const ImageFadeIn = ({
  alt,
  className,
  loadingSpinnerProps = {},
  showLoadingSpinner = false,
  src,
  ...props
}) => {
  const [ref, loading] = useLoading();
  return (
    <React.Fragment>
      <img
        {...props}
        alt={alt || ''}
        className={classNames(className, 'transition', 'fade-in', {
          loading,
          visible: !loading,
        })}
        ref={ref}
        src={src}
      />
      {showLoadingSpinner && loading && (
        <LoadingSpinner {...loadingSpinnerProps} loading={loading} />
      )}
    </React.Fragment>
  );
};

ImageFadeIn.propTypes = {
  alt: PropTypes.string,
  className: PropTypes.string,
  loadingSpinnerProps: PropTypes.object,
  showLoadingSpinner: PropTypes.bool,
  src: PropTypes.string.isRequired,
};

export default ImageFadeIn;
