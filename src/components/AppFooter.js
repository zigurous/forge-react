import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Logo, { logoThemes } from './Logo';
import '../styles/app-footer.css';

const AppFooter = ({
  className,
  fullBleed = false,
  logoSize = 'sm',
  logoVariant = 'logo',
  onLogoClick = () => {},
  showCopyright = false,
  showLogo = false,
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
        {showLogo && (
          <Logo
            onClick={onLogoClick}
            size={logoSize}
            theme={logoThemes[theme] || 'primary'}
            variant={logoVariant}
          />
        )}
        {showCopyright && (
          <div className="copyright body-xs">Copyright © 2020 Adam Graham</div>
        )}
      </div>
      <div className="app-footer__content right" />
    </div>
  </footer>
);

AppFooter.propTypes = {
  className: PropTypes.string,
  fullBleed: PropTypes.bool,
  logoSize: PropTypes.oneOf(['small', 'medium', 'large']),
  logoVariant: PropTypes.oneOf(['logo', 'emblem']),
  onLogoClick: PropTypes.func,
  showCopyright: PropTypes.bool,
  showLogo: PropTypes.bool,
  sticky: PropTypes.bool,
  theme: PropTypes.string,
  transparent: PropTypes.bool,
};

export default AppFooter;
