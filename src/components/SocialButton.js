import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Button, { buttonSizes } from './Button';
import SocialIcon from './SocialIcon';
import socialLinks, { SocialLinkProps } from '../socialLinks';
import '../styles/social-button.css';

const SocialButton = ({
  children,
  className,
  link,
  size = 'medium',
  url,
  ...props
}) => {
  const social = typeof link === 'string' ? socialLinks[link] : link;
  return (
    <Button
      {...props}
      className={classNames('social-button', social.key, className)}
      leftIcon={
        social.icon && (
          <SocialIcon
            aria-hidden
            ElementType="i"
            icon={social.icon}
            iconName={social.key}
            innerPadding={0}
            size="100%"
          />
        )
      }
      onClick={() => {
        window.open(url || social.url, '_blank');
      }}
      size={size}
      style={{
        '--color-social-icon': social.color,
        '--color-button-primary': social.color,
        '--color-button-secondary': 'white',
      }}
    >
      {children || social.name}
    </Button>
  );
};

SocialButton.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  link: SocialLinkProps.isRequired,
  size: PropTypes.oneOf(buttonSizes),
  url: PropTypes.string,
};

export default SocialButton;
