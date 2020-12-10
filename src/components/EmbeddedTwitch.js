import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import EmbeddedVideo from './EmbeddedVideo';

const EmbeddedTwitch = ({
  channel = 'zigurous',
  className,
  id = 'twitch-player',
  muted = true,
  title = 'Twitch',
  ...props
}) => {
  const parents = ['zigurous.com', 'www.zigurous.com'];
  if (process.env.NODE_ENV === 'development') {
    parents.push('localhost');
  }
  return (
    <EmbeddedVideo
      className={classNames('twitch', className)}
      id={id}
      src={`https://player.twitch.tv/?channel=${channel}&parent=${parents.join(
        '&parent='
      )}&muted=${muted}`}
      title={title}
      {...props}
    />
  );
};

EmbeddedTwitch.propTypes = {
  channel: PropTypes.string.isRequired,
  className: PropTypes.string,
  id: PropTypes.string,
  muted: PropTypes.bool,
  title: PropTypes.string,
};

export default EmbeddedTwitch;
