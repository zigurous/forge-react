import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { SocialProps } from '../socials';

const Link = ({
  children,
  className,
  external = false,
  href,
  link,
  rel,
  target,
}) => (
  <a
    className={classNames('link', className)}
    href={href || (typeof link === 'string' ? link : link.url)}
    rel={rel || (external ? 'noopener noreferrer' : undefined)}
    target={target || (external ? '_blank' : undefined)}
  >
    {children}
  </a>
);

Link.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  external: PropTypes.bool,
  href: PropTypes.string,
  link: SocialProps,
  rel: PropTypes.string,
  target: PropTypes.string,
};

export default Link;
