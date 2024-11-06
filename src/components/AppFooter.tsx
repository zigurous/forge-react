import classNames from 'classnames';
import React from 'react';
import Link from './Link';
import Logo, { type LogoProps } from './Logo';
import type { LinkType, ThemeToken } from '../types';

export interface AppFooterProps {
  bordered?: boolean;
  className?: string;
  copyright?: React.ReactNode;
  hideCopyright?: boolean;
  hideLogo?: boolean;
  LinkElementType?: React.ElementType;
  links?: LinkType[];
  LogoElementType?: React.ElementType;
  logoProps?: Omit<LogoProps<'a'>, 'as'>;
  onLinkClick?: (link: LinkType) => void;
  sticky?: boolean;
  theme?: ThemeToken;
  transparent?: boolean;
}

export default function AppFooter({
  bordered = false,
  className,
  copyright = (
    <>
      Copyright <span aria-hidden>©</span> {new Date().getFullYear()} All Rights
      Reserved
    </>
  ),
  hideCopyright = false,
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
        {
          'app-footer--bordered': bordered,
          'app-footer--transparent': transparent,
          'app-footer--sticky': sticky,
        },
        className,
      )}
      data-theme={theme}
    >
      <div className="container">
        <div className="row align-center my-lg">
          <div className="col text-xs font-500">
            <span>
              {!hideLogo && (
                <Logo as={LogoElementType} size="xs" {...logoProps} />
              )}
              {!hideCopyright && copyright && (
                <span className="copyright mx-xl">{copyright}</span>
              )}
            </span>
            {links && links.length > 0 && (
              <span className="links">
                {links.map(link => (
                  <Link
                    as={link.external ? 'a' : LinkElementType}
                    className="text-inherit mx-sm"
                    external={link.external}
                    href={link.href}
                    key={link.id || link.name}
                    onClick={() => {
                      if (onLinkClick) {
                        onLinkClick(link);
                      }
                    }}
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
