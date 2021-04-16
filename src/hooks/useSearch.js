import { useCallback, useEffect, useState } from 'react';

export default function useSearch(items, matches, storageKey = undefined) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState(null);

  const search = useCallback(
    (input) => {
      const query = input.toLowerCase().replace(' ', '').trim();
      return items.filter((item) => matches(item, query));
    },
    [items, matches]
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
    onChange: (event) => {
      setQuery(event.target.value);
    },
    onSearch: (value) => {
      if (value) {
        setResults(search(value));
      } else {
        setResults(null);
      }
    },
  };

  return [state, setQuery, setResults];
}
