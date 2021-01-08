import React, { useEffect } from 'react';
import getDisplayName from './displayName';

export default function scrollToTop(WrappedComponent, behavior) {
  const ScrollToTop = (props) => {
    useEffect(() => {
      window.scrollTo({ top: 0, left: 0, behavior });
    }, []);
    return <WrappedComponent {...props} />;
  };
  ScrollToTop.displayName = getDisplayName('ScrollToTop', WrappedComponent);
  return ScrollToTop;
}
