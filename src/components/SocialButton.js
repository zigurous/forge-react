import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Button, { buttonSizes } from './Button';
import SocialIcon from './SocialIcon';
import socialLinks, { SocialProps } from '../socials';
import '../styles/social-button.css';

const iconSizes = {
  [buttonSizes.sm]: 15,
  [buttonSizes.small]: 15,
  [buttonSizes.md]: 18,
  [buttonSizes.medium]: 18,
  [buttonSizes.lg]: 21,
  [buttonSizes.large]: 21,
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
        '--theme-social-icon-color': social.color,
        '--theme-button-primary-color': social.color,
        '--theme-button-secondary-color': 'white',
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
