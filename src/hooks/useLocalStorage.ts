import { useCallback, useEffect, useState } from 'react';

export function useLocalStorage<T>(
  key: string,
  defaultValue: T,
): [T, React.Dispatch<React.SetStateAction<T>>] {
  const getter = useCallback(
    () => getStorageValue(key, defaultValue),
    [key, defaultValue],
  );

  const [value, setValue] = useState(getter);

  useEffect(() => {
    if (typeof window !== 'undefined' && window.localStorage) {
      window.localStorage.setItem(key, JSON.stringify(value));
    }
  }, [key, value]);

  return [value, setValue];
}

export function getStorageValue<T>(key: string, defaultValue: T): T {
  if (typeof window !== 'undefined' && window.localStorage) {
    const item = localStorage.getItem(key);
    const value = item ? JSON.parse(item) : null;
    return value || defaultValue;
  } else {
    return defaultValue;
  }
}
