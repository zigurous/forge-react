import { useEffect, useRef, useState } from 'react';

export const useImageLoading = () => {
  const imageRef = useRef();
  const [loading, setLoading] = useState(true);

  const loadComplete = () => {
    setLoading(false);
  };

  useEffect(() => {
    const image = imageRef.current;
    if (image && loading) {
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
  }, [imageRef, loading]);

  return [imageRef, loading];
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
