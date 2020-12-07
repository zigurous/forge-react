import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import '../styles/embedded-video.css';

const EmbeddedTwitch = ({
  allowFullScreen = true,
  channel = 'zigurous',
  className,
  muted = true,
  size = 'md',
}) => {
  const parents = ['zigurous.com', 'www.zigurous.com'];
  if (process.env.NODE_ENV === 'development') {
    parents.push('localhost');
  }
  return (
    <div className={classNames('embedded-video', size, className)}>
      <iframe
        allowFullScreen={allowFullScreen}
        frameBorder="0"
        height="100%"
        scrolling="no"
        src={`https://player.twitch.tv/?channel=${channel}&parent=${parents.join(
          '&parent='
        )}&muted=${muted}`}
        title="Twitch"
        width="100%"
      />
    </div>
  );
};

EmbeddedTwitch.propTypes = {
  allowFullScreen: PropTypes.bool,
  channel: PropTypes.string,
  className: PropTypes.string,
  muted: PropTypes.bool,
  size: PropTypes.oneOf([
    'xs',
    'extraSmall',
    'sm',
    'small',
    'md',
    'medium',
    'lg',
    'large',
    'xl',
    'extraLarge',
  ]),
};

export default EmbeddedTwitch;
