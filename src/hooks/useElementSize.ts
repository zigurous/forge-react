'use client';

import { useEffect, useLayoutEffect, useState } from 'react';
import type { Size } from '../types';

export function useElementSize(targetRef: React.RefObject<HTMLElement>): Size {
  function getSize(): Size {
    return {
      width: targetRef.current?.offsetWidth ?? 0,
      height: targetRef.current?.offsetHeight ?? 0,
    };
  }

  const [size, setSize] = useState<Size>(getSize);

  const handleResize = () => {
    setSize(getSize());
  };

  useEffect(() => {
    if (typeof window === 'undefined') return;
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useLayoutEffect(() => {
    handleResize();
  }, []);

  return size;
}
