'use client';

import classNames from 'classnames';
import React, { useCallback, useEffect, useState } from 'react';
import LoadingSpinner from './LoadingSpinner';

export type ProgressiveImageProps = {
  alt?: string;
  animated?: boolean;
  className?: string;
  height?: string | number;
  imageClassName?: string;
  imageProps?: React.ComponentPropsWithoutRef<'img'>;
  objectFit?: 'cover' | 'contain' | 'fill' | 'none' | 'scale-down';
  onLoad?: () => void;
  placeholder?: string;
  placeholderBlurred?: boolean;
  placeholderClassName?: string;
  placeholderProps?: React.ComponentPropsWithoutRef<'img'>;
  showLoadingSpinner?: boolean;
  src?: string;
  width?: string | number;
} & React.ComponentPropsWithRef<'picture'>;

export default function ProgressiveImage({
  alt,
  animated = true,
  className,
  height,
  imageClassName,
  imageProps = {},
  objectFit,
  onLoad,
  placeholder,
  placeholderBlurred,
  placeholderClassName,
  placeholderProps = {},
  showLoadingSpinner = false,
  src,
  width,
  ...rest
}: ProgressiveImageProps) {
  const [loaded, setLoaded] = useState(false);

  const ref = useCallback((img: HTMLImageElement) => {
    if (img) {
      setLoaded(img.complete);
    }
  }, []);

  useEffect(() => {
    if (loaded && onLoad) {
      onLoad();
    }
  }, [loaded]);

  return (
    <picture
      className={classNames(
        'progressive-image',
        {
          'progressive-image--loaded': loaded,
          'progressive-image--animated': animated,
          'progressive-image--no-placeholder': !placeholder,
        },
        className,
      )}
      {...rest}
    >
      <img
        {...imageProps}
        alt={imageProps.alt || alt}
        className={classNames(
          'progressive-image__source',
          'img-fluid',
          imageClassName,
          imageProps.className,
          { [`object-${objectFit}`]: objectFit },
        )}
        onLoad={e => setLoaded(true)}
        width={width || imageProps.width}
        height={height || imageProps.height}
        ref={ref}
        src={src}
      />
      {placeholder && (
        <img
          {...placeholderProps}
          alt={placeholderProps.alt || alt}
          aria-hidden
          className={classNames(
            'progressive-image__placeholder',
            {
              'progressive-image__placeholder--blurred': placeholderBlurred,
            },
            'img-fluid',
            placeholderClassName,
            placeholderProps.className,
          )}
          width={width || placeholderProps.width || imageProps.width}
          height={height || placeholderProps.height || imageProps.height}
          src={placeholder}
        />
      )}
      {showLoadingSpinner && !loaded && <LoadingSpinner />}
    </picture>
  );
}
