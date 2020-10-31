import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import SocialIcon from './SocialIcon';
import { SocialProps } from '../socials';
import '../styles/social-nav-links.css';

const SocialNavLinks = ({
  backgroundColor,
  className,
  foregroundColor,
  iconInnerPadding = 16,
  iconSize = 32,
  iconSpacing,
  links = [],
}) => (
  <div className={classNames('social-nav-links', className)}>
    <ul className="social-nav-links__list">
      {links.map((link) => (
        <li
          className="social-nav-links__item"
          key={typeof link === 'string' ? link : link.key}
          style={{ margin: iconSpacing }}
        >
          <SocialIcon
            backgroundColor={backgroundColor}
            foregroundColor={foregroundColor}
            innerPadding={iconInnerPadding}
            link={link}
            size={iconSize}
          />
        </li>
      ))}
    </ul>
  </div>
);

SocialNavLinks.propTypes = {
  backgroundColor: PropTypes.string,
  className: PropTypes.string,
  foregroundColor: PropTypes.string,
  iconInnerPadding: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  iconSize: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  iconSpacing: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  links: PropTypes.arrayOf(SocialProps),
};

export default SocialNavLinks;
