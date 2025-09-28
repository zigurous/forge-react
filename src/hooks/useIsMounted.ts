'use client';

import { useEffect, useState } from 'react';

export function useIsMounted() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return mounted;
}

export function useMountedEffect(effect: React.EffectCallback) {
  const mounted = useIsMounted();

  useEffect(() => {
    if (mounted) {
      return effect();
    }
  }, [mounted]);
}
