import { useEffect, useRef, useState } from 'react';

const parallaxEnabled = false;

export const useParallax = () => {
  const container = useRef();

  useEffect(() => {
    if (
      parallaxEnabled &&
      container.current &&
      window.chrome &&
      window.innerWidth >= 1366
    ) {
      container.current.classList.add('js-parallax');
    }
  }, [container]);

  return container;
};

export const useMounted = () => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  return mounted;
};
