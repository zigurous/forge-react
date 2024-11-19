'use client';

import { useCallback, useState } from 'react';
import { useIsomorphicLayoutEffect } from './useIsomorphicLayoutEffect';
import { bindEvent, unbindEvent } from '../utils';

export function useMediaQuery(query: string, defaultValue?: boolean): boolean {
  const [matches, setMatches] = useState<boolean>(
    getMatches(query, defaultValue),
  );

  const handleChange = useCallback(() => {
    setMatches(getMatches(query, defaultValue));
  }, [query, defaultValue]);

  useIsomorphicLayoutEffect(() => {
    const matchMedia = window.matchMedia(query);
    handleChange();
    bindEvent(matchMedia, 'change', handleChange);
    return () => {
      unbindEvent(matchMedia, 'change', handleChange);
    };
  }, [handleChange]);

  return matches;
}

const getMatches = (query: string, defaultValue?: boolean): boolean => {
  if (typeof window !== 'undefined') {
    return window.matchMedia(query).matches;
  } else {
    return defaultValue || false;
  }
};
