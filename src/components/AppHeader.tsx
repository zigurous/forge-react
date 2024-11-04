import classNames from 'classnames';
import React, { useState } from 'react';
import Button from './Button';
import Logo, { type LogoProps } from './Logo';
import NavBar from './NavBar';
import NavMenu from './NavMenu';
import SocialIcons, { type SocialIconsProps } from './SocialIcons';
import { useBreakpoint } from '../hooks';
import type { LinkTypeWithIcon, SocialLinkType, ThemeToken } from '../types';

export interface AppHeaderProps {
  bordered?: boolean;
  className?: string;
  fluid?: boolean;
  hideLogo?: boolean;
  hideNavigation?: boolean;
  hideSocialLinks?: boolean;
  LinkElementType?: React.ElementType;
  links?: LinkTypeWithIcon[];
  location?: Location | null;
  LogoElementType?: React.ElementType;
  logoProps?: Omit<LogoProps<'a'>, 'as'>;
  onLinkClick?: (link: LinkTypeWithIcon) => void;
  rootElement?: string;
  socialIconsProps?: SocialIconsProps;
  socialLinks?: SocialLinkType[];
  sticky?: boolean;
  theme?: ThemeToken;
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
  LogoElementType = 'a',
  logoProps,
  onLinkClick,
  rootElement = 'body',
  socialIconsProps,
  socialLinks,
  sticky = false,
  theme,
  transparent = false,
}: AppHeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const xl = useBreakpoint('xl');
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
          {!hideLogo && <Logo as={LogoElementType} size="sm" {...logoProps} />}
          {!hideNavigation && (
            <NavBar
              className={classNames({ hidden: !xl })}
              LinkElementType={LinkElementType}
              links={links}
              location={location}
              onLinkClick={onLinkClick}
            />
          )}
        </div>
        <div className="app-header__content right">
          {!hideSocialLinks && socialLinks && socialLinks.length > 0 && (
            <SocialIcons
              className={classNames({ hidden: !xl })}
              links={socialLinks}
              {...socialIconsProps}
            />
          )}
          {!hideNavigation && (
            <>
              <Button
                aria-label={isMenuOpen ? 'Close Menu' : 'Open Menu'}
                className={classNames('app-header__menu-button', {
                  hidden: xl && !isMenuOpen,
                })}
                icon={isMenuOpen ? 'close' : 'menu'}
                iconAlignment="only"
                iconProps={{ size: 'md' }}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                size="lg"
                variant="text"
              />
              <NavMenu
                hideSocialLinks={hideSocialLinks}
                LinkElementType={LinkElementType}
                links={links}
                location={location}
                onLinkClick={link => {
                  setIsMenuOpen(false);
                  if (onLinkClick) {
                    onLinkClick(link);
                  }
                }}
                open={isMenuOpen}
                rootElement={rootElement}
                socialLinks={socialLinks}
                theme={theme}
              />
            </>
          )}
        </div>
      </div>
    </header>
  );
}
