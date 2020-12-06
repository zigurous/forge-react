import React, { useState } from 'react';
import Lightbox from 'react-image-lightbox';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import 'react-image-lightbox/style.css';
import '../styles/image-gallery.css';

const ImageGallery = ({ className, images = [] }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [imageIndex, setImageIndex] = useState(0);
  return (
    <div className={classNames('image-gallery', className)}>
      <div className="image-gallery__thumbnails">
        {images.map((image, index) => (
          <button
            className="image-gallery__thumbnail"
            key={typeof image === 'string' ? image : image.src}
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
          mainSrc={images[imageIndex]}
          nextSrc={images[(imageIndex + 1) % images.length]}
          prevSrc={images[(imageIndex + images.length - 1) % images.length]}
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
  images: PropTypes.arrayOf(
    PropTypes.oneOfType([
      PropTypes.shape({
        alt: PropTypes.string,
        src: PropTypes.string,
      }),
      PropTypes.string,
    ])
  ),
};

export default ImageGallery;
