import React, { useEffect } from 'react';
import getDisplayName from './displayName';
import { scrollToTop } from '../utils';

export default function withScrollToTop(WrappedComponent, behavior = 'smooth') {
  const ScrollToTop = (props) => {
    useEffect(() => {
      scrollToTop(behavior);
    }, []);
    return <WrappedComponent {...props} />;
  };
  ScrollToTop.displayName = getDisplayName('ScrollToTop', WrappedComponent);
  return ScrollToTop;
}
