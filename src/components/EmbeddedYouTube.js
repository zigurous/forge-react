import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import EmbeddedVideo from './EmbeddedVideo';

const EmbeddedYouTube = ({
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
  ...props
}) => {
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
      {...props}
    />
  );
};

EmbeddedYouTube.propTypes = {
  autoplay: PropTypes.bool,
  captions: PropTypes.bool,
  className: PropTypes.string,
  hideBranding: PropTypes.bool,
  hideControls: PropTypes.bool,
  hideInfo: PropTypes.bool,
  hideRelated: PropTypes.bool,
  id: PropTypes.string,
  muted: PropTypes.bool,
  origin: PropTypes.string.isRequired,
  secure: PropTypes.bool,
  startTime: PropTypes.oneOf([PropTypes.number, PropTypes.string]),
  title: PropTypes.string,
  videoId: PropTypes.string.isRequired,
};

export default EmbeddedYouTube;
