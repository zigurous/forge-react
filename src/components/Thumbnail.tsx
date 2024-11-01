import classNames from 'classnames';
import React, { useEffect, useMemo, useState } from 'react';
import ProgressiveImage, { type ProgressiveImageProps } from './ProgressiveImage'; // prettier-ignore
import type { PolymorphicProps } from '../types';

export type BaseThumbnailProps = {
  animated?: boolean;
  animation?:
    | 'fade-in'
    | 'fade-out'
    | 'translate-in'
    | 'translate-out'
    | string
    | string[];
  animationDuration?: number;
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
  animation = ['fade-in', 'translate-in'],
  animationDuration,
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
  const [loaded, setLoaded] = useState(false);
  const animationState = useAnimationState(loaded, index, animationDuration);
  return (
    <Element
      {...rest}
      className={classNames(
        'thumbnail',
        {
          [getAnimationClasses(animation)]: animated,
          'transition-start': animated && !loaded,
          'transition-end': animated && loaded,
          rounded,
          shadow,
        },
        className,
      )}
      style={{
        transitionDelay:
          animated && !animationState.done
            ? `${animationState.delay}ms`
            : undefined,
        transitionDuration:
          animated && animationDuration ? `${animationDuration}ms` : undefined,
      }}
    >
      {image && (
        <ProgressiveImage
          {...imageProps}
          animated={false}
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

function useAnimationState(loaded: boolean, index: number, duration?: number) {
  const [mountTime] = useState(Date.now());
  const [done, setDone] = useState(false);

  // Subtract the time it took to load the image from the delay
  const delay = useMemo(() => {
    let delay = index * 50;
    if (loaded) {
      const elapsed = Date.now() - mountTime;
      delay = Math.max(0, delay - elapsed);
    }
    return delay;
  }, [index, loaded]);

  // Mark as done after the delay and duration have passed
  useEffect(() => {
    if (!loaded) return;
    const ms = delay + (duration ?? 300);
    const timeout = setTimeout(() => setDone(true), ms);
    return () => clearTimeout(timeout);
  }, [delay, duration, loaded]);

  return { delay, done };
}

function getAnimationClasses(animation: string | string[]) {
  if (Array.isArray(animation)) {
    return animation.map(name => `transition-${name}`).join(' ');
  } else {
    return `transition-${animation}`;
  }
}
