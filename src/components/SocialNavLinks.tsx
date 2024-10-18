import classNames from 'classnames';
import React from 'react';
import SocialIcon from './SocialIcon';
import { socialLinks } from '../links';
import type { SocialLinkType } from '../types';

export interface SocialNavLinksProps {
  backgroundColor?: string;
  className?: string;
  foregroundColor?: string;
  hidden?: boolean;
  iconInnerPadding?: number | string;
  iconSize?: number | string;
  iconSpacing?: number | string;
  links?: SocialLinkType[];
  onLinkClick?: (link: SocialLinkType) => void;
  rounded?: boolean;
  wrap?: boolean;
}

export default function SocialNavLinks({
  backgroundColor,
  className,
  foregroundColor,
  hidden = false,
  iconInnerPadding = 12,
  iconSize = 24,
  iconSpacing,
  links,
  onLinkClick,
  rounded = false,
  wrap = false,
}: SocialNavLinksProps) {
  return (
    <div
      className={classNames(
        'social-nav-links',
        { 'display-none': hidden },
        className,
      )}
    >
      <ul
        className={classNames('social-nav-links__list', { 'flex-wrap': wrap })}
      >
        {links &&
          links.length > 0 &&
          links.map(link => {
            const socialLink =
              typeof link === 'string' ? socialLinks[link] : link;
            return (
              <li
                className="social-nav-links__item"
                key={socialLink.id || socialLink.name}
                style={{ margin: iconSpacing }}
              >
                <SocialIcon
                  aria-label={socialLink.name}
                  as="a"
                  backgroundColor={backgroundColor}
                  foregroundColor={foregroundColor || socialLink.color}
                  href={socialLink.to}
                  icon={socialLink.icon}
                  innerPadding={iconInnerPadding}
                  onClick={() => {
                    if (onLinkClick) {
                      onLinkClick(socialLink);
                    }
                  }}
                  rel="noopener noreferrer"
                  rounded={rounded}
                  size={iconSize}
                  target="_blank"
                />
              </li>
            );
          })}
      </ul>
    </div>
  );
}
