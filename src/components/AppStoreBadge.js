import classNames from 'classnames';
import PropTypes from 'prop-types';
import React, { useLayoutEffect, useState } from 'react';
import '../styles/app-store-badge.css';

const HEIGHT_RATIO = 3.375;

function getImage(locale = 'en-us', code = locale) {
  return {
    ios: `https://linkmaker.itunes.apple.com/images/badges/${locale}/badge_appstore-lrg.svg`,
    android: `https://raw.github.com/yjb94/google-play-badge-svg/master/img/${code}_get.svg?sanitize=true`,
  };
}

function AppStoreBadge({
  alt = 'Download on the App Store',
  className,
  defaultLocale = 'en-us',
  locale = (typeof navigator !== 'undefined' && navigator.language) ||
    defaultLocale,
  platform,
  width = 200,
  height = width / HEIGHT_RATIO,
  target = '_blank',
  url,
}) {
  let shortCode = (locale = locale.toLowerCase());
  const expeptionLocale = ['zh-cn', 'zh-tw'];
  if (expeptionLocale.indexOf(locale) === -1) {
    shortCode = locale.split(/[_-]/)[0];
  }

  const [image, setImage] = useState(getImage(locale, shortCode));
  const setDefaultImage = () => {
    setImage(getImage(defaultLocale, shortCode));
  };

  useLayoutEffect(() => {
    setImage(getImage(locale, shortCode));
  }, [locale, shortCode]);

  return (
    <a
      className={classNames('app-store-badge', className)}
      href={url}
      target={target}
      style={{
        width: width,
        height: height,
      }}
    >
      <img alt={alt || ''} src={image[platform]} onError={setDefaultImage} />
    </a>
  );
}

AppStoreBadge.platform = Object.freeze({
  ios: 'ios',
  android: 'android',
});

AppStoreBadge.propTypes = {
  alt: PropTypes.string,
  className: PropTypes.string,
  defaultLocale: PropTypes.string,
  locale: PropTypes.string,
  platform: PropTypes.oneOf(Object.values(AppStoreBadge.platform)).isRequired,
  width: PropTypes.number,
  height: PropTypes.number,
  target: PropTypes.string,
  url: PropTypes.string.isRequired,
};

export default AppStoreBadge;
