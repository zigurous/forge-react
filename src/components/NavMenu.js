import classNames from 'classnames';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import Icon from './Icon';
import Link from './Link';
import ReactPortal from './ReactPortal';
import SocialNavLinks from './SocialNavLinks';
import { useModalOverlay } from '../hooks';
import { SocialLinkProps } from '../socialLinks';
import { isPathActive } from '../utils/location';
import omit from '../utils/omit';
import '../styles/navmenu.css';

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
        aria-label={isOpen ? 'Close' : 'Open'}
        className={classNames(
          'navmenu__button',
          { 'z-index-modal': isOpen },
          { 'display-none': hidden }
        )}
        onClick={() => setIsOpen(!isOpen)}
        size="small"
      >
        <Icon name={isOpen ? 'close' : 'menu'} material />
      </button>
      {isOpen && (
        <ReactPortal rootElement={portalRootElement}>
          <div
            className={classNames(
              'navmenu',
              { 'navmenu--open': isOpen, 'navmenu--closed': !isOpen },
              { 'navmenu--animated': animated },
              className
            )}
            data-theme={theme}
          >
            <div className="navmenu__overlay" data-theme={theme} />
            <div className="navmenu__container container">
              <div className="navmenu__content-wrapper">
                <ul className="navmenu__list">
                  {links.map((link) => {
                    const key = link.to || link.path || link.href;
                    const active = isPathActive(key, location);
                    return (
                      <li className="navmenu__item" key={key}>
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
