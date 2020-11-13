import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { SocialProps } from '../socials';
import '../styles/link.css';

const Link = ({
  children,
  className,
  external = false,
  href,
  link,
  noUnderline = false,
  rel,
  target,
  underlined = false,
}) => (
  <a
    className={classNames(
      'link',
      { 'link--underlined': underlined },
      { 'link--no-underline': noUnderline },
      className
    )}
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
  noUnderline: PropTypes.bool,
  rel: PropTypes.string,
  target: PropTypes.string,
  underlined: PropTypes.bool,
};

export default Link;
