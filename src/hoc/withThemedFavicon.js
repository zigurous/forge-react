import React from 'react';
import { useThemedFavicon } from '../hooks';

export default function withThemedFavicon(Component) {
  const ThemedFaviconHOC = (props) => {
    useThemedFavicon();
    return <Component {...props} />;
  };
  return ThemedFaviconHOC;
}
