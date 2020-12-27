import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import '../styles/app-footer.css';

const AppFooter = ({
  children,
  className,
  ContentLeft,
  ContentRight,
  fullBleed = false,
  sticky = false,
  theme,
  transparent = true,
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
    <div
      className={classNames('app-footer__container', {
        container: !fullBleed,
        'container-fluid': fullBleed,
      })}
    >
      <div className="app-footer__content left">
        {ContentLeft && <ContentLeft />}
      </div>
      <div className="app-footer__content right">
        {ContentRight && <ContentRight />}
      </div>
    </div>
    {children}
  </footer>
);

AppFooter.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  ContentLeft: PropTypes.elementType,
  ContentRight: PropTypes.elementType,
  fullBleed: PropTypes.bool,
  sticky: PropTypes.bool,
  theme: PropTypes.string,
  transparent: PropTypes.bool,
};

export default AppFooter;
