import classNames from 'classnames';
import React, { useRef } from 'react';
import LoadingSpinner from './LoadingSpinner';
import { useLoading } from '../hooks';

const sizes = Object.freeze({
  xs: {
    width: 320,
    height: 180,
  },
  sm: {
    width: 480,
    height: 270,
  },
  md: {
    width: 640,
    height: 360,
  },
  lg: {
    width: 960,
    height: 540,
  },
  xl: {
    width: 1280,
    height: 720,
  },
});

export interface EmbeddedVideoProps {
  allowFullScreen?: boolean;
  className?: string;
  frameBorder?: string;
  height?: string | number;
  id?: string;
  scrolling?: string;
  size?: keyof typeof sizes;
  src: string;
  title?: string;
  width?: string | number;
}

export default function EmbeddedVideo({
  allowFullScreen = true,
  className,
  frameBorder = '0',
  height,
  id = 'video-player',
  scrolling = 'no',
  size,
  src,
  title = 'Video Player',
  width,
}: EmbeddedVideoProps) {
  const ref = useRef<HTMLIFrameElement>(null);
  const loading = useLoading(ref);
  const offline = typeof navigator !== 'undefined' && !navigator.onLine;
  const _width = width || (size && sizes[size].width);
  const _height = height || (size && sizes[size].height);
  return (
    <div
      className={classNames('embedded-video', { loading }, size, className)}
      style={{ width: formatSize(_width), height: formatSize(_height) }}
    >
      <div
        className={classNames(
          'embedded-video__wrapper',
          'transition',
          'fade-in',
          { visible: !loading },
        )}
      >
        <iframe
          allowFullScreen={allowFullScreen}
          frameBorder={frameBorder}
          height={_height || '100%'}
          id={id}
          ref={ref}
          scrolling={scrolling}
          src={src}
          title={title}
          width={_width || '100%'}
        />
      </div>
      {loading && !offline && <LoadingSpinner />}
    </div>
  );
}

function formatSize(size: string | number | undefined): string | undefined {
  if (size === undefined || size === null) {
    return undefined;
  }
  if (typeof size === 'string') {
    if (size.endsWith('%') || size.endsWith('px')) {
      return size;
    } else {
      return `${size}px`;
    }
  } else {
    return `${size}px`;
  }
}