import { useMediaQuery } from './useMediaQuery';
import type { Breakpoint } from '../types';

const sizes = {
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
};

export function useBreakpoint(minWidth: number | Breakpoint): boolean {
  switch (typeof minWidth) {
    case 'number':
      return useMediaQuery(`(min-width: ${minWidth}px)`);
    default:
      return useMediaQuery(`(min-width: ${sizes[minWidth]}px)`);
  }
}

export function useBreakpointMax(maxWidth: number | Breakpoint): boolean {
  switch (typeof maxWidth) {
    case 'number':
      return useMediaQuery(`(max-width: ${maxWidth - 1}px)`);
    default:
      return useMediaQuery(`(max-width: ${sizes[maxWidth] - 1}px)`);
  }
}
