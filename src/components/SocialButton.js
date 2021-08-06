import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import Button from './Button';
import SocialIcon from './SocialIcon';
import socialLinks, { SocialLinkProps } from '../socialLinks';
import '../styles/social-button.css';

const SocialButton = ({
  children,
  className,
  link,
  onClick,
  primaryColor,
  secondaryColor,
  size = Button.size.medium,
  url,
  ...props
}) => {
  const social = typeof link === 'string' ? socialLinks[link] : link;
  return (
    <Button
      className={classNames('social-button', social.key, className)}
      external
      icon="left"
      iconElement={
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
      link={url || social.url}
      onClick={onClick}
      size={size}
      styles={{
        '--button-solid-primary': primaryColor || social.color,
        '--button-solid-secondary': secondaryColor,
        '--button-solid-tertiary': primaryColor || social.color,
        '--button-outline-primary': primaryColor || social.color,
        '--button-outline-secondary': secondaryColor,
        '--button-text-primary': primaryColor || social.color,
      }}
      {...props}
    >
      {children || social.name}
    </Button>
  );
};

SocialButton.shape = Button.shape;
SocialButton.size = Button.size;
SocialButton.style = Button.style;

SocialButton.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  link: SocialLinkProps.isRequired,
  onClick: PropTypes.func,
  primaryColor: PropTypes.string,
  secondaryColor: PropTypes.string,
  size: PropTypes.oneOf(Object.values(Button.size)),
  url: PropTypes.string,
};

export default SocialButton;
