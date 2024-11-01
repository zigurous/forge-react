import classNames from 'classnames';
import React from 'react';
import Icon, { type IconProps } from './Icon';
import { socialLinks } from '../links';
import type { SocialLinkType } from '../types';

export interface SocialIconsProps {
  className?: string;
  hidden?: boolean;
  iconProps?: IconProps<'a'>;
  links?: SocialLinkType[];
  onLinkClick?: (link: SocialLinkType) => void;
  spacing?: number | string;
  wrap?: boolean;
}

export default function SocialIcons({
  className,
  hidden = false,
  iconProps,
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
                  rel="noopener noreferrer"
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
