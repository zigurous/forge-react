import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { SocialLinkProps } from '../socialLinks';
import '../styles/link.css';

const Link = ({
  children,
  className,
  ElementType = 'a',
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
  <ElementType
    {...props}
    className={classNames(
      'link',
      { 'link--underlined': underlined },
      { 'link--undecorated': undecorated },
      className
    )}
    href={
      ElementType === 'a' &&
      (href || to || (typeof link === 'string' ? link : link.url))
    }
    rel={
      ElementType === 'a' &&
      (rel || (external ? 'noopener noreferrer' : undefined))
    }
    target={
      ElementType === 'a' && (target || (external ? '_blank' : undefined))
    }
    to={ElementType !== 'a' && to}
  >
    {children}
  </ElementType>
);

Link.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  ElementType: PropTypes.elementType,
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
