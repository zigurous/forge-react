import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import icons from '../svg/icons';
import '../styles/social-icon.css';

const SocialIcon = ({
  altText,
  backgroundColor,
  className,
  ElementType = 'i',
  foregroundColor,
  icon,
  iconName,
  innerPadding = 8,
  rounded = false,
  size = 24,
  ...props
}) => {
  return (
    <ElementType
      {...props}
      className={classNames(
        'icon',
        'social-icon',
        { 'social-icon--rounded': rounded },
        iconName,
        className
      )}
      style={{
        backgroundColor: backgroundColor,
        fill: foregroundColor,
        width: size,
        height: size,
        padding: innerPadding,
      }}
    >
      {icon || icons[iconName]}
    </ElementType>
  );
};

SocialIcon.propTypes = {
  altText: PropTypes.string,
  backgroundColor: PropTypes.string,
  className: PropTypes.string,
  ElementType: PropTypes.elementType,
  foregroundColor: PropTypes.string,
  icon: PropTypes.element,
  iconName: PropTypes.oneOf(Object.keys(icons)),
  innerPadding: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  rounded: PropTypes.bool,
  size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

export default SocialIcon;
