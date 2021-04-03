import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import ReactPortal from './ReactPortal';
import SocialNavLinks from './SocialNavLinks';
import { useModal } from '../hooks';
import { SocialLinkProps } from '../socialLinks';
import '../styles/nav-menu.css';

const NavMenu = ({
  animated = false,
  className,
  location,
  NavLink,
  routes = [],
  showSocialLinks = true,
  socialLinks = [],
  theme = 'light',
}) => {
  const [isOpen, setIsOpen] = useModal(false);

  useEffect(() => {
    setTimeout(() => {
      window &&
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        });
    });
    setIsOpen(false);
  }, [location, setIsOpen]);

  return (
    <React.Fragment>
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
      <ReactPortal>
        <div
          className={classNames(
            'nav-menu',
            { 'nav-menu--open': isOpen, 'nav-menu--closed': !isOpen },
            { 'nav-menu--animated': animated },
            className
          )}
          theme={theme}
        >
          <div className="nav-menu__overlay" theme={theme} />
          <div className="nav-menu__container container">
            <div className="nav-menu__content-wrapper">
              <ul className="nav-menu__list">
                {routes.map((route) => (
                  <li className="nav-menu__item" key={route.path}>
                    <NavLink
                      activeClassName="selected"
                      exact={Boolean(route.exact)}
                      strict={Boolean(route.strict)}
                      to={route.path}
                    >
                      {route.name}
                    </NavLink>
                  </li>
                ))}
              </ul>
              {showSocialLinks && (
                <SocialNavLinks
                  foregroundColor="white"
                  iconInnerPadding={10}
                  iconSize={20}
                  links={Object.values(socialLinks)}
                />
              )}
            </div>
          </div>
        </div>
      </ReactPortal>
    </React.Fragment>
  );
};

NavMenu.propTypes = {
  animated: PropTypes.bool,
  className: PropTypes.string,
  location: PropTypes.shape({
    pathname: PropTypes.string,
    search: PropTypes.string,
  }),
  NavLink: PropTypes.elementType.isRequired,
  routes: PropTypes.arrayOf(
    PropTypes.shape({
      path: PropTypes.string.isRequired,
      exact: PropTypes.bool,
      strict: PropTypes.bool,
      component: PropTypes.elementType,
    })
  ),
  showSocialLinks: PropTypes.bool,
  socialLinks: PropTypes.arrayOf(SocialLinkProps),
  theme: PropTypes.string,
};

export default NavMenu;
