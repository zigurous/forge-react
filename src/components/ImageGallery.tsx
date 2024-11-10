import classNames from 'classnames';
import React, { useState } from 'react';
import Lightbox, { type LightboxProps } from './Lightbox';
import { type ProgressiveImageProps } from './ProgressiveImage';
import Thumbnail from './Thumbnail';
import type { Transition } from '../types';

type Image = string | ProgressiveImageProps;

export interface ImageGalleryProps {
  animated?: boolean;
  animation?: Transition | Transition[];
  animationDuration?: number;
  className?: string;
  columns?: number;
  disableLightbox?: boolean;
  fullWidthFirstItem?: boolean;
  images?: Image[];
  lightboxProps?: LightboxProps;
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
  disableLightbox = false,
  fullWidthFirstItem = false,
  images = [],
  lightboxProps,
  maxWidth,
  minWidth,
  rounded = false,
  shadow = false,
}: ImageGalleryProps) {
  const [selectedImageIndex, setSelectedImageIndex] = useState(-1);
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
            disabled={disableLightbox}
            image={image}
            index={index}
            key={key}
            onClick={() => {
              setSelectedImageIndex(index);
            }}
            rounded={rounded}
            shadow={shadow}
          />
        );
      })}
      {!disableLightbox && (
        <Lightbox
          animated={animated}
          className="image-gallery__lightbox"
          currentIndex={selectedImageIndex}
          images={images}
          onRequestClose={() => setSelectedImageIndex(-1)}
          onChangeImage={setSelectedImageIndex}
          open={selectedImageIndex != -1}
          rounded={rounded}
          {...lightboxProps}
        />
      )}
    </div>
  );
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
