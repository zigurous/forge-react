import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Icon from './Icon';
import Link from './Link';
import '../styles/nav-bar.css';

const NavBar = ({ className, LinkElementType = 'a', routes = [] }) => (
  <nav className={classNames('nav-bar', className)}>
    <ul className="nav-bar__list">
      {routes.map((route) => (
        <li className="nav-bar__item" key={route.path}>
          <Link
            activeClassName="selected"
            aria-label={route.name}
            ElementType={LinkElementType}
            exact={Boolean(route.exact)}
            strict={Boolean(route.strict)}
            to={route.path}
            unstyled
          >
            {route.leftIcon && (
              <Icon
                className="margin-right-md"
                name={route.leftIcon}
                size="small"
              />
            )}
            {route.name}
            {route.rightIcon && (
              <Icon
                className="margin-left-md"
                name={route.rightIcon}
                size="small"
              />
            )}
          </Link>
        </li>
      ))}
    </ul>
  </nav>
);

NavBar.propTypes = {
  className: PropTypes.string,
  LinkElementType: PropTypes.elementType,
  routes: PropTypes.arrayOf(
    PropTypes.shape({
      path: PropTypes.string,
      exact: PropTypes.bool,
      strict: PropTypes.bool,
      component: PropTypes.elementType,
      leftIcon: PropTypes.string,
      rightIcon: PropTypes.string,
    })
  ),
};

export default NavBar;
