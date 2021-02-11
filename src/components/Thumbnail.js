import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import ProgressiveImage from './ProgressiveImage';
import '../styles/thumbnail.css';

const Thumbnail = ({
  children,
  className,
  ElementType = 'a',
  height = 'auto',
  image,
  imageProps = {},
  placeholder,
  placeholderProps = {},
  rounded = true,
  shadow = true,
  style,
  ...props
}) => (
  <ElementType
    {...props}
    className={classNames(
      'thumbnail',
      { 'thumbnail--rounded': rounded },
      { 'shadow-sm': shadow },
      className
    )}
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

Thumbnail.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  ElementType: PropTypes.elementType,
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  image: PropTypes.string,
  imageProps: PropTypes.object,
  placeholder: PropTypes.string,
  placeholderProps: PropTypes.object,
  rounded: PropTypes.bool,
  shadow: PropTypes.bool,
  style: PropTypes.object,
};

export default Thumbnail;
