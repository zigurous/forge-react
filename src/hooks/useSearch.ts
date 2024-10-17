import { useCallback, useEffect, useState } from 'react';

export function useSearch<T>(
  items: T[],
  matches: (item: T, query: string) => boolean,
  storageKey?: string,
) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<T[] | null>(null);

  const search = useCallback(
    (input: string) => {
      const query = input.toLowerCase().replace(' ', '').trim();
      return items.filter(item => matches(item, query));
    },
    [items, matches],
  );

  useEffect(() => {
    if (
      storageKey &&
      items.length > 0 &&
      typeof sessionStorage !== 'undefined'
    ) {
      const storedValue = sessionStorage.getItem(storageKey);

      if (storedValue) {
        setQuery(storedValue);
        setResults(search(storedValue));
      }

      sessionStorage.removeItem(storageKey);
    }
  }, [storageKey, items, search]);

  const state = {
    query,
    results,
    value: query,
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => {
      setQuery(event.target.value);
    },
    onSearch: (value?: string | null) => {
      if (value) {
        setResults(search(value));
      } else {
        setResults(null);
      }
    },
  };

  return [state, setQuery, setResults];
}
