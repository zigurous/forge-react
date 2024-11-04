import classNames from 'classnames';
import React from 'react';
import Link from './Link';
import ReactPortal from './ReactPortal';
import SocialIcons, { type SocialIconsProps } from './SocialIcons';
import { useModalOverlay } from '../hooks';
import type { LinkTypeWithIcon, SocialLinkType, ThemeToken } from '../types';
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
  open?: boolean;
  rootElement?: string;
  socialIconsProps?: SocialIconsProps;
  socialLinks?: SocialLinkType[];
  theme?: ThemeToken;
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
  open = false,
  rootElement = 'body',
  socialIconsProps,
  socialLinks,
  theme,
}: NavMenuProps) {
  useModalOverlay(open, true);
  if (!open) null;
  return (
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
              <SocialIcons
                iconProps={{ color: 'inherit' }}
                links={socialLinks}
                onLinkClick={onSocialLinkClick}
                {...socialIconsProps}
              />
            )}
          </div>
        </div>
      </div>
    </ReactPortal>
  );
}
