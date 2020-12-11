import { useEffect, useRef, useState } from 'react';

export const useImageLoading = () => {
  const imageRef = useRef();
  const [loaded, setLoaded] = useState(false);

  const loadComplete = () => {
    setLoaded(true);
  };

  useEffect(() => {
    const image = imageRef.current;
    if (image && !loaded) {
      if (image.complete) {
        loadComplete();
      } else {
        image.addEventListener('load', loadComplete);
      }
    }
    return () => {
      if (image) {
        image.removeEventListener('load', loadComplete);
      }
    };
  }, [imageRef, loaded]);

  return [imageRef, loaded];
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
