import classNames from 'classnames';
import PropTypes from 'prop-types';
import React, { useRef } from 'react';
import LoadingSpinner from './LoadingSpinner';
import { useLoading } from '../hooks';
import '../styles/embedded-video.css';

const sizes = Object.freeze({
  xs: {
    width: 320,
    height: 180,
  },
  extraSmall: {
    width: 320,
    height: 180,
  },
  sm: {
    width: 480,
    height: 270,
  },
  small: {
    width: 480,
    height: 270,
  },
  md: {
    width: 640,
    height: 360,
  },
  medium: {
    width: 640,
    height: 360,
  },
  lg: {
    width: 960,
    height: 540,
  },
  large: {
    width: 960,
    height: 540,
  },
  xl: {
    width: 1280,
    height: 720,
  },
  extraLarge: {
    width: 1280,
    height: 720,
  },
});

const formatSize = (size) => {
  if (typeof size === 'string') {
    if (size.endsWith('%') || size.endsWith('px')) {
      return size;
    } else {
      return `${size}px`;
    }
  } else {
    return `${size}px`;
  }
};

const EmbeddedVideo = ({
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
}) => {
  const ref = useRef();
  const loading = useLoading(ref);
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
          { visible: !loading }
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
      {loading && <LoadingSpinner />}
    </div>
  );
};

EmbeddedVideo.size = sizes;
EmbeddedVideo.propTypes = {
  allowFullScreen: PropTypes.bool,
  className: PropTypes.string,
  frameBorder: PropTypes.string,
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  id: PropTypes.string,
  scrolling: PropTypes.string,
  size: PropTypes.oneOf(Object.keys(EmbeddedVideo.size)),
  src: PropTypes.string.isRequired,
  title: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default EmbeddedVideo;
