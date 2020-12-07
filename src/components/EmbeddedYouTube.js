import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import EmbeddedVideo from './EmbeddedVideo';

const EmbeddedYouTube = ({
  className,
  id = 'YouTube Player',
  origin,
  title = 'YouTube',
  videoId,
  ...props
}) => {
  return (
    <EmbeddedVideo
      className={classNames('youtube', className)}
      id={id}
      src={`http://www.youtube.com/embed/${videoId}?enablejsapi=1&origin=${origin}`}
      title={title}
      {...props}
    />
  );
};

EmbeddedYouTube.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string,
  origin: PropTypes.string.isRequired,
  title: PropTypes.string,
  videoId: PropTypes.string.isRequired,
};

export default EmbeddedYouTube;
