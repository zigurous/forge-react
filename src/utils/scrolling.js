export function getScrollbarWidth() {
  return window.innerWidth - document.documentElement.clientWidth;
}

export function hasVerticalScroll(element) {
  return element.scrollHeight > element.clientHeight;
}

export function hasHorizontalScroll(element) {
  return element.scrollWidth > element.clientWidth;
}
