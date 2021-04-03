export function getScrollbarWidth() {
  return typeof window !== 'undefined'
    ? window.innerWidth - (document.documentElement.clientWidth || 0)
    : 0;
}

export function hasVerticalScroll(element) {
  return element.scrollHeight > (element.clientHeight || 0);
}

export function hasHorizontalScroll(element) {
  return element.scrollWidth > (element.clientWidth || 0);
}
