import React, { useEffect } from 'react';

export default function scrollToTop(Component, behavior) {
  const ScrollToTopHOC = (props) => {
    useEffect(() => {
      window.scrollTo({ top: 0, left: 0, behavior });
    }, []);
    return <Component {...props} />;
  };
  return ScrollToTopHOC;
}
