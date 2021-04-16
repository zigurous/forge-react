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
  height,
  image,
  imageClassName,
  ImageElementType = 'img',
  imageProps = {},
  index,
  placeholder,
  placeholderClassName,
  placeholderProps = {},
  rounded = true,
  shadow = true,
  style,
  width,
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
        {
          'animation-short': animated && loaded,
          [`animation-delay-${index + 1}`]: animated && loaded && index >= 0,
          [animation]: animated && loaded,
        },
        { rounded, shadow },
        className
      )}
      ref={ref}
    >
      {ImageElementType && (
        <ProgressiveImage
          alt={imageProps.alt}
          height={height}
          imageClassName={imageClassName}
          ImageElementType={ImageElementType}
          imageProps={imageProps}
          onLoad={() => setLoaded(true)}
          placeholder={placeholder}
          placeholderClassName={placeholderClassName}
          placeholderProps={placeholderProps}
          src={image}
          width={width}
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
  imageClassName: PropTypes.string,
  ImageElementType: PropTypes.elementType,
  imageProps: PropTypes.object,
  index: PropTypes.number,
  placeholder: PropTypes.string,
  placeholderClassName: PropTypes.string,
  placeholderProps: PropTypes.object,
  rounded: PropTypes.bool,
  shadow: PropTypes.bool,
  style: PropTypes.object,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default Thumbnail;
