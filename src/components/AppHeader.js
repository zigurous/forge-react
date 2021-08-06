import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import Logo from './Logo';
import NavBar from './NavBar';
import NavMenu from './NavMenu';
import SocialNavLinks from './SocialNavLinks';
import { SocialLinkProps } from '../socialLinks';
import '../styles/app-header.css';

const AppHeader = ({
  className,
  fluid = false,
  LinkElementType = 'a',
  links = [],
  location = typeof window !== 'undefined' && window.location,
  logoSize = Logo.size.small,
  logoVariant = Logo.variant.wordmark,
  onLogoClick,
  onLinkClick,
  onSocialLinkClick,
  portalRootElement,
  showLogo = true,
  showNavigation = true,
  showSocialLinks = true,
  socialLinks = [],
  sticky = false,
  theme,
  transparent = false,
}) => {
  return (
    <header
      className={classNames(
        'app-header',
        { 'app-header--transparent': transparent },
        { 'app-header--sticky': sticky },
        className
      )}
      data-theme={theme}
    >
      <div
        className={classNames({
          container: !fluid,
          'container-fluid': fluid,
        })}
      >
        <div className="app-header__content left">
          {showLogo && (
            <Logo onClick={onLogoClick} size={logoSize} variant={logoVariant} />
          )}
          {showNavigation && (
            <NavBar
              LinkElementType={LinkElementType}
              links={links}
              location={location}
              onLinkClick={onLinkClick}
              theme={theme}
            />
          )}
        </div>
        <div className="app-header__content right">
          {showSocialLinks && (
            <SocialNavLinks
              iconInnerPadding={10}
              iconSize={20}
              links={socialLinks}
              onLinkClick={onSocialLinkClick}
            />
          )}
          {showNavigation && (
            <NavMenu
              LinkElementType={LinkElementType}
              links={links}
              location={location}
              logoSize={logoSize}
              logoVariant={logoVariant}
              onLinkClick={onLinkClick}
              onLogoClick={onLogoClick}
              portalRootElement={portalRootElement}
              showSocialLinks={showSocialLinks}
              socialLinks={socialLinks}
              theme={theme}
            />
          )}
        </div>
      </div>
    </header>
  );
};

AppHeader.propTypes = {
  className: PropTypes.string,
  fluid: PropTypes.bool,
  LinkElementType: PropTypes.elementType,
  links: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      to: PropTypes.string,
      name: PropTypes.string,
      leftIcon: PropTypes.string,
      rightIcon: PropTypes.string,
      external: PropTypes.bool,
      ElementType: PropTypes.elementType,
    })
  ),
  location: PropTypes.shape({
    pathname: PropTypes.string,
  }),
  logoSize: PropTypes.oneOf(Object.values(Logo.size)),
  logoVariant: PropTypes.oneOf(Object.values(Logo.variant)),
  onLogoClick: PropTypes.func,
  onLinkClick: PropTypes.func,
  onSocialLinkClick: PropTypes.func,
  portalRootElement: PropTypes.string,
  showLogo: PropTypes.bool,
  showNavigation: PropTypes.bool,
  showSocialLinks: PropTypes.bool,
  socialLinks: PropTypes.arrayOf(SocialLinkProps),
  sticky: PropTypes.bool,
  theme: PropTypes.string,
  transparent: PropTypes.bool,
};

export default AppHeader;
