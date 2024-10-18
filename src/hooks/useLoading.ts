import { useEffect, useState } from 'react';
import { bindEvent, unbindEvent } from '../utils';

export function useLoading(ref: React.RefObject<HTMLElement>): boolean {
  const [loading, setLoading] = useState(true);

  const loadComplete = () => {
    setLoading(false);
  };

  useEffect(() => {
    const element = ref.current;
    if (element && loading) {
      if (element instanceof HTMLImageElement && element.complete) {
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

export function useLoaded(
  ref: React.RefObject<HTMLElement>,
  onLoadComplete = () => {},
): boolean {
  const loaded = !useLoading(ref);

  useEffect(() => {
    if (loaded) {
      onLoadComplete();
    }
  }, [loaded, onLoadComplete]);

  return loaded;
}
