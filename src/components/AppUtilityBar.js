import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import Link from './Link';
import '../styles/app-utility-bar.css';

const AppUtilityBar = ({
  className,
  direction = 'right',
  LinkElementType = 'a',
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
              aria-label={link.name}
              className="color-inherit margin-left-md margin-right-md"
              ElementType={link.ElementType || LinkElementType}
              external={link.external}
              key={link.id || link.to}
              to={link.to}
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
  LinkElementType: PropTypes.elementType,
  links: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      to: PropTypes.string,
      name: PropTypes.string,
      external: PropTypes.bool,
      ElementType: PropTypes.elementType,
    })
  ),
  theme: PropTypes.string,
};

export default AppUtilityBar;
