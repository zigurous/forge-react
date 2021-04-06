import { useEffect, useState } from 'react';
import { bindEvent, unbindEvent } from '../utils/events';

export default function useLoading(ref) {
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
        bindEvent(element, 'load', loadComplete);
      }
    }
    return () => {
      if (element) {
        unbindEvent(element, 'load', loadComplete);
      }
    };
  }, [ref, loading]);

  return loading;
}

export function useLoaded(ref, onLoadComplete = () => {}) {
  const loaded = !useLoading(ref);

  useEffect(() => {
    if (loaded) {
      onLoadComplete();
    }
  }, [loaded, onLoadComplete]);

  return loaded;
}
