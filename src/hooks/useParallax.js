import { useEffect, useRef } from 'react';

const useParallax = () => {
  const container = useRef();

  useEffect(() => {
    if (container.current && window.chrome && window.innerWidth >= 1366) {
      container.current.classList.add('js-parallax');
    }
  }, [container]);

  return container;
};

export default useParallax;
