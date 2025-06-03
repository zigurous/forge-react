'use client';

import { clamp } from './math';

export function scrollToTop(behavior: ScrollBehavior = 'smooth') {
  if (typeof window !== 'undefined') {
    window.scrollTo({
      top: 0,
      behavior,
    });
  }
}

export function getScrollbarWidth(): number {
  return typeof window !== 'undefined' && typeof document !== 'undefined'
    ? (window.innerWidth || 0) - (document.documentElement.clientWidth || 0)
    : 0;
}

export function getWheelDirection(e: WheelEvent): number {
  if ('deltaY' in e) {
    return clamp(e.deltaY, -1, 1) * -1;
  } else if ('wheelDeltaY' in e) {
    // @ts-ignore
    return clamp(e.wheelDeltaY, -1, 1);
  }
  return 0;
}

export function hasVerticalScroll(element: HTMLElement): boolean {
  return (element.scrollHeight || 0) > (element.clientHeight || 0);
}

export function hasHorizontalScroll(element: HTMLElement): boolean {
  return (element.scrollWidth || 0) > (element.clientWidth || 0);
}
