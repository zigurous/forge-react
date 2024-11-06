import classNames from 'classnames';
import React, { useState } from 'react';
import Lightbox from 'react-image-lightbox';
import { type ProgressiveImageProps } from './ProgressiveImage';
import Thumbnail from './Thumbnail';
import type { Transition } from '../types';
import 'react-image-lightbox/style.css';

type Image = string | ProgressiveImageProps;

export interface ImageGalleryProps {
  animated?: boolean;
  animation?: Transition | Transition[];
  animationDuration?: number;
  className?: string;
  columns?: number;
  fullWidthFirstItem?: boolean;
  images?: Image[];
  maxWidth?: number;
  minWidth?: number;
  rounded?: boolean;
  shadow?: boolean;
}

export default function ImageGallery({
  animated = true,
  animation = 'fade-in',
  animationDuration,
  className,
  columns,
  fullWidthFirstItem = false,
  images = [],
  maxWidth,
  minWidth,
  rounded = false,
  shadow = false,
}: ImageGalleryProps) {
  const [open, setOpen] = useState(false);
  const [imageIndex, setImageIndex] = useState(0);
  return (
    <div
      className={classNames('image-gallery', className)}
      style={{
        gridTemplateColumns: gridTemplate(columns, minWidth, maxWidth),
      }}
    >
      {images.map((image, index) => {
        const key =
          typeof image === 'object'
            ? image.key || image.id || image.src
            : image;
        const label =
          (typeof image === 'object' && image.alt) || `Image ${index + 1}`;
        return (
          <Thumbnail
            aria-label={label}
            animated={animated}
            animation={animation}
            animationDuration={animationDuration}
            as="button"
            className={classNames({
              'full-width': index === 0 && fullWidthFirstItem,
            })}
            image={image}
            index={index}
            key={key}
            onClick={() => {
              setImageIndex(index);
              setOpen(true);
            }}
            rounded={rounded}
            shadow={shadow}
          />
        );
      })}
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
    return image.src || '';
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
