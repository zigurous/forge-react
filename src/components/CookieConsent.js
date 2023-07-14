import React from 'react';
import { useCookies } from 'react-cookie';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Button from './Button';
import Link from './Link';
import ReactPortal from './ReactPortal';

const COOKIE_NAME = 'cookieconsent_status';
const COOKIE_VALUE = 'accepted';

function CookieConsent({
  buttonText = 'Agree',
  className,
  learnMoreLink = 'https://www.cookiesandyou.com/',
  onConsent = () => {},
  rootElement,
  theme = 'high-contrast',
}) {
  const [cookies, setCookie] = useCookies([COOKIE_NAME]);
  if (cookies[COOKIE_NAME] === COOKIE_VALUE) return null;
  return (
    <ReactPortal rootElement={rootElement}>
      <div
        className={classNames('cookie-consent', className)}
        data-theme={theme}
      >
        <div className="cookie-consent__container">
          <span className="cookie-consent__text font-sm">
            <span className="margin-right-md">
              This website uses cookies to ensure you get the best experience on
              our website.
            </span>
            {learnMoreLink && (
              <Link
                className="color-inherit"
                to={learnMoreLink}
                external
                underlined
              >
                Learn more
              </Link>
            )}
          </span>
          <Button
            className="cookie-consent__button"
            color={Button.color.default}
            shape={Button.shape.square}
            size={Button.size.medium}
            onClick={() => {
              setCookie(COOKIE_NAME, COOKIE_VALUE, { path: '/' });
              onConsent(true);
            }}
          >
            {buttonText}
          </Button>
        </div>
      </div>
    </ReactPortal>
  );
}

CookieConsent.propTypes = {
  buttonText: PropTypes.string,
  className: PropTypes.string,
  learnMoreLink: PropTypes.string,
  onAgree: PropTypes.func,
  rootElement: PropTypes.string,
  theme: PropTypes.string,
};

export default CookieConsent;
