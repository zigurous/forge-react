import { useCallback, useState } from 'react';

export function useMemoizedRef<T extends HTMLElement>(): [
  T | null,
  React.RefCallback<T>,
] {
  const [element, setElement] = useState<T | null>(null);
  const ref = useCallback<React.RefCallback<T>>(node => {
    setElement(node);
  }, []);
  return [element, ref];
}
