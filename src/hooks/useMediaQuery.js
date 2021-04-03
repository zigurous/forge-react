import { useEffect, useState } from 'react';

const useMediaQuery = (query) => {
  const defaultMql =
    typeof window !== 'undefined' ? window.matchMedia(query) : null;
  const [mql, setMql] = useState(defaultMql);
  const [matches, setMatches] = useState(Boolean(mql && mql.matches));

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setMql(window.matchMedia(query));
    }
  }, [query]);

  useEffect(() => {
    const _mql = mql;

    if (_mql) {
      const handler = () => setMatches(_mql.matches);
      _mql.addEventListener('change', handler);

      return () => {
        _mql.removeEventListener('change', handler);
      };
    }
  }, [mql]);

  return matches;
};

export const useMobile = (maxWidth = '991px') => {
  return useMediaQuery(`(max-width: ${maxWidth})`);
};

export default useMediaQuery;
