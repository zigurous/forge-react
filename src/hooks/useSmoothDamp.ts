'use client';

import { useEffect, useRef, useState } from 'react';
import { smoothdamp } from '../utils';

export function useSmoothDamp(
  defaultValue: number,
  targetValueRef: React.RefObject<number>,
  smoothTime: number,
  maxSpeed: number = Infinity,
): number {
  const animationHandle = useRef<number>(undefined);
  const previousTimeRef = useRef<number>(undefined);
  const currentValueRef = useRef<number>(defaultValue);
  const velocityRef = useRef<number>(0);
  const [value, setValue] = useState(defaultValue);

  useEffect(() => {
    const animate = (time: number) => {
      if (previousTimeRef.current != undefined) {
        const deltaTime = time - previousTimeRef.current;
        currentValueRef.current = smoothdamp(
          currentValueRef.current,
          targetValueRef.current || currentValueRef.current,
          velocityRef,
          smoothTime / 1000,
          maxSpeed,
          deltaTime / 1000,
        );
        setValue(currentValueRef.current);
      }
      previousTimeRef.current = time;
      animationHandle.current = requestAnimationFrame(animate);
    };
    animationHandle.current = requestAnimationFrame(animate);
    return () => {
      if (animationHandle.current !== undefined) {
        cancelAnimationFrame(animationHandle.current);
      }
    };
  }, [smoothTime, maxSpeed]);

  return value;
}
