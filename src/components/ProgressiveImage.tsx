import classNames from 'classnames';
import React, { useRef } from 'react';
import LoadingSpinner from './LoadingSpinner';
import { useLoaded } from '../hooks';

export type ProgressiveImageProps = {
  alt?: string;
  animated?: boolean;
  className?: string;
  height?: string | number;
  imageClassName?: string;
  imageProps?: React.ComponentPropsWithoutRef<'img'>;
  onLoaded?: () => void;
  placeholder?: string;
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
  onLoaded = () => {},
  placeholder,
  placeholderClassName,
  placeholderProps = {},
  showLoadingSpinner = false,
  src,
  width,
  ...rest
}: ProgressiveImageProps) {
  const imageRef = useRef<HTMLImageElement>(null);
  const loaded = useLoaded(imageRef, onLoaded);
  return (
    <picture
      className={classNames(
        'progressive-image',
        { 'progressive-image--loaded': loaded },
        { 'progressive-image--animated': animated },
        { 'progressive-image--no-placeholder': !placeholder },
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
        )}
        width={width || imageProps.width}
        height={height || imageProps.height}
        ref={imageRef}
        src={src}
      />
      {placeholder && (
        <img
          {...placeholderProps}
          alt={placeholderProps.alt || alt}
          className={classNames(
            'progressive-image__placeholder',
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
