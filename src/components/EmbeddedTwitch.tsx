import classNames from 'classnames';
import React from 'react';
import EmbeddedVideo, { type EmbeddedVideoProps } from './EmbeddedVideo';

export type EmbeddedTwitchProps = {
  channel: string;
  muted?: boolean;
  secure?: boolean;
} & Omit<EmbeddedVideoProps, 'src'>;

export default function EmbeddedTwitch({
  channel = 'zigurous',
  className,
  id = 'twitch-player',
  muted = true,
  secure = true,
  title = 'Twitch',
  ...rest
}: EmbeddedTwitchProps) {
  const protocol = secure ? 'https' : 'http';
  const parents = ['zigurous.com', 'www.zigurous.com'];
  if (process.env.NODE_ENV === 'development') {
    parents.push('localhost');
  }
  return (
    <EmbeddedVideo
      className={classNames('twitch', className)}
      id={id}
      src={`${protocol}://player.twitch.tv/?channel=${channel}&parent=${parents.join(
        '&parent=',
      )}&muted=${muted}`}
      title={title}
      {...rest}
    />
  );
}
