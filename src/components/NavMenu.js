import classNames from 'classnames';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import Icon from './Icon';
import Link from './Link';
import ReactPortal from './ReactPortal';
import SocialNavLinks from './SocialNavLinks';
import { useModalOverlay } from '../hooks';
import { SocialLinkProps } from '../socialLinks';
import { isPathActive, omit } from '../utils';

function NavMenu({
  animated = false,
  className,
  hideSocialLinks = true,
  LinkElementType = 'a',
  links = [],
  location = typeof window !== 'undefined' && window.location,
  onLinkClick,
  rootElement,
  socialLinks = [],
  theme,
}) {
  const [open, setOpen] = useState(false);

  useModalOverlay(open, true);

  useEffect(() => {
    setOpen(false);
  }, [location]);

  return (
    <React.Fragment>
      <button
        aria-label={open ? 'Close' : 'Open'}
        className={classNames('navmenu__button', { 'z-index-modal': open })}
        onClick={() => setOpen(!open)}
        size="small"
      >
        <Icon name={open ? 'close' : 'menu'} material />
      </button>
      {open && (
        <ReactPortal rootElement={rootElement}>
          <div
            className={classNames(
              'navmenu',
              { 'navmenu--open': open, 'navmenu--closed': !open },
              { 'navmenu--animated': animated },
              className
            )}
            data-theme={theme}
          >
            <div className="navmenu__overlay" />
            <div className="navmenu__container container">
              <div className="navmenu__wrapper">
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
                    foregroundColor="inherit"
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
}

NavMenu.propTypes = {
  animated: PropTypes.bool,
  className: PropTypes.string,
  hideSocialLinks: PropTypes.bool,
  LinkElementType: PropTypes.elementType,
  links: PropTypes.arrayOf(PropTypes.shape(Link.propTypes)),
  location: PropTypes.object,
  onLinkClick: PropTypes.func,
  rootElement: PropTypes.string,
  socialLinks: PropTypes.arrayOf(SocialLinkProps),
  theme: PropTypes.string,
};

export default NavMenu;
