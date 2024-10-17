import classNames from 'classnames';
import React, { useState } from 'react';
import Lightbox from 'react-image-lightbox';
import ProgressiveImage from './ProgressiveImage';
import { omit } from '../utils';
import 'react-image-lightbox/style.css';

type Image = string | ({ src: string } & React.ComponentPropsWithoutRef<'img'>);

export interface ImageGalleryProps {
  animated?: boolean;
  animation?: string;
  className?: string;
  columns?: number;
  fullWidthFirstItem?: boolean;
  images?: Image[];
  maxWidth?: number;
  minWidth?: number;
}

export default function ImageGallery({
  animated = false,
  animation = 'fade-in-up',
  className,
  columns,
  fullWidthFirstItem = false,
  images = [],
  maxWidth,
  minWidth,
}: ImageGalleryProps) {
  const [open, setOpen] = useState(false);
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
          const key = isObject ? image.key || image.id || image.src : image;
          return (
            <button
              aria-label="Image Thumbnail"
              className={classNames(
                'image-gallery__thumbnail',
                {
                  'image-gallery__thumbnail--full-width':
                    index === 0 && fullWidthFirstItem,
                },
                {
                  'animation-short': animated,
                  [`animation-delay-${index + 1}`]: animated,
                  [animation]: animated,
                },
                isObject && image.className,
              )}
              key={key}
              onClick={() => {
                setImageIndex(index);
                setOpen(true);
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
      {open && (
        <Lightbox
          enableZoom={false}
          mainSrc={imageSrc(images[imageIndex])}
          nextSrc={imageSrc(images[(imageIndex + 1) % images.length])}
          prevSrc={imageSrc(
            images[(imageIndex + images.length - 1) % images.length],
          )}
          onCloseRequest={() => {
            setOpen(false);
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
}

function imageSrc(image: Image): string {
  if (typeof image === 'string') {
    return image;
  } else {
    return image.src;
  }
}

function gridTemplate(
  columns?: number,
  minWidth?: number,
  maxWidth?: number,
): string {
  return `repeat(${columns || 'auto-fit'}, minmax(${px(minWidth) || 0}, ${
    px(maxWidth) || '1fr'
  }))`;
}

function px(number?: number): string | undefined {
  return number ? `${number}px` : undefined;
}
