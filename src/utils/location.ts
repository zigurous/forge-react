export function isPathActive(path: string, location: Location | null): boolean {
  if (!location) {
    return false;
  } else if (path === '/') {
    return path === location.pathname;
  } else {
    return location.pathname.includes(path);
  }
}
