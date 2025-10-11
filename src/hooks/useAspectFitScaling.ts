import { useEffect, useState } from 'react';
import { useElementRectObserver } from './useElementSizing';

export function useAspectFitScaling<T extends HTMLElement>(
  aspectWidth: number | null,
  aspectHeight: number | null,
  minScale?: number,
  maxScale?: number,
): [number | undefined, React.RefCallback<T>] {
  const [rect, ref] = useElementRectObserver<T>();
  const [scale, setScale] = useState<number>();

  useEffect(() => {
    if (rect) {
      const sw = aspectWidth !== null ? rect.width / aspectWidth : 1;
      const sh = aspectHeight !== null ? rect.height / aspectHeight : 1;
      let scale = Math.min(sw, sh);
      if (minScale !== undefined) scale = Math.max(scale, minScale);
      if (maxScale !== undefined) scale = Math.min(scale, maxScale);
      setScale(scale);
    }
  }, [rect, aspectWidth, aspectHeight, minScale, maxScale]);

  return [scale, ref];
}
