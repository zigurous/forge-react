import { useEffect, useState } from 'react';
import { bindEvent, unbindEvent } from '../utils/events';

export default function useMediaQuery(query, onChange) {
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
    let handler;

    if (_mql) {
      handler = () => {
        setMatches(_mql.matches);

        if (onChange) {
          onChange(_mql.matches);
        }
      };

      bindEvent(_mql, 'change', handler);
    }

    return () => {
      if (_mql && handler) {
        unbindEvent(_mql, 'change', handler);
      }
    };
  }, [mql, onChange]);

  return matches;
}
