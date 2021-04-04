export function isPathActive(path, location) {
  if (!location) {
    return false;
  } else if (path === '/') {
    return path === location.pathname;
  } else {
    return location.pathname.includes(path);
  }
}
