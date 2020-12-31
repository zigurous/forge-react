import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { SocialLinkProps } from '../socialLinks';
import '../styles/link.css';

const Link = ({
  children,
  className,
  external = false,
  href,
  link,
  rel,
  target,
  to,
  undecorated = false,
  underlined = false,
  ...props
}) => (
  <a
    {...props}
    className={classNames(
      'link',
      { 'link--underlined': underlined },
      { 'link--undecorated': undecorated },
      className
    )}
    href={href || to || (typeof link === 'string' ? link : link.url)}
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
  link: SocialLinkProps,
  rel: PropTypes.string,
  target: PropTypes.string,
  to: PropTypes.string,
  undecorated: PropTypes.bool,
  underlined: PropTypes.bool,
};

export default Link;
