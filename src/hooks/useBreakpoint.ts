import { useMediaQuery } from './useMediaQuery';
import { BreakpointMinWidth, BreakpointMaxWidth } from '../enums';
import type { BreakpointToken } from '../types';

export function useBreakpoint(breakpoint: number | BreakpointToken): boolean {
  switch (typeof breakpoint) {
    case 'number':
      return useMediaQuery(`(min-width: ${breakpoint}px)`);
    default:
      return useMediaQuery(`(min-width: ${BreakpointMinWidth[breakpoint]}px)`);
  }
}

export function useBreakpointMax(
  breakpoint: number | BreakpointToken,
): boolean {
  switch (typeof breakpoint) {
    case 'number':
      return useMediaQuery(`(max-width: ${breakpoint}px)`);
    default:
      return useMediaQuery(`(max-width: ${BreakpointMaxWidth[breakpoint]}px)`);
  }
}
