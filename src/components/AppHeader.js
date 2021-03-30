import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Logo from './Logo';
import NavBar from './NavBar';
import NavMenu from './NavMenu';
import SocialNavLinks from './SocialNavLinks';
import { SocialLinkProps } from '../socialLinks';
import { useMediaQuery } from '../hooks';
import '../styles/app-header.css';

const AppHeader = ({
  className,
  floatingNavMenu = false,
  fluid = false,
  location,
  logoSize = Logo.size.small,
  logoVariant = Logo.variant.wordmark,
  navigationStyle = 'bar',
  NavLink,
  onLogoClick = () => {},
  routes = [],
  showLogo = true,
  showNavigation = true,
  showSocialLinks = true,
  socialLinks = [],
  sticky = false,
  theme,
  transparent = false,
}) => {
  const mobile = useMediaQuery('(max-width: 991px)');
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
                location={location}
                NavLink={NavLink}
                routes={routes}
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
                floating={floatingNavMenu}
                location={location}
                logoSize={logoSize}
                logoVariant={logoVariant}
                NavLink={NavLink}
                onLogoClick={onLogoClick}
                routes={routes}
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
  floatingNavMenu: PropTypes.bool,
  fluid: PropTypes.bool,
  location: PropTypes.shape({
    pathname: PropTypes.string,
    search: PropTypes.string,
  }),
  logoSize: PropTypes.oneOf(Object.values(Logo.size)),
  logoVariant: PropTypes.oneOf(Object.values(Logo.variant)),
  navigationStyle: PropTypes.oneOf(Object.values(AppHeader.navigationStyle)),
  NavLink: PropTypes.elementType,
  onLogoClick: PropTypes.func,
  routes: PropTypes.arrayOf(
    PropTypes.shape({
      path: PropTypes.string.isRequired,
      exact: PropTypes.bool,
      strict: PropTypes.bool,
      component: PropTypes.elementType,
    })
  ),
  showLogo: PropTypes.bool,
  showNavigation: PropTypes.bool,
  showSocialLinks: PropTypes.bool,
  socialLinks: PropTypes.arrayOf(SocialLinkProps),
  sticky: PropTypes.bool,
  theme: PropTypes.string,
  transparent: PropTypes.bool,
};

export default AppHeader;
