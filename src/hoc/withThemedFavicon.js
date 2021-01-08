import React from 'react';
import getDisplayName from './displayName';
import { useThemedFavicon } from '../hooks';

export default function withThemedFavicon(WrappedComponent) {
  const ThemedFavicon = (props) => {
    useThemedFavicon();
    return <WrappedComponent {...props} />;
  };
  ThemedFavicon.displayName = getDisplayName('ThemedFavicon', WrappedComponent);
  return ThemedFavicon;
}
