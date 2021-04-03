import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Link from './Link';
import Logo from './Logo';
import '../styles/app-footer.css';

const AppFooter = ({
  className,
  copyright,
  LinkElementType = 'a',
  links = [],
  onLogoClick = () => {},
  showLogo = true,
  sticky = false,
  theme,
  transparent = false,
}) => (
  <footer
    className={classNames(
      'app-footer',
      { 'app-footer--transparent': transparent },
      { 'app-footer--sticky': sticky },
      className
    )}
    theme={theme}
  >
    <div className="container">
      <div className="row align-items-center margin-top-lg margin-bottom-lg">
        <div className="col font-xs font-weight-500">
          <span>
            {showLogo && <Logo onClick={onLogoClick} size="xs" />}
            {copyright && (
              <span className="copyright margin-left-xl margin-right-xl">
                {copyright}
              </span>
            )}
          </span>
          {links && links.length > 0 && (
            <span className="links">
              {links.map((link) => (
                <Link
                  className="margin-left-md margin-right-md"
                  ElementType={LinkElementType}
                  key={link.name}
                  undecorated
                  {...link}
                >
                  {link.name}
                </Link>
              ))}
            </span>
          )}
        </div>
      </div>
    </div>
  </footer>
);

AppFooter.propTypes = {
  className: PropTypes.string,
  copyright: PropTypes.node,
  LinkElementType: PropTypes.elementType,
  links: PropTypes.arrayOf(
    PropTypes.shape({
      path: PropTypes.string,
      name: PropTypes.string,
    })
  ),
  onLogoClick: PropTypes.func,
  showLogo: PropTypes.bool,
  sticky: PropTypes.bool,
  theme: PropTypes.string,
  transparent: PropTypes.bool,
};

export default AppFooter;
