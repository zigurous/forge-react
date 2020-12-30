import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Button, { buttonSizes } from './Button';
import SocialIcon from './SocialIcon';
import socialLinks, { SocialProps } from '../socials';
import '../styles/social-button.css';

const SocialButton = ({
  children,
  className,
  link,
  size = 'medium',
  ...rest
}) => {
  const social = typeof link === 'string' ? socialLinks[link] : link;
  return (
    <Button
      {...rest}
      className={classNames('social-button', social.key, className)}
      leftIcon={
        social.svg && (
          <SocialIcon
            ariaHidden
            ElementType="i"
            innerPadding={0}
            link={link}
            size="100%"
          />
        )
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
      {children || social.name}
    </Button>
  );
};

SocialButton.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  link: SocialProps.isRequired,
  size: PropTypes.oneOf(buttonSizes),
};

export default SocialButton;
