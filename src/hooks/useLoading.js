import { useEffect, useState } from 'react';

const useLoading = (ref) => {
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

  return loading;
};

export const useLoaded = (ref, onLoadComplete = () => {}) => {
  const loaded = !useLoading(ref);

  useEffect(() => {
    if (loaded) {
      onLoadComplete();
    }
  }, [loaded, onLoadComplete]);

  return loaded;
};

export default useLoading;
