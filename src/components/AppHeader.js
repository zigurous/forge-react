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
  bordered = false,
  className,
  fullBleed = false,
  location,
  logoSize = Logo.size.small,
  logoVariant = Logo.variant.wordmark,
  navigationStyle = 'bar',
  NavLink,
  onLogoClick = () => {},
  routes = [],
  showLogo = true,
  showNavigation = true,
  showSocials = true,
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
        { 'app-header--bordered': bordered },
        { 'app-header--sticky': sticky },
        className
      )}
      theme={theme}
    >
      {navigationStyle === 'bar' && (
        <div
          className={classNames({
            container: !fullBleed,
            'container-fluid': fullBleed,
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
            {showSocials && (
              <SocialNavLinks
                iconInnerPadding={10}
                iconSize={20}
                links={Object.values(socialLinks)}
              />
            )}
          </div>
        </div>
      )}
      {showNavigation && (navigationStyle === 'menu' || mobile) && (
        <NavMenu
          fullBleed={fullBleed}
          location={location}
          logoSize={logoSize}
          logoVariant={logoVariant}
          NavLink={NavLink}
          onLogoClick={onLogoClick}
          routes={routes}
          showLogo={showLogo && navigationStyle === 'menu'}
          showSocials={showSocials}
          socialLinks={socialLinks}
          theme={theme}
        />
      )}
    </header>
  );
};

AppHeader.navigationStyle = Object.freeze({
  menu: 'menu',
  bar: 'bar',
});

AppHeader.propTypes = {
  bordered: PropTypes.bool,
  className: PropTypes.string,
  fullBleed: PropTypes.bool,
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
  showSocials: PropTypes.bool,
  socialLinks: PropTypes.arrayOf(SocialLinkProps),
  sticky: PropTypes.bool,
  theme: PropTypes.string,
  transparent: PropTypes.bool,
};

export default AppHeader;
