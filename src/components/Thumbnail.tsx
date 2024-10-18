import classNames from 'classnames';
import React, { useEffect, useRef, useState } from 'react';
import ProgressiveImage, { ProgressiveImageProps } from './ProgressiveImage';
import type { PolymorphicProps, PolymorphicRef } from '../types';

export type BaseThumbnailProps = {
  animated?: boolean;
  animation?:
    | 'fade-in'
    | 'fade-out'
    | 'translate-in'
    | 'translate-out'
    | 'fade-translate-in'
    | 'fade-translate-out'
    | string;
  children?: React.ReactNode;
  className?: string;
  image?: string | ProgressiveImageProps;
  index?: number;
  rounded?: boolean;
  shadow?: boolean;
};

export type ThumbnailProps<T extends React.ElementType = 'a'> =
  PolymorphicProps<T, BaseThumbnailProps>;

export default function Thumbnail<T extends React.ElementType = 'a'>({
  animated = false,
  animation = 'fade-translate-in',
  as,
  children,
  className,
  image,
  index = -1,
  ref: _,
  rounded = true,
  shadow = true,
  ...rest
}: ThumbnailProps<T>) {
  const Element = as ?? 'a';
  const imageProps = typeof image === 'object' ? image : { src: image };
  const ref = useRef<PolymorphicRef<T>>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    let handle: ReturnType<typeof setTimeout>;
    if (animated && loaded) {
      handle = setTimeout(() => {
        if (ref.current) {
          ref.current.style.animation = 'none';
        }
      }, 600);
    }
    return () => {
      if (handle) {
        clearTimeout(handle);
      }
    };
  }, [animated, loaded, ref]);

  return (
    <Element
      {...rest}
      className={classNames(
        'thumbnail',
        {
          'animation-short': animated && loaded,
          [`animation-delay-${index + 1}`]: animated && loaded && index >= 0,
          [animation]: animated && loaded,
        },
        { rounded, shadow },
        className,
      )}
      ref={ref}
    >
      {image && (
        <ProgressiveImage
          {...imageProps}
          onLoaded={() => {
            setLoaded(true);
            if (typeof image === 'object' && image.onLoaded) {
              image.onLoaded();
            }
          }}
        />
      )}
      {children}
    </Element>
  );
}
