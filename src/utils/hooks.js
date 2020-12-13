import { useEffect, useRef, useState } from 'react';

export const useLoading = () => {
  const ref = useRef();
  const [loaded, setLoaded] = useState(false);

  const loadComplete = () => {
    setLoaded(true);
  };

  useEffect(() => {
    const element = ref.current;
    if (element && !loaded) {
      if (element.complete) {
        loadComplete();
      } else {
        element.addEventListener('load', loadComplete);
      }
    }
    return () => {
      if (element) {
        element.removeEventListener('load', loadComplete);
      }
    };
  }, [ref, loaded]);

  return [ref, loaded];
};

export const useMounted = () => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  return mounted;
};

export const useParallax = () => {
  const container = useRef();

  useEffect(() => {
    if (container.current && window.chrome && window.innerWidth >= 1366) {
      container.current.classList.add('js-parallax');
    }
  }, [container]);

  return container;
};
