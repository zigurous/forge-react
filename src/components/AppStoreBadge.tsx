import classNames from 'classnames';
import React, { useLayoutEffect, useState } from 'react';
import type { PolymorphicProps } from '../types';

const HEIGHT_RATIO = 3.375;

export type BaseAppStoreBadgeProps = {
  alt?: string;
  className?: string;
  defaultLocale?: string;
  height?: number;
  locale?: string;
  platform: 'ios' | 'android';
  style?: React.CSSProperties;
  target?: string;
  width?: number;
};

export type AppStoreBadgeProps<T extends React.ElementType = 'a'> =
  PolymorphicProps<T, BaseAppStoreBadgeProps>;

export default function AppStoreBadge<T extends React.ElementType = 'a'>({
  alt = 'Download on the App Store',
  as,
  className,
  defaultLocale = 'en-us',
  locale = (typeof navigator !== 'undefined' && navigator.language) ||
    defaultLocale,
  platform,
  width = 200,
  height = width / HEIGHT_RATIO,
  style,
  target = '_blank',
  ...rest
}: AppStoreBadgeProps<T>) {
  const Element = as ?? 'a';

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
    <Element
      {...rest}
      className={classNames('app-store-badge', className)}
      target={target}
      style={{
        width: width,
        height: height,
        ...style,
      }}
    >
      <img alt={alt || ''} src={image[platform]} onError={setDefaultImage} />
    </Element>
  );
}

function getImage(locale = 'en-us', code = locale) {
  return {
    ios: `https://linkmaker.itunes.apple.com/images/badges/${locale}/badge_appstore-lrg.svg`,
    android: `https://raw.github.com/yjb94/google-play-badge-svg/master/img/${code}_get.svg?sanitize=true`,
  };
}
