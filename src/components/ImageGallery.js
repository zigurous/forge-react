import React, { useState } from 'react';
import Lightbox from 'react-image-lightbox';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import ProgressiveImage from './ProgressiveImage';
import omit from '../utils/omit';
import 'react-image-lightbox/style.css';
import '../styles/image-gallery.css';

const imageSrc = (image) => {
  if (typeof image === 'string') {
    return image;
  } else {
    return image.src;
  }
};

const px = (number) => {
  return number ? `${number}px` : undefined;
};

const gridTemplate = (columns, minWidth, maxWidth) => {
  return `repeat(${columns || 'auto-fit'}, minmax(${px(minWidth) || 0}, ${
    px(maxWidth) || '1fr'
  }))`;
};

const ImageGallery = ({
  className,
  columns,
  images = [],
  maxWidth,
  minWidth,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [imageIndex, setImageIndex] = useState(0);
  return (
    <div className={classNames('image-gallery', className)}>
      <div
        className="image-gallery__thumbnails"
        style={{
          gridTemplateColumns: gridTemplate(columns, minWidth, maxWidth),
        }}
      >
        {images.map((image, index) => {
          const isObject = typeof image === 'object';
          const src = isObject ? image.src : image;
          const id = (isObject && image.id) || src;
          return (
            <button
              aria-label="Image Thumbnail"
              className={classNames(
                'image-gallery__thumbnail',
                isObject && image.className
              )}
              key={id}
              onClick={() => {
                setImageIndex(index);
                setIsOpen(true);
              }}
            >
              <ProgressiveImage
                imageProps={isObject ? omit(image, 'className') : {}}
                src={src}
              />
            </button>
          );
        })}
      </div>
      {isOpen && (
        <Lightbox
          enableZoom={false}
          mainSrc={imageSrc(images[imageIndex])}
          nextSrc={imageSrc(images[(imageIndex + 1) % images.length])}
          prevSrc={imageSrc(
            images[(imageIndex + images.length - 1) % images.length]
          )}
          onCloseRequest={() => {
            setIsOpen(false);
          }}
          onMovePrevRequest={() => {
            setImageIndex((imageIndex + images.length - 1) % images.length);
          }}
          onMoveNextRequest={() => {
            setImageIndex((imageIndex + 1) % images.length);
          }}
          wrapperClassName="image-gallery__lightbox"
        />
      )}
    </div>
  );
};

ImageGallery.propTypes = {
  className: PropTypes.string,
  columns: PropTypes.number,
  images: PropTypes.arrayOf(
    PropTypes.oneOfType([
      PropTypes.shape({
        alt: PropTypes.string,
        className: PropTypes.string,
        id: PropTypes.string,
        src: PropTypes.string.isRequired,
      }),
      PropTypes.string,
    ])
  ),
  maxWidth: PropTypes.number,
  minWidth: PropTypes.number,
};

export default ImageGallery;
