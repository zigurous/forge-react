import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Logo from './Logo';
import ReactPortal from './ReactPortal';
import SocialNavLinks from './SocialNavLinks';
import { useModal } from '../hooks';
import { SocialLinkProps } from '../socialLinks';
import '../styles/nav-menu.css';

const NavMenu = ({
  className,
  floating = false,
  location,
  logoSize = Logo.size.medium,
  logoVariant = Logo.variant.wordmark,
  NavLink,
  onLogoClick,
  routes = [],
  showLogo = false,
  showSocialLinks = true,
  socialLinks = [],
  theme = 'light',
}) => {
  const [isOpen, setIsOpen] = useModal(false);

  useEffect(() => {
    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    });
    setIsOpen(false);
  }, [location, setIsOpen]);

  return (
    <React.Fragment>
      {!floating && (
        <button
          className={classNames('nav-menu__button', {
            'z-index-modal': isOpen,
          })}
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
      )}
      <ReactPortal>
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
                  theme={theme}
                  variant={logoVariant}
                />
              )}
            </div>
            {floating && (
              <div className="nav-menu__button-wrapper">
                <button
                  className="nav-menu__button shadow-sm"
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
            )}
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
                      {route.name}
                    </NavLink>
                    <span className="margin-left-md font-xs font-weight-400 text-gray">
                      0{index + 1}.
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            {showSocialLinks && (
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
      </ReactPortal>
    </React.Fragment>
  );
};

NavMenu.propTypes = {
  className: PropTypes.string,
  floating: PropTypes.bool,
  location: PropTypes.shape({
    pathname: PropTypes.string,
    search: PropTypes.string,
  }),
  logoSize: PropTypes.oneOf(Object.values(Logo.size)),
  logoVariant: PropTypes.oneOf(Object.values(Logo.variant)),
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
  showSocialLinks: PropTypes.bool,
  socialLinks: PropTypes.arrayOf(SocialLinkProps),
  theme: PropTypes.string,
};

export default NavMenu;
