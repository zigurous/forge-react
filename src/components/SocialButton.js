import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Button from './Button';
import SocialIcon from './SocialIcon';
import socialLinks, { SocialProps } from '../socials';
import '../styles/social-button.css';

const iconSizes = {
  small: 15,
  medium: 18,
  large: 21,
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
  size: PropTypes.oneOf(['small', 'medium', 'large']),
};

export default SocialButton;
