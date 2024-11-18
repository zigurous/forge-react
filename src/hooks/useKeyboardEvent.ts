'use client';

import { useEffect } from 'react';
import { nativeKeyboardEventHandler } from '../utils';

export function useKeyboardEvent(
  key: string | string[],
  callback: Function,
  preventDefault = true,
) {
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const eventHandler = nativeKeyboardEventHandler(
      key,
      callback,
      preventDefault,
    );
    window.addEventListener('keydown', eventHandler);
    return () => {
      window.removeEventListener('keydown', eventHandler);
    };
  }, [key, callback, preventDefault]);
}
