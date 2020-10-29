import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Logo, { logoThemes } from './Logo';
import Modal from './Modal';
import SocialNavLinks from './SocialNavLinks';
import socialLinks from '../socials';
import closeIcon from '../images/icons/close-white.svg';
import menuIcon from '../images/icons/menu-white.svg';
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
                src={isOpen ? closeIcon : menuIcon}
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
  logoSize: PropTypes.oneOf(['small', 'medium', 'large']),
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
