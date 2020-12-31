import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import '../styles/thumbnail.css';

const Thumbnail = ({
  children,
  className,
  ElementType = 'a',
  height = 'auto',
  image,
  imageProps = {},
  rounded = true,
  style,
  ...props
}) => (
  <ElementType
    {...props}
    className={classNames('thumbnail', { rounded }, className)}
  >
    {image && (
      <img
        {...imageProps}
        alt={imageProps.alt || ''}
        className={classNames('thumbnail__image', imageProps.className)}
        height={imageProps.height || height}
        src={image}
      />
    )}
    {children}
  </ElementType>
);

Thumbnail.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  ElementType: PropTypes.elementType,
  image: PropTypes.string,
  imageProps: PropTypes.object,
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  rounded: PropTypes.bool,
  style: PropTypes.object,
};

export default Thumbnail;
