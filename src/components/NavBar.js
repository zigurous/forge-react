import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import '../styles/nav-bar.css';

const NavBar = ({ className, NavLink, routes = [] }) => (
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
            {route.icon && (
              <i aria-hidden className="material-icons margin-right-md">
                {route.icon}
              </i>
            )}
            {route.name}
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
    })
  ),
};

export default NavBar;
