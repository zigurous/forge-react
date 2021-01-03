import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import '../styles/app-footer.css';

const AppFooter = ({
  children,
  className,
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
    {children}
  </footer>
);

AppFooter.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  sticky: PropTypes.bool,
  theme: PropTypes.string,
  transparent: PropTypes.bool,
};

export default AppFooter;
