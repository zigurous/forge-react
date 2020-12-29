import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Button, { buttonSizes } from './Button';
import SocialIcon from './SocialIcon';
import socialLinks, { SocialProps } from '../socials';
import '../styles/social-button.css';

const iconSizes = {
  sm: 16,
  small: 16,
  md: 20,
  medium: 20,
  lg: 24,
  large: 24,
};

const SocialButton = ({ className, link, size = 'medium', ...rest }) => {
  const social = typeof link === 'string' ? socialLinks[link] : link;
  return (
    <Button
      {...rest}
      className={classNames('social-button', social.key, className)}
      leftIcon={
        <SocialIcon
          ariaHidden
          className="margin-right-md"
          elementType="span"
          innerPadding={0}
          link={link}
          size={iconSizes[size]}
        />
      }
      onClick={() => {
        window.open(social.url, '_blank');
      }}
      size={size}
      style={{
        '--color-social-icon': social.color,
        '--color-button-primary': social.color,
        '--color-button-secondary': 'white',
      }}
    >
      {social.name}
    </Button>
  );
};

SocialButton.propTypes = {
  className: PropTypes.string,
  link: SocialProps.isRequired,
  size: PropTypes.oneOf(buttonSizes),
};

export default SocialButton;
