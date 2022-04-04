import { useEffect, useState } from 'react';

export function getStorageValue(key, defaultValue) {
  if (typeof window === 'undefined' || !localStorage) {
    return defaultValue;
  }

  const storage = localStorage.getItem(key);
  const value = storage && JSON.parse(storage);

  return value || defaultValue;
}

export default function useLocalStorage(key, defaultValue) {
  const [value, setValue] = useState(() => {
    return getStorageValue(key, defaultValue);
  });

  useEffect(() => {
    if (typeof window !== 'undefined' && localStorage) {
      localStorage.setItem(key, JSON.stringify(value));
    }
  }, [key, value]);

  return [value, setValue];
}
