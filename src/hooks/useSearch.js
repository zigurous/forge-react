import { useCallback, useEffect, useState } from 'react';

const useSearch = (items, storageKey = undefined) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState(null);

  const search = useCallback(
    (input) => {
      const query = input.toLowerCase().replace(' ', '').trim();
      return items.filter((item) => {
        const search =
          item.searchQuery || item.title.toLowerCase().replace(' ', '');
        return search.includes(query);
      });
    },
    [items]
  );

  useEffect(() => {
    if (storageKey && sessionStorage && items.length > 0) {
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
};

export default useSearch;
