'use client';

import { useMediaQuery } from './useMediaQuery';
import { BreakpointMinWidth, BreakpointMaxWidth } from '../enums';
import type { BreakpointToken } from '../types';

export function useBreakpoint(
  breakpoint: number | BreakpointToken,
  defaultValue?: boolean,
): boolean {
  switch (typeof breakpoint) {
    case 'number':
      return useMediaQuery(`(min-width: ${breakpoint}px)`, defaultValue);
    default:
      return useMediaQuery(
        `(min-width: ${BreakpointMinWidth[breakpoint]}px)`,
        defaultValue,
      );
  }
}

export function useBreakpointMax(
  breakpoint: number | BreakpointToken,
  defaultValue?: boolean,
): boolean {
  switch (typeof breakpoint) {
    case 'number':
      return useMediaQuery(`(max-width: ${breakpoint}px)`, defaultValue);
    default:
      return useMediaQuery(
        `(max-width: ${BreakpointMaxWidth[breakpoint]}px)`,
        defaultValue,
      );
  }
}
