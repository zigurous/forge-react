import React from 'react';
import { useThemedFavicon } from '../hooks';

export default function withThemedFavicon(Component) {
  const ThemedFaviconComponent = (props) => {
    useThemedFavicon();
    return <Component {...props} />;
  };
  return ThemedFaviconComponent;
}
