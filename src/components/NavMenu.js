import classNames from 'classnames';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import Link from './Link';
import ReactPortal from './ReactPortal';
import SocialNavLinks from './SocialNavLinks';
import { useModalOverlay } from '../hooks';
import { SocialLinkProps } from '../socialLinks';
import { isPathActive } from '../utils/location';
import omit from '../utils/omit';
import '../styles/nav-menu.css';

const NavMenu = ({
  animated = false,
  className,
  hidden = false,
  hideSocialLinks = true,
  LinkElementType = 'a',
  links = [],
  location = typeof window !== 'undefined' && window.location,
  onLinkClick,
  portalRootElement,
  socialLinks = [],
  theme = 'light',
}) => {
  const [isOpen, setIsOpen] = useState(false);

  useModalOverlay(isOpen);
  useEffect(() => {
    setIsOpen(false);
    setTimeout(() => {
      if (typeof window !== 'undefined') {
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        });
      }
    });
  }, [location, setIsOpen]);

  return (
    <React.Fragment>
      <button
        className={classNames(
          'nav-menu__button',
          { 'z-index-modal': isOpen },
          { 'display-none': hidden }
        )}
        onClick={() => setIsOpen(!isOpen)}
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
      {isOpen && (
        <ReactPortal rootElement={portalRootElement}>
          <div
            className={classNames(
              'nav-menu',
              { 'nav-menu--open': isOpen, 'nav-menu--closed': !isOpen },
              { 'nav-menu--animated': animated },
              className
            )}
            data-theme={theme}
          >
            <div className="nav-menu__overlay" data-theme={theme} />
            <div className="nav-menu__container container">
              <div className="nav-menu__content-wrapper">
                <ul className="nav-menu__list">
                  {links.map((link) => {
                    const key = link.to || link.path || link.href;
                    const active = isPathActive(key, location);
                    return (
                      <li className="nav-menu__item" key={key}>
                        <Link
                          {...omit(link, ['leftIcon', 'rightIcon'])}
                          activeClassName=""
                          aria-current={active ? 'page' : 'false'}
                          aria-label={link.name}
                          className={classNames({ active })}
                          ElementType={link.ElementType || LinkElementType}
                          onClick={() => {
                            if (onLinkClick) {
                              onLinkClick(link);
                            }
                          }}
                          unstyled
                        >
                          {link.name}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
                {!hideSocialLinks && (
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
      )}
    </React.Fragment>
  );
};

NavMenu.propTypes = {
  animated: PropTypes.bool,
  className: PropTypes.string,
  hidden: PropTypes.bool,
  hideSocialLinks: PropTypes.bool,
  LinkElementType: PropTypes.elementType,
  links: PropTypes.arrayOf(PropTypes.shape(Link.propTypes)),
  location: PropTypes.shape({
    pathname: PropTypes.string,
  }),
  onLinkClick: PropTypes.func,
  portalRootElement: PropTypes.string,
  socialLinks: PropTypes.arrayOf(SocialLinkProps),
  theme: PropTypes.string,
};

export default NavMenu;
