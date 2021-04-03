import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
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
  unstyled = false,
  ...props
}) => {
  const elementProps =
    ElementType === 'a'
      ? {
          href: href || to || (typeof link === 'string' ? link : link.url),
          rel: rel || (external ? 'noopener noreferrer' : undefined),
          target: target || (external ? '_blank' : undefined),
        }
      : {
          to,
        };
  return (
    <ElementType
      {...props}
      {...elementProps}
      className={classNames(
        { link: !unstyled },
        { 'link--underlined': !unstyled && underlined },
        { 'link--undecorated': !unstyled && undecorated },
        className
      )}
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
  unstyled: PropTypes.bool,
};

export default Link;
