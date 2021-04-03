import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Icon from './Icon';
import Link from './Link';
import '../styles/nav-bar.css';

const NavBar = ({ className, LinkElementType = 'a', links = [] }) => (
  <nav className={classNames('nav-bar', className)}>
    <ul className="nav-bar__list">
      {links.map((link) => (
        <li className="nav-bar__item" key={link.path}>
          <Link
              activeClassName="active"
            aria-label={link.name}
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
      ))}
    </ul>
  </nav>
);

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
};

export default NavBar;
