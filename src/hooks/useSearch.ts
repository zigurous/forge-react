'use client';

import { useCallback, useEffect, useState } from 'react';

export type SearchState<T> = {
  query: string;
  results: T[] | null;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onSearch: (input: string | null | undefined) => void;
};

export function useSearch<T>(
  items: T[],
  matches: (item: T, query: string) => boolean,
  storageKey?: string,
): [
  SearchState<T>,
  React.Dispatch<React.SetStateAction<string>>,
  React.Dispatch<React.SetStateAction<T[] | null>>,
] {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<T[] | null>(null);

  const search = useCallback(
    (input: string | null | undefined) => {
      if (input) {
        const query = input.toLowerCase().replace(' ', '').trim();
        return items.filter(item => matches(item, query));
      } else {
        return null;
      }
    },
    [items, matches],
  );

  const onSearch = useCallback(
    (input: string | null | undefined) => {
      setResults(search(input));
    },
    [search],
  );

  const onChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  }, []);

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

  const state: SearchState<T> = {
    query,
    results,
    onSearch,
    onChange,
  };

  return [state, setQuery, setResults];
}
