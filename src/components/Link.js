import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { SocialLinkProps } from '../socialLinks';

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
}) => {
  const anchorProps =
    ElementType === 'a'
      ? {
          href: href || to || (typeof link === 'string' ? link : link.url),
          rel: rel || (external ? 'noopener noreferrer' : undefined),
          target: target || (external ? '_blank' : undefined),
        }
      : {};
  return (
    <ElementType
      {...props}
      className={classNames(
        'link',
        { 'link--underlined': underlined },
        { 'link--undecorated': undecorated },
        className
      )}
      to={ElementType !== 'a' ? to : undefined}
      {...anchorProps}
    >
      {children}
    </ElementType>
  );
};

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
