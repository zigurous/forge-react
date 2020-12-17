import { useEffect, useRef, useState } from 'react';

export const useFullscreenMenu = (initialState = false) => {
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

export const useLoading = () => {
  const ref = useRef();
  const [loading, setLoading] = useState(true);

  const loadComplete = () => {
    setLoading(false);
  };

  useEffect(() => {
    const element = ref.current;
    if (element && loading) {
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
  }, [ref, loading]);

  return [ref, loading];
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
