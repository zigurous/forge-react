import { useEffect, useState } from 'react';

const useMediaQuery = (query) => {
  const [mql, setMql] = useState(window.matchMedia(query));
  const [matches, setMatches] = useState(mql.matches);

  useEffect(() => {
    setMql(window.matchMedia(query));
  }, [query]);

  useEffect(() => {
    const _mql = mql;
    const handler = () => {
      setMatches(_mql.matches);
    };
    _mql.addEventListener('change', handler);
    return () => {
      _mql.removeEventListener('change', handler);
    };
  }, [mql]);

  return matches;
};

export default useMediaQuery;
