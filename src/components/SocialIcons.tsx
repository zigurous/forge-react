import classNames from 'classnames';
import React from 'react';
import Icon, { type IconProps } from './Icon';
import { socialLinks } from '../links';
import type { MarginToken, PaddingToken, SocialLinkType } from '../types';

export interface SocialIconsProps {
  className?: string;
  hidden?: boolean;
  iconPadding?: PaddingToken | number | string;
  iconProps?: IconProps<'a'>;
  iconSize?: 'inherit' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | string | number;
  links?: SocialLinkType[];
  onLinkClick?: (link: SocialLinkType) => void;
  spacing?: Omit<MarginToken, 'auto'>;
  wrap?: boolean;
}

export default function SocialIcons({
  className,
  hidden = false,
  iconPadding = '0.625rem',
  iconProps,
  iconSize = '1.25rem',
  links,
  onLinkClick,
  spacing,
  wrap = false,
}: SocialIconsProps) {
  return (
    <div className={classNames('social-icons', { hidden: hidden }, className)}>
      <ul
        className={classNames({
          'flex-wrap': wrap,
          [`space-x-${spacing}`]: spacing,
        })}
      >
        {links &&
          links.length > 0 &&
          links.map(link => {
            const socialLink =
              typeof link === 'string' ? socialLinks[link] : link;
            return (
              <li key={socialLink.id || socialLink.name}>
                <Icon
                  aria-label={socialLink.name}
                  as="a"
                  color={socialLink.color}
                  href={socialLink.href}
                  icon={socialLink.icon}
                  onClick={() => {
                    if (onLinkClick) {
                      onLinkClick(socialLink);
                    }
                  }}
                  padding={iconPadding}
                  rel="noopener noreferrer"
                  size={iconSize}
                  target="_blank"
                  type="social"
                  {...iconProps}
                />
              </li>
            );
          })}
      </ul>
    </div>
  );
}
