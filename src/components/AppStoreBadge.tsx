import classNames from 'classnames';
import React from 'react';
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
  const image = getImage(platform, locale, variant);
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
        alt={alt || image?.alt}
        src={image?.src}
        style={{
          width: '100%',
          height: '100%',
        }}
      />
    </Element>
  );
}

function getImage(
  platform: 'ios' | 'android',
  locale: string,
  variant = 'black',
) {
  switch (platform) {
    case 'ios':
      return {
        src: `https://toolbox.marketingtools.apple.com/api/v2/badges/download-on-the-app-store/${variant}/${locale}`,
        alt: 'Download on the App Store',
      };
    case 'android':
      const shortCode = getShortCode(locale);
      return {
        src: `https://raw.github.com/yjb94/google-play-badge-svg/master/img/${shortCode}_get.svg?sanitize=true`,
        alt: 'Get it on Google Play',
      };
  }
}

function getShortCode(locale: string) {
  let shortCode = locale.toLowerCase();
  const expeptionLocale = ['zh-cn', 'zh-tw'];
  if (expeptionLocale.indexOf(locale) === -1) {
    shortCode = locale.split(/[_-]/)[0];
  }
  return shortCode;
}
