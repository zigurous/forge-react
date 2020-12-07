import React, { useState } from 'react';
import Lightbox from 'react-image-lightbox';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import 'react-image-lightbox/style.css';
import '../styles/image-gallery.css';

const imageSrc = (image) => {
  if (typeof image === 'string') {
    return image;
  } else {
    return image.src;
  }
};

const ImageGallery = ({ className, columns = 4, images = [] }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [imageIndex, setImageIndex] = useState(0);
  return (
    <div className={classNames('image-gallery', className)}>
      <div
        className="image-gallery__thumbnails"
        style={{ gridTemplateColumns: `repeat(${columns}, 1fr)` }}
      >
        {images.map((image, index) => (
          <button
            className={classNames(
              'image-gallery__thumbnail',
              typeof image !== 'string' && image.className
            )}
            key={imageSrc(image)}
            onClick={() => {
              setImageIndex(index);
              setIsOpen(true);
            }}
          >
            {typeof image === 'string' ? (
              <img alt="" src={image} />
            ) : (
              <img alt={image.alt} src={image.src} {...image} />
            )}
          </button>
        ))}
      </div>
      {isOpen && (
        <Lightbox
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
        src: PropTypes.string.isRequired,
      }),
      PropTypes.string,
    ])
  ),
};

export default ImageGallery;
