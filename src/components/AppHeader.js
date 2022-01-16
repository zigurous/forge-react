import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import Link from './Link';
import Logo from './Logo';
import NavBar from './NavBar';
import NavMenu from './NavMenu';
import SocialNavLinks from './SocialNavLinks';
import { SocialLinkProps } from '../socialLinks';
import '../styles/app-header.css';

function AppHeader({
  bordered = false,
  className,
  fluid = false,
  hideLogo = false,
  hideNavigation = false,
  hideSocialLinks = false,
  LinkElementType = 'a',
  links = [],
  location = typeof window !== 'undefined' && window.location,
  logoSize = Logo.size.small,
  logoVariant = Logo.variant.wordmark,
  onLogoClick,
  onLinkClick,
  onSocialLinkClick,
  rootElement,
  socialLinks = [],
  sticky = false,
  theme,
  transparent = false,
}) {
  return (
    <header
      className={classNames(
        'app-header',
        { 'app-header--bordered': bordered },
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
          {!hideLogo && (
            <Logo onClick={onLogoClick} size={logoSize} variant={logoVariant} />
          )}
          {!hideNavigation && (
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
          {!hideSocialLinks && socialLinks && socialLinks.length > 0 && (
            <SocialNavLinks
              iconInnerPadding={10}
              iconSize={20}
              links={socialLinks}
              onLinkClick={onSocialLinkClick}
            />
          )}
          {!hideNavigation && (
            <NavMenu
              hideSocialLinks={hideSocialLinks}
              LinkElementType={LinkElementType}
              links={links}
              location={location}
              logoSize={logoSize}
              logoVariant={logoVariant}
              onLinkClick={onLinkClick}
              onLogoClick={onLogoClick}
              rootElement={rootElement}
              socialLinks={socialLinks}
              theme={theme}
            />
          )}
        </div>
      </div>
    </header>
  );
}

AppHeader.propTypes = {
  bordered: PropTypes.bool,
  className: PropTypes.string,
  fluid: PropTypes.bool,
  hideLogo: PropTypes.bool,
  hideNavigation: PropTypes.bool,
  hideSocialLinks: PropTypes.bool,
  LinkElementType: PropTypes.elementType,
  links: PropTypes.arrayOf(PropTypes.shape(Link.propTypes)),
  location: PropTypes.object,
  logoSize: PropTypes.oneOf(Object.values(Logo.size)),
  logoVariant: PropTypes.oneOf(Object.values(Logo.variant)),
  onLogoClick: PropTypes.func,
  onLinkClick: PropTypes.func,
  onSocialLinkClick: PropTypes.func,
  rootElement: PropTypes.string,
  socialLinks: PropTypes.arrayOf(SocialLinkProps),
  sticky: PropTypes.bool,
  theme: PropTypes.string,
  transparent: PropTypes.bool,
};

export default AppHeader;
