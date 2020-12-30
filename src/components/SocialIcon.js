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
  ElementType = 'a',
  foregroundColor = 'default',
  innerPadding = 8,
  link,
  rel = 'noopener noreferrer',
  rounded = false,
  size = 24,
  target = '_blank',
}) => {
  const social = typeof link === 'string' ? socialLinks[link] : link;
  const customColor =
    foregroundColor !== 'auto' && foregroundColor !== 'default';
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
      <ElementType
        aria-hidden={ariaHidden}
        aria-label={social.name}
        disabled={disabled}
        href={ElementType === 'a' ? social.url : undefined}
        rel={ElementType === 'a' ? rel : undefined}
        target={ElementType === 'a' ? target : undefined}
        style={{ width: size, height: size, padding: innerPadding }}
      >
        {social.svg}
      </ElementType>
    </div>
  );
};

SocialIcon.propTypes = {
  ariaHidden: PropTypes.bool,
  backgroundColor: PropTypes.string,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  ElementType: PropTypes.elementType,
  foregroundColor: PropTypes.string,
  innerPadding: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  link: SocialProps.isRequired,
  rel: PropTypes.string,
  rounded: PropTypes.bool,
  size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  target: PropTypes.string,
};

export default SocialIcon;
