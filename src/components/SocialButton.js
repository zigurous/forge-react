import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import Button from './Button';
import Link from './Link';
import SocialIcon from './SocialIcon';
import socialLinks, { SocialLinkProps } from '../socialLinks';
import '../styles/social-button.css';

function SocialButton({
  children,
  className,
  link,
  LinkElementType,
  primaryColor,
  secondaryColor,
  size = Button.size.medium,
  url,
  ...props
}) {
  const social = typeof link === 'string' ? socialLinks[link] : link;
  return (
    <Link
      ElementType={LinkElementType}
      external
      to={url || social.url}
      unstyled
    >
      <Button
        className={classNames('social-button', social.key, className)}
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
        size={size}
        styles={{
          '--button-color-primary': primaryColor || social.color,
          '--button-color-primary-hover': primaryColor || social.color,
          '--button-color-secondary': secondaryColor,
        }}
        {...props}
      >
        {children || social.name}
      </Button>
    </Link>
  );
}

SocialButton.shape = Button.shape;
SocialButton.size = Button.size;
SocialButton.style = Button.style;

SocialButton.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  link: SocialLinkProps.isRequired,
  LinkElementType: PropTypes.elementType,
  primaryColor: PropTypes.string,
  secondaryColor: PropTypes.string,
  size: PropTypes.oneOf(Object.values(Button.size)),
  url: PropTypes.string,
};

export default SocialButton;
