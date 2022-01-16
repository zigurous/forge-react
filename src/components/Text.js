import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { ColorPropTypes, FontSizePropTypes, MarginPropTypes } from '../props';

function Text({
  bold,
  children,
  className,
  color,
  italic,
  marginBottom,
  marginTop,
  size,
  tag: Element = 'p',
}) {
  return (
    <Element
      className={classNames(
        { [`font-${size}`]: size },
        { [`color-${color}`]: color },
        { [`margin-top-${marginTop}`]: marginTop },
        { [`margin-bottom-${marginBottom}`]: marginBottom },
        className
      )}
    >
      {bold ? (
        <b>{italic ? <em>{children}</em> : children}</b>
      ) : italic ? (
        <em>{children}</em>
      ) : (
        children
      )}
    </Element>
  );
}

Text.propTypes = {
  bold: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string,
  color: ColorPropTypes,
  italic: PropTypes.bool,
  marginBottom: MarginPropTypes,
  marginTop: MarginPropTypes,
  size: FontSizePropTypes,
  tag: PropTypes.elementType,
};

export default Text;
