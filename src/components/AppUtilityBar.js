import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import Link from './Link';
import '../styles/app-utility-bar.css';

const AppUtilityBar = ({
  className,
  direction = 'right',
  links = [],
  theme,
}) => (
  <div
    className={classNames(
      'app-utility-bar',
      { [`app-utility-bar--${direction}`]: direction },
      className
    )}
    theme={theme}
  >
    <div className="container">
      <div className="row">
        <div className="col font-xs font-weight-500">
          {links.map((link) => (
            <Link
              className="margin-left-md margin-right-md"
              key={link.name || link.path}
              to={link.path}
              undecorated
              {...link}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  </div>
);

AppUtilityBar.propTypes = {
  className: PropTypes.string,
  direction: PropTypes.oneOf(['left', 'right']),
  links: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      path: PropTypes.string.isRequired,
      ElementType: PropTypes.elementType,
    })
  ),
  theme: PropTypes.string,
};

export default AppUtilityBar;
