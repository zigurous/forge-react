import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Logo, { logoSizes, logoThemes } from './Logo';
import Modal from './Modal';
import SocialNavLinks from './SocialNavLinks';
import socialLinks from '../socials';
import '../styles/nav-menu.css';

const NavMenu = ({
  className,
  location,
  logoSize = 'medium',
  logoVariant = 'logo',
  NavLink,
  onLogoClick,
  routes = [],
  showLogo = false,
  showSocials = true,
  theme = 'dark',
}) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    });
    setIsOpen(false);
  }, [location]);

  return (
    <Modal isOpen={isOpen}>
      <div
        className={classNames(
          'nav-menu',
          { 'nav-menu--open': isOpen, 'nav-menu--closed': !isOpen },
          className
        )}
        theme={theme}
      >
        <div className="nav-menu__overlay" theme={theme} />
        <div className="nav-menu__container">
          <div className="nav-menu__logo-wrapper">
            {showLogo && (
              <Logo
                onClick={onLogoClick}
                size={logoSize}
                theme={logoThemes[theme] || 'primary'}
                variant={logoVariant}
              />
            )}
          </div>
          <div className="nav-menu__button-wrapper">
            <button
              className="nav-menu__button"
              onClick={() => {
                setIsOpen(!isOpen);
              }}
              size="small"
            >
              <img
                alt={isOpen ? 'Close Menu' : 'Open Menu'}
                src={
                  isOpen
                    ? "data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='white' width='36px' height='36px' %3e%3cpath d='M0 0h24v24H0z' fill='none' /%3e%3cpath d='M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z' /%3e%3c/svg%3e"
                    : "data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='white' width='36px' height='36px' %3e%3cpath d='M0 0h24v24H0z' fill='none' /%3e%3cpath d='M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z' /%3e%3c/svg%3e"
                }
              />
            </button>
          </div>
          <div className="nav-menu__list-wrapper">
            <ul className="nav-menu__list">
              {routes.map((route, index) => (
                <li className="nav-menu__item" key={route.path}>
                  <NavLink
                    activeClassName="selected"
                    exact={Boolean(route.exact)}
                    strict={Boolean(route.strict)}
                    to={route.path}
                  >
                    <b>{route.name}</b>
                  </NavLink>
                  <span className="margin-left-md body-xs gray">
                    0{index + 1}.
                  </span>
                </li>
              ))}
            </ul>
          </div>
          {showSocials && (
            <div className="nav-menu__social-wrapper">
              <SocialNavLinks
                iconInnerPadding={10}
                iconSize={20}
                links={Object.values(socialLinks)}
              />
            </div>
          )}
        </div>
      </div>
    </Modal>
  );
};

NavMenu.propTypes = {
  className: PropTypes.string,
  location: PropTypes.shape({
    pathname: PropTypes.string,
    search: PropTypes.string,
  }),
  logoSize: PropTypes.oneOf(logoSizes),
  logoVariant: PropTypes.oneOf(['logo', 'emblem']),
  NavLink: PropTypes.elementType.isRequired,
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
  showSocials: PropTypes.bool,
  theme: PropTypes.string,
};

export default NavMenu;
