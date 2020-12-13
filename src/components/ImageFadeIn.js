import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { useLoading } from '../utils/hooks';

const ImageFadeIn = ({ alt, children, className, src, ...props }) => {
  const [ref, loaded] = useLoading();
  return (
    <img
      {...props}
      alt={alt || ''}
      className={classNames(className, 'transition', 'fade-in', {
        visible: loaded,
        hidden: !loaded,
      })}
      ref={ref}
      src={src}
    >
      {children}
    </img>
  );
};

ImageFadeIn.propTypes = {
  alt: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
  src: PropTypes.string.isRequired,
};

export default ImageFadeIn;
