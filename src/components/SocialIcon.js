import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import socialLinks, { SocialProps } from '../socials';
import '../styles/social-icon.css';

const SocialIcon = ({
  ariaHidden = false,
  backgroundColor,
  className,
  disabled = false,
  elementType = 'a',
  foregroundColor = 'default',
  innerPadding = 8,
  link,
  rounded = false,
  size = 24,
}) => {
  const social = typeof link === 'string' ? socialLinks[link] : link;
  const customColor =
    foregroundColor !== 'auto' && foregroundColor !== 'default';
  const element = {
    type: elementType || 'a',
  };
  return (
    <div
      className={classNames(
        'social-icon',
        { 'social-icon--rounded': rounded },
        { 'social-icon--default': foregroundColor === 'default' },
        { 'social-icon--auto': foregroundColor === 'auto' },
        social.key,
        className
      )}
      style={{
        backgroundColor: backgroundColor,
        fill: customColor ? foregroundColor : undefined,
      }}
    >
      <element.type
        aria-hidden={ariaHidden}
        aria-label={social.name}
        disabled={disabled}
        href={elementType === 'a' ? social.url : undefined}
        rel={elementType === 'a' ? 'noopener noreferrer' : undefined}
        target={elementType === 'a' ? '_blank' : undefined}
        style={{ width: size, height: size, padding: innerPadding }}
      >
        {social.svg}
      </element.type>
    </div>
  );
};

SocialIcon.propTypes = {
  ariaHidden: PropTypes.bool,
  backgroundColor: PropTypes.string,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  elementType: PropTypes.elementType,
  foregroundColor: PropTypes.string,
  innerPadding: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  link: SocialProps.isRequired,
  rounded: PropTypes.bool,
  size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

export default SocialIcon;
