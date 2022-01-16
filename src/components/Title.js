import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import {
  ColorPropTypes,
  FontHeaderPropTypes,
  FontWeightPropTypes,
  MarginPropTypes,
} from '../props';

const Title = ({
  bold,
  children,
  className,
  color,
  display,
  eyebrow,
  italic,
  marginBottom,
  marginTop,
  nowrap,
  size,
  subtitle,
  tag: Element = 'div',
  weight,
}) => {
  return (
    <Element
      className={classNames(
        { [`h${size}`]: !display && typeof size !== 'undefined' },
        { [`display-${size}`]: display && typeof size !== 'undefined' },
        { [`font-weight-${weight}`]: typeof weight !== 'undefined' },
        { [`color-${color}`]: color },
        { [`margin-top-${marginTop}`]: marginTop },
        { [`margin-bottom-${marginBottom}`]: marginBottom },
        { 'text-nowrap': nowrap },
        { subtitle: subtitle },
        { eyebrow: eyebrow },
        color,
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
};

Title.propTypes = {
  bold: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string,
  color: ColorPropTypes,
  display: PropTypes.bool,
  eyebrow: PropTypes.bool,
  italic: PropTypes.bool,
  marginBottom: MarginPropTypes,
  marginTop: MarginPropTypes,
  nowrap: PropTypes.bool,
  size: FontHeaderPropTypes,
  subtitle: PropTypes.bool,
  tag: PropTypes.elementType,
  weight: FontWeightPropTypes,
};

export default Title;
