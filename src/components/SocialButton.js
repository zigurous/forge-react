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
  secondaryColor = 'white',
  size = Button.size.medium,
  url,
  ...props
}) => {
  const social = typeof link === 'string' ? socialLinks[link] : link;
  return (
    <Button
      {...props}
      className={classNames('social-button', social.key, className)}
      external
      icon="left"
      iconElement={
        social.icon && (
          <SocialIcon
            aria-hidden
            ElementType="i"
            foregroundColor={primaryColor || social.color}
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
      style={{
        '--color-button-primary': primaryColor || social.color,
        '--color-button-secondary': secondaryColor,
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
  onClick: PropTypes.func,
  primaryColor: PropTypes.string,
  secondaryColor: PropTypes.string,
  size: PropTypes.oneOf(Object.values(Button.size)),
  url: PropTypes.string,
};

export default SocialButton;
