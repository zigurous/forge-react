import { useState } from 'react';
import useMediaQuery from './useMediaQuery';

const createFavicon = () => {
  const favicon = document.createElement('link');
  favicon.setAttribute('rel', 'favicon icon');
  document.head.appendChild(favicon);
  return favicon;
};

const useThemedFavicon = () => {
  const [favicon] = useState(createFavicon());
  const light = useMediaQuery('(prefers-color-scheme:light)');
  const dark = useMediaQuery('(prefers-color-scheme:dark)');

  let source = null;

  if (light) {
    source = document.querySelector(
      'link[rel*="icon"][media="(prefers-color-scheme:light)"]'
    );
  } else if (dark) {
    source = document.querySelector(
      'link[rel*="icon"][media="(prefers-color-scheme:dark)"]'
    );
  }

  if (source) {
    const url = new URL(source.href);
    favicon.setAttribute('type', source.type);
    favicon.setAttribute('href', url.pathname);
  }

  return favicon;
};

export default useThemedFavicon;
