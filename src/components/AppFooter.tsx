import classNames from 'classnames';
import React from 'react';
import Link from './Link';
import Logo, { LogoProps } from './Logo';
import type { LinkType, Theme } from '../types';

export interface AppFooterProps {
  bordered?: boolean;
  className?: string;
  copyright?: React.ReactNode;
  hideLogo?: boolean;
  LinkElementType?: React.ElementType;
  links?: LinkType[];
  LogoElementType?: React.ElementType;
  logoProps?: Omit<LogoProps, 'as'>;
  onLinkClick?: (link: LinkType) => void;
  sticky?: boolean;
  theme?: Theme | string;
  transparent?: boolean;
}

export default function AppFooter({
  bordered = false,
  className,
  copyright,
  hideLogo = false,
  LinkElementType = 'a',
  links,
  LogoElementType = 'a',
  logoProps,
  onLinkClick,
  sticky = false,
  theme,
  transparent = false,
}: AppFooterProps) {
  return (
    <footer
      className={classNames(
        'app-footer',
        { 'app-footer--bordered': bordered },
        { 'app-footer--transparent': transparent },
        { 'app-footer--sticky': sticky },
        className,
      )}
      data-theme={theme}
    >
      <div className="container">
        <div className="row align-items-center margin-top-lg margin-bottom-lg">
          <div className="col font-xs font-weight-500">
            <span>
              {!hideLogo && (
                <Logo as={LogoElementType} size="xs" {...logoProps} />
              )}
              {copyright && (
                <span className="copyright margin-left-xl margin-right-xl">
                  {copyright}
                </span>
              )}
            </span>
            {links && links.length > 0 && (
              <span className="links">
                {links.map(link => (
                  <Link
                    aria-label={link.name}
                    as={LinkElementType}
                    className="color-inherit margin-left-md margin-right-md"
                    external={link.external}
                    key={link.id || link.to}
                    onClick={() => {
                      if (onLinkClick) {
                        onLinkClick(link);
                      }
                    }}
                    to={link.to}
                  >
                    {link.name}
                  </Link>
                ))}
              </span>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}
