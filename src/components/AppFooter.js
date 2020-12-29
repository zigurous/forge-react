import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import '../styles/app-footer.css';

const AppFooter = ({
  children,
  className,
  fullBleed = false,
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
    <div
      className={classNames({
        container: !fullBleed,
        'container-fluid': fullBleed,
      })}
    >
      {children}
    </div>
  </footer>
);

AppFooter.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  fullBleed: PropTypes.bool,
  sticky: PropTypes.bool,
  theme: PropTypes.string,
  transparent: PropTypes.bool,
};

export default AppFooter;
