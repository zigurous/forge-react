import { useEffect, useRef } from 'react';

const enabled = false;

export const useParallax = () => {
  const container = useRef();

  useEffect(() => {
    if (
      enabled &&
      container.current &&
      window.chrome &&
      window.innerWidth >= 1366
    ) {
      container.current.classList.add('js-parallax');
    }
  }, [container]);

  return container;
};
