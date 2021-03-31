import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import ProgressiveImage from './ProgressiveImage';
import '../styles/thumbnail.css';

const Thumbnail = ({
  animated = false,
  animation = 'fade-in-up',
  children,
  className,
  ElementType = 'a',
  height = 'auto',
  image,
  imageProps = {},
  index,
  placeholder,
  placeholderProps = {},
  rounded = true,
  shadow = true,
  style,
  ...props
}) => {
  const ref = useRef();

  useEffect(() => {
    if (animated) {
      setTimeout(() => {
        if (ref && ref.current) {
          ref.current.style.animation = 0;
        }
      }, 600);
    }
  }, [animated, ref]);

  return (
    <ElementType
      {...props}
      className={classNames(
        'thumbnail',
        { 'thumbnail--rounded': rounded },
        { 'thumbnail--shadow': shadow },
        {
          'animation-short': animated,
          [`animation-delay-${index + 1}`]: animated && index >= 0,
          [animation]: animated,
        },
        className
      )}
      ref={ref}
    >
      {image && (
        <ProgressiveImage
          alt={imageProps.alt}
          imageProps={{
            ...imageProps,
            className: classNames('img-fluid', imageProps.className),
            height: imageProps.height || height,
          }}
          placeholder={placeholder}
          placeholderProps={{
            ...placeholderProps,
            className: classNames('img-fluid', placeholderProps.className),
            height: placeholderProps.height || height,
          }}
          src={image}
        />
      )}
      {children}
    </ElementType>
  );
};

Thumbnail.propTypes = {
  animated: PropTypes.bool,
  animation: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
  ElementType: PropTypes.elementType,
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  image: PropTypes.string,
  imageProps: PropTypes.object,
  index: PropTypes.number,
  placeholder: PropTypes.string,
  placeholderProps: PropTypes.object,
  rounded: PropTypes.bool,
  shadow: PropTypes.bool,
  style: PropTypes.object,
};

export default Thumbnail;
