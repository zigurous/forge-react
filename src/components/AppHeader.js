import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import Logo from './Logo';
import NavBar from './NavBar';
import NavMenu from './NavMenu';
import SocialNavLinks from './SocialNavLinks';
import { SocialLinkProps } from '../socialLinks';
import { useMobile } from '../hooks';
import '../styles/app-header.css';

const AppHeader = ({
  className,
  fluid = false,
  LinkElementType = 'a',
  links = [],
  logoSize = Logo.size.small,
  logoVariant = Logo.variant.wordmark,
  navigationStyle = 'bar',
  onLogoClick = () => {},
  showLogo = true,
  showNavigation = true,
  showSocialLinks = true,
  socialLinks = [],
  sticky = false,
  theme,
  transparent = false,
}) => {
  const mobile = useMobile();
  return (
    <header
      className={classNames(
        'app-header',
        { 'app-header--transparent': transparent },
        { 'app-header--sticky': sticky },
        className
      )}
      theme={theme}
    >
      {navigationStyle === 'bar' && (
        <div
          className={classNames({
            container: !fluid,
            'container-fluid': fluid,
          })}
        >
          <div className="app-header__content left">
            {showLogo && (
              <Logo
                onClick={onLogoClick}
                size={logoSize}
                variant={logoVariant}
              />
            )}
            {showNavigation && !mobile && (
              <NavBar
                LinkElementType={LinkElementType}
                links={links}
                theme={theme}
              />
            )}
          </div>
          <div className="app-header__content right">
            {showSocialLinks && (
              <SocialNavLinks
                iconInnerPadding={10}
                iconSize={20}
                links={Object.values(socialLinks)}
              />
            )}
            {showNavigation && (navigationStyle === 'menu' || mobile) && (
              <NavMenu
                LinkElementType={LinkElementType}
                links={links}
                logoSize={logoSize}
                logoVariant={logoVariant}
                onLogoClick={onLogoClick}
                showSocialLinks={showSocialLinks}
                socialLinks={socialLinks}
                theme={theme}
              />
            )}
          </div>
        </div>
      )}
    </header>
  );
};

AppHeader.navigationStyle = Object.freeze({
  menu: 'menu',
  bar: 'bar',
});

AppHeader.propTypes = {
  className: PropTypes.string,
  fluid: PropTypes.bool,
  LinkElementType: PropTypes.elementType,
  links: PropTypes.arrayOf(
    PropTypes.shape({
      path: PropTypes.string,
      name: PropTypes.string,
      exact: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
      strict: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
      leftIcon: PropTypes.string,
      rightIcon: PropTypes.string,
    })
  ),
  logoSize: PropTypes.oneOf(Object.values(Logo.size)),
  logoVariant: PropTypes.oneOf(Object.values(Logo.variant)),
  navigationStyle: PropTypes.oneOf(Object.values(AppHeader.navigationStyle)),
  onLogoClick: PropTypes.func,
  showLogo: PropTypes.bool,
  showNavigation: PropTypes.bool,
  showSocialLinks: PropTypes.bool,
  socialLinks: PropTypes.arrayOf(SocialLinkProps),
  sticky: PropTypes.bool,
  theme: PropTypes.string,
  transparent: PropTypes.bool,
};

export default AppHeader;
