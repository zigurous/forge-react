import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import Link from './Link';
import Logo from './Logo';
import '../styles/app-footer.css';

const AppFooter = ({
  bordered = false,
  className,
  copyright,
  hideLogo = false,
  LinkElementType = 'a',
  links = [],
  onLinkClick,
  onLogoClick,
  sticky = false,
  theme,
  transparent = false,
}) => (
  <footer
    className={classNames(
      'app-footer',
      { 'app-footer--bordered': bordered },
      { 'app-footer--transparent': transparent },
      { 'app-footer--sticky': sticky },
      className
    )}
    data-theme={theme}
  >
    <div className="container">
      <div className="row align-items-center margin-top-lg margin-bottom-lg">
        <div className="col font-xs font-weight-500 text-foreground-secondary">
          <span>
            {!hideLogo && <Logo onClick={onLogoClick} size="xs" />}
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
                  aria-label={link.name}
                  className="color-inherit margin-left-md margin-right-md"
                  ElementType={link.ElementType || LinkElementType}
                  external={link.external}
                  key={link.id || link.to}
                  onClick={() => {
                    if (onLinkClick) {
                      onLinkClick(link);
                    }
                  }}
                  to={link.to}
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
  bordered: PropTypes.bool,
  className: PropTypes.string,
  copyright: PropTypes.node,
  hideLogo: PropTypes.bool,
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
  onLinkClick: PropTypes.func,
  onLogoClick: PropTypes.func,
  sticky: PropTypes.bool,
  theme: PropTypes.string,
  transparent: PropTypes.bool,
};

export default AppFooter;
