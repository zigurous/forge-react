export function getScrollbarWidth() {
  return typeof window !== 'undefined' && typeof document !== 'undefined'
    ? (window.innerWidth || 0) - (document.documentElement.clientWidth || 0)
    : 0;
}

export function hasVerticalScroll(element) {
  return (element.scrollHeight || 0) > (element.clientHeight || 0);
}

export function hasHorizontalScroll(element) {
  return (element.scrollWidth || 0) > (element.clientWidth || 0);
}
