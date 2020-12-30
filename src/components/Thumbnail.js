import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import '../styles/thumbnail.css';

const Thumbnail = ({
  backgroundImage,
  beveled = false,
  bevelBottomColor = 'rgba(0, 0, 0, 0.5)',
  bevelTopColor = 'rgba(255, 255, 255, 0.5)',
  className,
  ElementType = 'a',
  foregroundImage,
  height = 256,
  rounded = true,
  style,
  ...props
}) => (
  <ElementType
    {...props}
    className={classNames(
      'thumbnail',
      { 'thumbnail--rounded': rounded },
      { 'thumbnail--bevel': beveled },
      className
    )}
    style={{
      ...style,
      backgroundImage: `url(${backgroundImage})`,
      borderBottomColor: beveled && bevelBottomColor,
      borderTopColor: beveled && bevelTopColor,
      height: height,
    }}
  >
    {foregroundImage && (
      <img
        {...foregroundImage}
        alt={foregroundImage.alt || ''}
        src={foregroundImage.src}
      />
    )}
  </ElementType>
);

Thumbnail.propTypes = {
  backgroundImage: PropTypes.string,
  beveled: PropTypes.bool,
  bevelBottomColor: PropTypes.string,
  bevelTopColor: PropTypes.string,
  className: PropTypes.string,
  ElementType: PropTypes.elementType,
  foregroundImage: PropTypes.shape({
    alt: PropTypes.string,
    src: PropTypes.string.isRequired,
  }),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  rounded: PropTypes.bool,
  style: PropTypes.object,
};

export default Thumbnail;
