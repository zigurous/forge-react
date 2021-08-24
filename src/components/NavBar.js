import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import Icon from './Icon';
import Link from './Link';
import { isPathActive } from '../utils/location';
import omit from '../utils/omit';

const NavBar = ({
  className,
  hidden = false,
  LinkElementType = 'a',
  links = [],
  location = typeof window !== 'undefined' && window.location,
  onLinkClick,
}) => {
  return (
    <nav
      className={classNames('navbar', { 'display-none': hidden }, className)}
    >
      <ul>
        {links.map((link) => {
          const key = link.to || link.path || link.href;
          const active = isPathActive(key, location);
          return (
            <li key={key}>
              <Link
                {...omit(link, ['leftIcon', 'rightIcon'])}
                activeClassName=""
                aria-current={active ? 'page' : 'false'}
                aria-label={link.name}
                className={classNames({ active })}
                ElementType={link.ElementType || LinkElementType}
                onClick={() => {
                  if (onLinkClick) {
                    onLinkClick(link);
                  }
                }}
              >
                {link.leftIcon && (
                  <Icon
                    className="margin-right-md"
                    name={link.leftIcon}
                    size="small"
                  />
                )}
                {link.name}
                {link.rightIcon && (
                  <Icon
                    className="margin-left-md"
                    name={link.rightIcon}
                    size="small"
                  />
                )}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

NavBar.propTypes = {
  className: PropTypes.string,
  hidden: PropTypes.bool,
  LinkElementType: PropTypes.elementType,
  links: PropTypes.arrayOf(PropTypes.shape(Link.propTypes)),
  location: PropTypes.object,
  onLinkClick: PropTypes.func,
};

export default NavBar;
