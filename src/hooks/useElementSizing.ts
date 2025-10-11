import { useCallback, useEffect, useState } from 'react';
import { useIsomorphicLayoutEffect } from './useIsomorphicLayoutEffect';
import { useMemoizedRef } from './useMemoizedRef';

export function useElementRectObserver<T extends HTMLElement>(): [
  DOMRect | undefined,
  React.RefCallback<T>,
] {
  const [element, ref] = useMemoizedRef<T>();
  const [rect, setRect] = useState<DOMRect>();

  useEffect(() => {
    if (typeof window !== 'undefined' && element) {
      const observer = new ResizeObserver(entries =>
        setRect(entries[0].contentRect),
      );
      observer.observe(element);
      return () => {
        observer.unobserve(element);
      };
    }
  }, [element]);

  return [rect, ref];
}

export function useElementBoundingClientRect<T extends HTMLElement>(): [
  DOMRect | undefined,
  React.RefCallback<T>,
] {
  const [element, ref] = useMemoizedRef<T>();
  const [rect, setRect] = useState<DOMRect>();

  const handleResize = useCallback(
    () => setRect(element?.getBoundingClientRect()),
    [element],
  );

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
  }, [handleResize]);

  useIsomorphicLayoutEffect(() => {
    handleResize();
  }, [handleResize]);

  return [rect, ref];
}

export function useElementOffsetRect<T extends HTMLElement>(): [
  DOMRect | undefined,
  React.RefCallback<T>,
] {
  const [element, ref] = useMemoizedRef<T>();
  const [rect, setRect] = useState<DOMRect>();

  const handleResize = useCallback(() => {
    if (element) {
      setRect(
        DOMRect.fromRect({
          x: element.offsetLeft,
          y: element.offsetTop,
          width: element.offsetWidth,
          height: element.offsetHeight,
        }),
      );
    } else {
      setRect(undefined);
    }
  }, [element]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
  }, [handleResize]);

  useIsomorphicLayoutEffect(() => {
    handleResize();
  }, [handleResize]);

  return [rect, ref];
}
