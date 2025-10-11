import React, { useEffect } from 'react';
import { getDisplayName, scrollToTop } from '../utils';

export function withScrollToTop<P extends object>(
  WrappedComponent: React.ComponentType<P>,
  behavior: ScrollBehavior = 'smooth',
) {
  const ScrollToTop = (props: P) => {
    useEffect(() => {
      scrollToTop(behavior);
    }, []);
    return <WrappedComponent {...props} />;
  };
  ScrollToTop.displayName = getDisplayName('ScrollToTop', WrappedComponent);
  return ScrollToTop;
}
