import classNames from 'classnames';
import PropTypes from 'prop-types';
import React, { useEffect, useRef, useState } from 'react';
import ProgressiveImage from './ProgressiveImage';
import '../styles/thumbnail.css';

const Thumbnail = ({
  animated = false,
  animation = 'fade-in-up',
  children,
  className,
  ElementType = 'a',
  image,
  ImageElementType = 'img',
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
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    let handle;
    if (animated && loaded) {
      handle = setTimeout(() => {
        if (ref && ref.current) {
          ref.current.style.animation = 0;
        }
      }, 600);
    }
    return () => {
      if (handle) {
        clearTimeout(handle);
      }
    };
  }, [animated, loaded, ref]);

  return (
    <ElementType
      {...props}
      className={classNames(
        'thumbnail',
        { 'thumbnail--rounded': rounded },
        { 'thumbnail--shadow': shadow },
        {
          'animation-short': animated && loaded,
          [`animation-delay-${index + 1}`]: animated && loaded && index >= 0,
          [animation]: animated && loaded,
        },
        className
      )}
      ref={ref}
    >
      {ImageElementType && (
        <ProgressiveImage
          alt={imageProps.alt}
          ImageElementType={ImageElementType}
          imageProps={imageProps}
          onLoad={() => setLoaded(true)}
          placeholder={placeholder}
          placeholderProps={placeholderProps}
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
  image: PropTypes.string,
  ImageElementType: PropTypes.elementType,
  imageProps: PropTypes.object,
  index: PropTypes.number,
  placeholder: PropTypes.string,
  placeholderProps: PropTypes.object,
  rounded: PropTypes.bool,
  shadow: PropTypes.bool,
  style: PropTypes.object,
};

export default Thumbnail;
