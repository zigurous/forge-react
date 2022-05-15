import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import Link from './Link';

function AppUtilityBar({
  className,
  direction = 'right',
  LinkElementType = 'a',
  links = [],
  theme,
}) {
  return (
    <div
      className={classNames(
        'app-utility-bar',
        { [`app-utility-bar--${direction}`]: direction },
        className
      )}
      data-theme={theme}
    >
      <div className="container">
        <div className="row">
          <div className="col font-xs font-weight-500">
            {links.map((link) => {
              const key = link.to || link.path || link.href;
              return (
                <Link
                  {...link}
                  aria-label={link.name}
                  className="color-inherit margin-left-md margin-right-md"
                  ElementType={link.ElementType || LinkElementType}
                  key={key}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

AppUtilityBar.propTypes = {
  className: PropTypes.string,
  direction: PropTypes.oneOf(['left', 'right']),
  LinkElementType: PropTypes.elementType,
  links: PropTypes.arrayOf(PropTypes.shape(Link.propTypes)),
  theme: PropTypes.string,
};

export default AppUtilityBar;
