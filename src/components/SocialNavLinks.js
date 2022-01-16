import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import SocialIcon from './SocialIcon';
import socialLinks, { SocialLinkProps } from '../socialLinks';
import '../styles/social-nav-links.css';

function SocialNavLinks({
  backgroundColor,
  className,
  foregroundColor,
  hidden = false,
  iconInnerPadding = 16,
  iconSize = 32,
  iconSpacing,
  links = [],
  onLinkClick,
  rounded = false,
  wrap = false,
}) {
  return (
    <div
      className={classNames(
        'social-nav-links',
        { 'display-none': hidden },
        className
      )}
    >
      <ul
        className={classNames('social-nav-links__list', { 'flex-wrap': wrap })}
      >
        {links.map((link) => {
          const socialLink =
            typeof link === 'string' ? socialLinks[link] : link;
          return (
            <li
              className="social-nav-links__item"
              key={socialLink.key}
              style={{ margin: iconSpacing }}
            >
              <SocialIcon
                aria-label={socialLink.name}
                backgroundColor={backgroundColor}
                ElementType="a"
                foregroundColor={foregroundColor || socialLink.color}
                href={socialLink.url}
                icon={socialLink.icon}
                iconName={socialLink.key}
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

SocialNavLinks.propTypes = {
  backgroundColor: PropTypes.string,
  className: PropTypes.string,
  foregroundColor: PropTypes.string,
  hidden: PropTypes.bool,
  iconInnerPadding: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  iconSize: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  iconSpacing: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  links: PropTypes.arrayOf(SocialLinkProps),
  onLinkClick: PropTypes.func,
  rounded: PropTypes.bool,
  wrap: PropTypes.bool,
};

export default SocialNavLinks;
