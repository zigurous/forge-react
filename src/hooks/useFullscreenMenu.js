import { useEffect, useState } from 'react';

const useFullscreenMenu = (initialState = false) => {
  const [fullscreen, setFullscreen] = useState(Boolean(initialState));

  useEffect(() => {
    const body = document.querySelector('body');
    if (body) {
      if (fullscreen) {
        body.classList.add('fullscreen-menu-open');
      } else {
        body.classList.remove('fullscreen-menu-open');
      }
    }
  }, [fullscreen]);

  return [fullscreen, setFullscreen];
};

export default useFullscreenMenu;
