'use client';

import { useEffect, useState } from 'react';

export function useLocalStorage<T>(
  key: string,
  defaultValue?: T,
): [T | null, (value: T) => void] {
  const [value, setValue] = useState(getStorageValue(key, defaultValue));

  useEffect(() => {
    if (typeof window !== 'undefined' && window.localStorage) {
      window.localStorage.setItem(key, JSON.stringify(value));
    }
  }, [key, value]);

  return [value, setValue];
}

export function getStorageValue<T>(key: string, defaultValue?: T): T | null {
  if (typeof window !== 'undefined' && window.localStorage) {
    const item = localStorage.getItem(key);
    const value = item ? JSON.parse(item) : null;
    return value || defaultValue || null;
  } else {
    return defaultValue || null;
  }
}
