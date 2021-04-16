import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

const Link = ({
  activeClassName,
  children,
  className,
  ElementType = 'a',
  external = false,
  href,
  rel,
  target,
  to,
  underlined = false,
  unstyled = false,
  ...props
}) => {
  const elementProps =
    ElementType === 'a'
      ? {
          href: href || to,
          rel: rel || (external ? 'noopener noreferrer' : undefined),
          target: target || (external ? '_blank' : undefined),
        }
      : {
          to,
          activeClassName,
        };
  return (
    <ElementType
      {...props}
      {...elementProps}
      className={classNames(
        'link',
        { 'link--underlined': underlined },
        { 'link--unstyled': unstyled },
        className
      )}
    >
      {children}
    </ElementType>
  );
};

Link.propTypes = {
  activeClassName: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
  ElementType: PropTypes.elementType,
  external: PropTypes.bool,
  href: PropTypes.string,
  rel: PropTypes.string,
  target: PropTypes.string,
  to: PropTypes.string,
  underlined: PropTypes.bool,
  unstyled: PropTypes.bool,
};

export default Link;
