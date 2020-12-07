import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Logo, { logoSizes, logoThemes } from './Logo';
import NavBar from './NavBar';
import NavMenu from './NavMenu';
import SocialNavLinks from './SocialNavLinks';
import socialLinks from '../socials';
import '../styles/app-header.css';

const AppHeader = ({
  bordered = false,
  className,
  fullBleed = true,
  location,
  logoSize = 'medium',
  logoVariant = 'emblem',
  navigationStyle = 'menu',
  NavLink,
  onLogoClick = () => {},
  routes = [],
  showLogo = true,
  showNavigation = true,
  showSocials = true,
  sticky = false,
  theme,
  transparent = true,
}) => {
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
          className={classNames('app-header__container', {
            container: !fullBleed,
            'container-fluid': fullBleed,
          })}
        >
          <div className="app-header__content left">
            {showLogo && (
              <Logo
                onClick={onLogoClick}
                size={logoSize}
                theme={logoThemes[theme] || 'primary'}
                variant={logoVariant}
              />
            )}
            {showNavigation && (
              <NavBar location={location} NavLink={NavLink} routes={routes} />
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
      {showNavigation && navigationStyle === 'menu' && (
        <NavMenu
          fullBleed={fullBleed}
          location={location}
          logoSize={logoSize}
          logoVariant={logoVariant}
          NavLink={NavLink}
          onLogoClick={onLogoClick}
          routes={routes}
          showLogo={showLogo}
          showSocials={showSocials}
          theme={theme}
        />
      )}
    </header>
  );
};

AppHeader.propTypes = {
  bordered: PropTypes.bool,
  className: PropTypes.string,
  fullBleed: PropTypes.bool,
  location: PropTypes.shape({
    pathname: PropTypes.string,
    search: PropTypes.string,
  }),
  logoSize: PropTypes.oneOf(logoSizes),
  logoVariant: PropTypes.oneOf(['logo', 'emblem']),
  navigationStyle: PropTypes.oneOf(['menu', 'bar']),
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
  sticky: PropTypes.bool,
  theme: PropTypes.string,
  transparent: PropTypes.bool,
};

export default AppHeader;
