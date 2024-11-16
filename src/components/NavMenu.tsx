import classNames from 'classnames';
import React from 'react';
import Button from './Button';
import Link from './Link';
import ReactPortal from './ReactPortal';
import SocialIcons, { type SocialIconsProps } from './SocialIcons';
import { useBodyOverflow } from '../hooks';
import type { LinkTypeWithIcon, SocialLinkType, ThemeToken } from '../types';
import { isPathActive } from '../utils';

export interface NavMenuProps {
  alignment?: 'left' | 'right' | 'center';
  animated?: boolean;
  className?: string;
  hideCloseButton?: boolean;
  hideSocialIcons?: boolean;
  LinkElementType?: React.ElementType;
  links?: LinkTypeWithIcon[];
  location?: Location | null;
  onLinkClick?: (link: LinkTypeWithIcon) => void;
  onRequestClose?: () => void;
  onSocialLinkClick?: (link: SocialLinkType) => void;
  open?: boolean;
  rootElement?: string;
  socialIconsProps?: SocialIconsProps;
  socialLinks?: SocialLinkType[];
  theme?: ThemeToken;
}

export default function NavMenu({
  animated = true,
  alignment = 'center',
  className,
  hideCloseButton = false,
  hideSocialIcons = false,
  LinkElementType = 'a',
  links,
  location = typeof window !== 'undefined' ? window.location : null,
  onLinkClick,
  onRequestClose,
  onSocialLinkClick,
  open = false,
  rootElement = 'body',
  socialIconsProps,
  socialLinks,
  theme,
}: NavMenuProps) {
  useBodyOverflow(open, true);
  if (!open) null;
  return (
    <ReactPortal rootElement={rootElement}>
      <div
        className={classNames(
          'navmenu',
          {
            'navmenu--open': open,
            'navmenu--closed': !open,
            'navmenu--animated': animated,
          },
          className,
        )}
        data-theme={theme}
      >
        <div className="navmenu__overlay" />
        <div
          className={classNames('navmenu__container', {
            'align-start': alignment === 'left',
            'align-center': alignment === 'center',
            'align-end': alignment === 'right',
          })}
        >
          <div />
          <ul
            className={classNames('navmenu__list', {
              [`text-${alignment}`]: alignment,
            })}
          >
            {links &&
              links.length > 0 &&
              links.map(link => {
                const active = isPathActive(link.href, location);
                return (
                  <li className="navmenu__item" key={link.id || link.name}>
                    <Link
                      aria-current={active ? 'page' : 'false'}
                      aria-label={link.name}
                      as={link.external ? 'a' : LinkElementType}
                      className={classNames({ active })}
                      external={link.external}
                      href={link.href}
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
          {!hideSocialIcons && socialLinks && socialLinks.length > 0 ? (
            <SocialIcons
              className="navmenu__socials"
              iconProps={{ color: 'inherit' }}
              iconSize="sm"
              links={socialLinks}
              onLinkClick={onSocialLinkClick}
              {...socialIconsProps}
            />
          ) : (
            <div />
          )}
          {!hideCloseButton && (
            <Button
              aria-label="Close Menu"
              className="navmenu__close"
              icon="close"
              iconAlignment="only"
              iconProps={{ size: 'md' }}
              onClick={onRequestClose}
              size="xl"
              variant="text"
            />
          )}
        </div>
      </div>
    </ReactPortal>
  );
}
