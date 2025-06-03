import { useCallback, useState } from 'react';
import Cookies from 'universal-cookie';
import type { Cookie, CookieSetOptions } from 'universal-cookie';

export function useCookie(
  key: string,
): [
  Cookie,
  (value: Cookie, options?: CookieSetOptions) => void,
  (options?: CookieSetOptions) => void,
] {
  const [cookies] = useState(() => new Cookies());
  const [cookie, setCookieValue] = useState<Cookie>(() => {
    const value = cookies.get(key);
    if (value) return value;
    return null;
  });

  const setCookie = useCallback(
    (value: Cookie, options?: CookieSetOptions) => {
      cookies.set(key, value, options);
      setCookieValue(value);
    },
    [cookies, key],
  );

  const removeCookie = useCallback(
    (options?: CookieSetOptions) => {
      cookies.remove(key, options);
      setCookieValue(null);
    },
    [key],
  );

  return [cookie, setCookie, removeCookie];
}
