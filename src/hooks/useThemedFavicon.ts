import { useState } from 'react';
import { useMediaQuery } from './useMediaQuery';

function queryFavicon(): Element | null {
  if (typeof document === 'undefined') return null;
  return document.querySelector('link[rel*="icon"]');
}

function createFavicon(): HTMLLinkElement | null {
  if (typeof document === 'undefined') return null;
  const favicon = document.createElement('link');
  favicon.setAttribute('rel', 'favicon icon');
  document.head.appendChild(favicon);
  return favicon;
}

export function useThemedFavicon() {
  const [favicon] = useState(queryFavicon() || createFavicon());
  const light = useMediaQuery('(prefers-color-scheme:light)');
  const dark = useMediaQuery('(prefers-color-scheme:dark)');

  let source: HTMLLinkElement | null = null;

  if (typeof document !== 'undefined') {
    if (light) {
      source = document.querySelector(
        'link[rel*="icon"][media="(prefers-color-scheme:light)"]',
      );
    } else if (dark) {
      source = document.querySelector(
        'link[rel*="icon"][media="(prefers-color-scheme:dark)"]',
      );
    }
  }

  if (source && favicon) {
    const url = new URL(source.href);
    favicon.setAttribute('type', source.type);
    favicon.setAttribute('href', url.pathname);
  }

  return favicon;
}
