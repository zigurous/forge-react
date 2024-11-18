'use client';

import React from 'react';
import { useThemedFavicon } from '../hooks';
import { getDisplayName } from '../utils';

export function withThemedFavicon<P extends object>(
  WrappedComponent: React.ComponentType<P>,
) {
  const ThemedFavicon = (props: P) => {
    useThemedFavicon();
    return <WrappedComponent {...props} />;
  };
  ThemedFavicon.displayName = getDisplayName('ThemedFavicon', WrappedComponent);
  return ThemedFavicon;
}
