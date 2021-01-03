import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Icon from './Icon';
import '../styles/nav-bar.css';

const NavBar = ({ className, NavLink, routes = [], theme }) => (
  <nav className={classNames('nav-bar', className)}>
    <ul className="nav-bar__list">
      {routes.map((route) => (
        <li className="nav-bar__item" key={route.path}>
          <NavLink
            activeClassName="selected"
            aria-label={route.name}
            exact={Boolean(route.exact)}
            strict={Boolean(route.strict)}
            to={route.path}
          >
            {route.leftIcon && (
              <Icon
                className="margin-right-md"
                name={route.leftIcon}
                size="small"
                theme={theme === 'dark' ? 'light' : 'dark'}
              />
            )}
            {route.name}
            {route.rightIcon && (
              <Icon
                className="margin-left-md"
                name={route.rightIcon}
                size="small"
                theme={theme === 'dark' ? 'light' : 'dark'}
              />
            )}
          </NavLink>
        </li>
      ))}
    </ul>
  </nav>
);

NavBar.propTypes = {
  className: PropTypes.string,
  NavLink: PropTypes.elementType.isRequired,
  routes: PropTypes.arrayOf(
    PropTypes.shape({
      path: PropTypes.string.isRequired,
      exact: PropTypes.bool,
      strict: PropTypes.bool,
      component: PropTypes.elementType,
      leftIcon: PropTypes.string,
      rightIcon: PropTypes.string,
    })
  ),
  theme: PropTypes.string,
};

export default NavBar;
