import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import Icon from './Icon';
import Link from './Link';
import { isPathActive } from '../utils/location';
import '../styles/nav-bar.css';

const NavBar = ({
  className,
  LinkElementType = 'a',
  links = [],
  location = typeof window !== 'undefined' && window.location,
}) => {
  return (
    <nav className={classNames('nav-bar', className)}>
      <ul className="nav-bar__list">
        {links.map((link) => {
          const active = isPathActive(link.path, location);
          return (
            <li className="nav-bar__item" key={link.path}>
              <Link
                activeClassName=""
                aria-current={active ? 'page' : 'false'}
                aria-label={link.name}
                className={classNames({ active })}
                ElementType={LinkElementType}
                exact={link.exact}
                strict={link.strict}
                to={link.path}
                unstyled
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
  LinkElementType: PropTypes.elementType,
  links: PropTypes.arrayOf(
    PropTypes.shape({
      path: PropTypes.string,
      name: PropTypes.string,
      exact: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
      strict: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
      leftIcon: PropTypes.string,
      rightIcon: PropTypes.string,
    })
  ),
  location: PropTypes.shape({
    pathname: PropTypes.string,
  }),
};

export default NavBar;
