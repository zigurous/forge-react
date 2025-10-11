import { useEffect, useState } from 'react';
import { useMemoizedRef } from './useMemoizedRef';

export function useElementRectObserver<T extends HTMLElement>(): [
  DOMRect | undefined,
  React.RefCallback<T>,
] {
  const [element, ref] = useMemoizedRef<T>();
  const [observer, setObserver] = useState<ResizeObserver>();
  const [rect, setRect] = useState<DOMRect>();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setObserver(
        new ResizeObserver((entries: ResizeObserverEntry[]) => {
          setRect(entries[0].contentRect);
        }),
      );
    }
  }, []);

  useEffect(() => {
    if (element && observer) {
      observer.observe(element);
      return () => {
        observer?.unobserve(element);
      };
    }
  }, [element, observer]);

  return [rect, ref];
}
