import classNames from 'classnames';
import React from 'react';
import Icon, { type IconProps } from './Icon';
import { socialLinks } from '../links';
import type { PaddingToken, SocialLinkType } from '../types';

export interface SocialIconsProps {
  className?: string;
  hidden?: boolean;
  iconPadding?: PaddingToken | number | string;
  iconProps?: IconProps<'a'>;
  iconSize?: 'inherit' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | string | number;
  links?: SocialLinkType[];
  onLinkClick?: (link: SocialLinkType) => void;
  spacing?: number | string;
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
      <ul className={classNames({ 'flex-wrap': wrap })}>
        {links &&
          links.length > 0 &&
          links.map(link => {
            const socialLink =
              typeof link === 'string' ? socialLinks[link] : link;
            return (
              <li
                key={socialLink.id || socialLink.name}
                style={{ margin: spacing }}
              >
                <Icon
                  aria-label={socialLink.name}
                  as="a"
                  color={socialLink.color}
                  href={socialLink.to}
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
