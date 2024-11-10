import { useEffect, useState } from 'react';
import { bindEvent, unbindEvent } from '../utils';

export function useLoaded(
  ref: React.RefObject<HTMLElement>,
  key?: string,
  onLoadComplete?: () => void,
): boolean {
  const [loaded, setLoaded] = useState(false);

  // reset loaded state when the key changes
  useEffect(() => {
    console.log('reset loaded state');
    setLoaded(false);
  }, [key]);

  // check and wait for the element to be loaded
  useEffect(() => {
    const element = ref.current;

    // set as not loaded if the element is not set
    if (!element) {
      console.log('element not set');
      setLoaded(false);
      return;
    }

    // set as loaded if the element is an image and already loaded
    if (element instanceof HTMLImageElement && element.complete) {
      console.log('image already loaded', element.src);
      setLoaded(true);
      return;
    }

    const loadComplete = () => {
      console.log('load complete', element);
      setLoaded(true);
    };

    bindEvent(element, 'load', loadComplete);

    return () => {
      unbindEvent(element, 'load', loadComplete);
    };
  }, [ref]);

  // trigger callback when the element is loaded
  useEffect(() => {
    if (loaded && onLoadComplete) {
      onLoadComplete();
    }
  }, [loaded, onLoadComplete]);

  return loaded;
}

export function useLoading(
  ref: React.RefObject<HTMLElement>,
  key?: string,
): boolean {
  return !useLoaded(ref, key);
}
