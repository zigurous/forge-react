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
    favicon.setAttribute('type', source.type);
    favicon.setAttribute('href', source.href);
  }

  return favicon;
};

export default useThemedFavicon;
