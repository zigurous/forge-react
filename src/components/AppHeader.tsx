import classNames from 'classnames';
import React from 'react';
import Logo, { LogoProps } from './Logo';
import NavBar from './NavBar';
import NavMenu from './NavMenu';
import SocialNavLinks, { SocialNavLinksProps } from './SocialNavLinks';
import type { LinkType, SocialLinkType, Theme } from '../types';

export interface AppHeaderProps {
  bordered?: boolean;
  className?: string;
  fluid?: boolean;
  hideLogo?: boolean;
  hideNavigation?: boolean;
  hideSocialLinks?: boolean;
  LinkElementType?: React.ElementType;
  links?: LinkType[];
  location?: Location | null;
  logoProps?: LogoProps;
  onLinkClick?: (link: LinkType) => void;
  rootElement?: string;
  socialLinks?: SocialLinkType[];
  socialNavLinksProps?: SocialNavLinksProps;
  sticky?: boolean;
  theme?: Theme | string;
  transparent?: boolean;
}

export default function AppHeader({
  bordered = false,
  className,
  fluid = false,
  hideLogo = false,
  hideNavigation = false,
  hideSocialLinks = false,
  LinkElementType = 'a',
  links,
  location = typeof window !== 'undefined' ? window.location : null,
  logoProps,
  onLinkClick,
  rootElement = 'body',
  socialLinks,
  socialNavLinksProps = { iconInnerPadding: 10, iconSize: 20 },
  sticky = false,
  theme,
  transparent = false,
}: AppHeaderProps) {
  return (
    <header
      className={classNames(
        'app-header',
        { 'app-header--bordered': bordered },
        { 'app-header--transparent': transparent },
        { 'app-header--sticky': sticky },
        className,
      )}
      data-theme={theme}
    >
      <div
        className={classNames({
          container: !fluid,
          'container-fluid': fluid,
        })}
      >
        <div className="app-header__content left">
          {!hideLogo && <Logo size="sm" {...logoProps} />}
          {!hideNavigation && (
            <NavBar
              LinkElementType={LinkElementType}
              links={links}
              location={location}
              onLinkClick={onLinkClick}
            />
          )}
        </div>
        <div className="app-header__content right">
          {!hideSocialLinks && socialLinks && socialLinks.length > 0 && (
            <SocialNavLinks links={socialLinks} {...socialNavLinksProps} />
          )}
          {!hideNavigation && (
            <NavMenu
              hideSocialLinks={hideSocialLinks}
              LinkElementType={LinkElementType}
              links={links}
              location={location}
              onLinkClick={onLinkClick}
              rootElement={rootElement}
              socialLinks={socialLinks}
              theme={theme}
            />
          )}
        </div>
      </div>
    </header>
  );
}
