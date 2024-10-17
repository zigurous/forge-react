import classNames from 'classnames';
import React from 'react';
import EmbeddedVideo, { EmbeddedVideoProps } from './EmbeddedVideo';

export type EmbeddedYouTubeProps = {
  autoplay?: boolean;
  captions?: boolean;
  hideBranding?: boolean;
  hideControls?: boolean;
  hideInfo?: boolean;
  hideRelated?: boolean;
  muted?: boolean;
  origin: string;
  secure?: boolean;
  startTime?: number | string;
  videoId: string;
} & Omit<EmbeddedVideoProps, 'src'>;

export default function EmbeddedYouTube({
  autoplay = false,
  captions = false,
  className,
  hideBranding = false,
  hideControls = false,
  hideInfo = false,
  hideRelated = true,
  id = 'youtube-player',
  muted = false,
  origin,
  secure = true,
  startTime,
  title = 'YouTube',
  videoId,
  ...rest
}: EmbeddedYouTubeProps) {
  let query = 'enablejsapi=1';
  query += `&origin=${origin}`;
  if (hideRelated) query += '&rel=0';
  if (hideControls) query += '&controls=0';
  if (hideInfo) query += '&showinfo=0';
  if (hideBranding) query += '&modestbranding=1';
  if (captions) query += '&cc_load_policy=1';
  if (autoplay) query += '&autoplay=1';
  if (muted) query += '&mute=1';
  if (startTime) query += `&start=${startTime}`;
  const protocol = secure ? 'https' : 'http';
  return (
    <EmbeddedVideo
      className={classNames('youtube', className)}
      id={id}
      src={`${protocol}://www.youtube.com/embed/${videoId}?${query}`}
      title={title}
      {...rest}
    />
  );
}
