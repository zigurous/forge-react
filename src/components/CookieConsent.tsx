import { useCookies } from 'react-cookie';
import classNames from 'classnames';
import React from 'react';
import Button from './Button';
import Link from './Link';
import ReactPortal from './ReactPortal';
import type { Theme } from '../types';

const COOKIE_NAME = 'cookieconsent_status';
const COOKIE_VALUE = 'accepted';

export interface CookieConsentProps {
  buttonText?: string;
  className?: string;
  learnMoreLink?: string;
  onConsent?: (consented: boolean) => void;
  rootElement?: string;
  theme?: Theme | string;
}

export default function CookieConsent({
  buttonText = 'Agree',
  className,
  learnMoreLink = 'https://www.cookiesandyou.com/',
  onConsent = () => {},
  rootElement = 'body',
  theme = 'high-contrast',
}: CookieConsentProps) {
  const [cookies, setCookie] = useCookies([COOKIE_NAME]);
  if (cookies[COOKIE_NAME] === COOKIE_VALUE) return null;
  return (
    <ReactPortal rootElement={rootElement}>
      <div
        className={classNames('cookie-consent', className)}
        data-theme={theme}
      >
        <div className="cookie-consent__container">
          <span className="cookie-consent__text text-sm">
            <span className="mr-sm">
              This website uses cookies to ensure you get the best experience on
              our website.
            </span>
            {learnMoreLink && (
              <Link
                className="text-inherit hover:text-inheit"
                to={learnMoreLink}
                external
                underlined
              >
                Learn more
              </Link>
            )}
          </span>
          <Button
            aria-label={buttonText}
            className="cookie-consent__button"
            shape="square"
            size="md"
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
