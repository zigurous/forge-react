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
  portalRootElement,
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
          {!hideSocialLinks && (
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
              portalRootElement={portalRootElement}
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
  hideLogo: PropTypes.bool,
  hideNavigation: PropTypes.bool,
  hideSocialLinks: PropTypes.bool,
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
  socialLinks: PropTypes.arrayOf(SocialLinkProps),
  sticky: PropTypes.bool,
  theme: PropTypes.string,
  transparent: PropTypes.bool,
};

export default AppHeader;
