import { useEffect, useState } from 'react';
import { bindEvent, unbindEvent } from '../utils';

export function useLoaded(
  ref: React.RefObject<HTMLElement>,
  key?: string,
  onLoad?: () => void,
): boolean {
  const [loaded, setLoaded] = useState(false);

  // reset loaded state when the key changes
  useEffect(() => {
    setLoaded(false);
  }, [key]);

  // check and wait for the element to be loaded
  useEffect(() => {
    const element = ref.current;

    // set as not loaded if the element is not set
    if (!element) {
      setLoaded(false);
      return;
    }

    // set as loaded if the element is an image and already loaded
    if (element instanceof HTMLImageElement && element.complete) {
      setLoaded(true);
      return;
    }

    const loadComplete = () => {
      setLoaded(true);
    };

    bindEvent(element, 'load', loadComplete);

    return () => {
      unbindEvent(element, 'load', loadComplete);
    };
  }, [ref]);

  // trigger callback when the element is loaded
  useEffect(() => {
    if (loaded && onLoad) {
      onLoad();
    }
  }, [loaded, onLoad]);

  return loaded;
}

export function useLoading(
  ref: React.RefObject<HTMLElement>,
  key?: string,
): boolean {
  return !useLoaded(ref, key);
}
