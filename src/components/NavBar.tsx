import classNames from 'classnames';
import React from 'react';
import Icon from './Icon';
import Link from './Link';
import type { LinkTypeWithIcon } from '../types';
import { isPathActive } from '../utils';

export type NavBarProps = {
  className?: string;
  hidden?: boolean;
  LinkElementType?: React.ElementType;
  links?: LinkTypeWithIcon[];
  location?: Location | null;
  onLinkClick?: (link: LinkTypeWithIcon) => void;
} & React.ComponentProps<'nav'>;

export default function NavBar({
  className,
  hidden = false,
  LinkElementType = 'a',
  links,
  location = typeof window !== 'undefined' ? window.location : null,
  onLinkClick,
  ...rest
}: NavBarProps) {
  return (
    <nav
      className={classNames('navbar', { 'display-none': hidden }, className)}
      {...rest}
    >
      <ul className="navbar__list">
        {links &&
          links.length > 0 &&
          links.map(link => {
            const active = isPathActive(link.to, location);
            const { icon: SVGIcon } = link;
            return (
              <li className="navbar__item" key={link.id || link.to}>
                <Link
                  activeClassName=""
                  aria-current={active ? 'page' : 'false'}
                  aria-label={link.name}
                  as={LinkElementType}
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
                  {link.icon && link.iconAlignment === 'left' && (
                    <Icon
                      className="margin-right-md"
                      material={typeof link.icon === 'string'}
                      size="sm"
                    >
                      {typeof link.icon === 'string'
                        ? link.icon
                        : SVGIcon && <SVGIcon />}
                    </Icon>
                  )}
                  {link.name}
                  {link.icon && link.iconAlignment === 'right' && (
                    <Icon
                      className="margin-left-md"
                      material={typeof link.icon === 'string'}
                      size="sm"
                    >
                      {typeof link.icon === 'string'
                        ? link.icon
                        : SVGIcon && <SVGIcon />}
                    </Icon>
                  )}
                </Link>
              </li>
            );
          })}
      </ul>
    </nav>
  );
}
