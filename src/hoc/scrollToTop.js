import React, { useEffect } from 'react';
import getDisplayName from './displayName';

export default function scrollToTop(WrappedComponent, behavior) {
  const ScrollToTop = (props) => {
    useEffect(() => {
      window.scrollTo({ top: 0, left: 0, behavior });
    }, []);
    ScrollToTop.displayName = getDisplayName('ScrollToTop', WrappedComponent);
    return <WrappedComponent {...props} />;
  };
  return ScrollToTop;
}
