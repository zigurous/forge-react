import classNames from 'classnames';
import React, { useEffect, useState } from 'react';
import Button from './Button';
import Link from './Link';
import ReactPortal from './ReactPortal';
import SocialNavLinks from './SocialNavLinks';
import { useModalOverlay } from '../hooks';
import type { LinkTypeWithIcon, SocialLinkType, Theme } from '../types';
import { isPathActive } from '../utils';

export interface NavMenuProps {
  animated?: boolean;
  className?: string;
  hideSocialLinks?: boolean;
  LinkElementType?: React.ElementType;
  links?: LinkTypeWithIcon[];
  location?: Location | null;
  onLinkClick?: (link: LinkTypeWithIcon) => void;
  onSocialLinkClick?: (link: SocialLinkType) => void;
  rootElement?: string;
  socialLinks?: SocialLinkType[];
  theme?: Theme | string;
}

export default function NavMenu({
  animated = false,
  className,
  hideSocialLinks = true,
  LinkElementType = 'a',
  links,
  location = typeof window !== 'undefined' ? window.location : null,
  onLinkClick,
  onSocialLinkClick,
  rootElement = 'body',
  socialLinks,
  theme,
}: NavMenuProps) {
  const [open, setOpen] = useState(false);

  useModalOverlay(open, true);
  useEffect(() => {
    setOpen(false);
  }, [location]);

  return (
    <>
      <Button
        aria-label={open ? 'Close Menu' : 'Open Menu'}
        className="navmenu__button"
        icon={open ? 'close' : 'menu'}
        iconAlignment="only"
        onClick={() => setOpen(!open)}
        size="md"
        style={{ zIndex: open ? 1055 : undefined }}
        variant="unstyled"
      />
      {open && (
        <ReactPortal rootElement={rootElement}>
          <div
            className={classNames(
              'navmenu',
              { 'navmenu--open': open, 'navmenu--closed': !open },
              { 'navmenu--animated': animated },
              className,
            )}
            data-theme={theme}
          >
            <div className="navmenu__overlay" />
            <div className="navmenu__container container">
              <div className="navmenu__wrapper">
                <ul className="navmenu__list">
                  {links &&
                    links.length > 0 &&
                    links.map(link => {
                      const active = isPathActive(link.to, location);
                      return (
                        <li className="navmenu__item" key={link.id || link.to}>
                          <Link
                            activeClassName=""
                            aria-current={active ? 'page' : 'false'}
                            aria-label={link.name}
                            as={link.external ? 'a' : LinkElementType}
                            className={classNames({ active })}
                            external={link.external}
                            onClick={() => {
                              if (onLinkClick) {
                                onLinkClick(link);
                              }
                            }}
                            to={link.to}
                            unstyled
                          >
                            {link.name}
                          </Link>
                        </li>
                      );
                    })}
                </ul>
                {!hideSocialLinks && socialLinks && socialLinks.length > 0 && (
                  <SocialNavLinks
                    foregroundColor="inherit"
                    iconInnerPadding={10}
                    iconSize={20}
                    links={socialLinks}
                    onLinkClick={onSocialLinkClick}
                  />
                )}
              </div>
            </div>
          </div>
        </ReactPortal>
      )}
    </>
  );
}
