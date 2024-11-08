import classNames from 'classnames';
import React from 'react';
import Icon from './Icon';
import Link from './Link';
import type { LinkTypeWithIcon } from '../types';
import { isPathActive } from '../utils';

export type NavBarProps = {
  className?: string;
  LinkElementType?: React.ElementType;
  links?: LinkTypeWithIcon[];
  location?: Location | null;
  onLinkClick?: (link: LinkTypeWithIcon) => void;
} & React.ComponentProps<'nav'>;

export default function NavBar({
  className,
  LinkElementType = 'a',
  links,
  location = typeof window !== 'undefined' ? window.location : null,
  onLinkClick,
  ...rest
}: NavBarProps) {
  return (
    <nav className={classNames('navbar', className)} {...rest}>
      <ul className="navbar__list">
        {links &&
          links.length > 0 &&
          links.map(link => {
            const active = isPathActive(link.href, location);
            const iconAlignment = link.iconAlignment || 'leading';
            return (
              <li className="navbar__item" key={link.id || link.name}>
                <Link
                  aria-current={active ? 'page' : 'false'}
                  aria-label={link.name}
                  as={link.external ? 'a' : LinkElementType}
                  className={classNames('btn btn--text', {
                    'btn--primary': active,
                    [`btn--icon-${iconAlignment}`]: link.icon && iconAlignment,
                    active: active,
                  })}
                  external={link.external}
                  href={link.href}
                  onClick={() => {
                    if (onLinkClick) {
                      onLinkClick(link);
                    }
                  }}
                  unstyled
                >
                  {link.icon && iconAlignment === 'leading' && (
                    <span aria-hidden className="icon-wrapper">
                      <Icon icon={link.icon} size="sm" />
                    </span>
                  )}
                  {link.name}
                  {link.icon && iconAlignment === 'trailing' && (
                    <span aria-hidden className="icon-wrapper">
                      <Icon icon={link.icon} size="sm" />
                    </span>
                  )}
                </Link>
              </li>
            );
          })}
      </ul>
    </nav>
  );
}
