import classNames from 'classnames';
import React, { useLayoutEffect, useState } from 'react';
import type { PolymorphicProps } from '../types';

export type BaseAppStoreBadgeProps = {
  className?: string;
  locale?: string;
  platform: 'ios' | 'android';
  url?: string;
  variant?: 'black' | 'white';
  width?: number;
};

export type AppStoreBadgeProps<T extends React.ElementType = 'a'> =
  PolymorphicProps<T, BaseAppStoreBadgeProps>;

export default function AppStoreBadge<T extends React.ElementType = 'a'>({
  alt,
  as,
  className,
  href,
  locale = (typeof navigator !== 'undefined' && navigator.language) || 'en-us',
  platform,
  style,
  target = '_blank',
  url,
  variant = 'black',
  width = 200,
  ...rest
}: AppStoreBadgeProps<T>) {
  const Element = as ?? 'a';

  let shortCode = (locale = locale.toLowerCase());
  const expeptionLocale = ['zh-cn', 'zh-tw'];
  if (expeptionLocale.indexOf(locale) === -1) {
    shortCode = locale.split(/[_-]/)[0];
  }

  const [image, setImage] = useState(getImage(locale, shortCode, variant));

  useLayoutEffect(() => {
    setImage(getImage(locale, shortCode, variant));
  }, [locale, shortCode, variant]);

  return (
    <Element
      {...rest}
      className={classNames('app-store-badge', className)}
      href={href || url}
      target={target}
      style={{
        width: width,
        height: width / 3.375,
        ...style,
      }}
    >
      <img
        alt={alt || image[platform].alt}
        src={image[platform].src}
        style={{
          width: '100%',
          height: '100%',
        }}
        onError={() => {
          setImage(getImage('en-us', shortCode, variant));
        }}
      />
    </Element>
  );
}

function getImage(locale: string, code = locale, variant = 'black') {
  return {
    ios: {
      src: `https://toolbox.marketingtools.apple.com/api/v2/badges/download-on-the-app-store/${variant}/${locale}`,
      alt: 'Download on the App Store',
    },
    android: {
      src: `https://raw.github.com/yjb94/google-play-badge-svg/master/img/${code}_get.svg?sanitize=true`,
      alt: 'Get it on Google Play',
    },
  };
}
