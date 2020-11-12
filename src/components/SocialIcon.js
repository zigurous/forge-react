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
  foregroundColor = 'auto',
  innerPadding = 8,
  link,
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
        { 'social-icon--auto': foregroundColor === 'auto' },
        { 'social-icon--default': foregroundColor === 'default' },
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
  size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

export default SocialIcon;
