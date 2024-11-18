'use client';

export function isPathActive(path: string, location: Location | null): boolean {
  location =
    location || (typeof window !== 'undefined' ? window.location : null);
  if (!location) {
    return false;
  } else if (path === '/') {
    return path === location.pathname;
  } else {
    return location.pathname.includes(path);
  }
}
