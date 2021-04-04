export function bindEvent(element, eventName, eventHandler) {
  if (element.addEventListener) {
    element.addEventListener(eventName, eventHandler);
  } else if (element.attachEvent) {
    element.attachEvent(`on${eventName}`, eventHandler);
  }
}

export function unbindEvent(element, eventName, eventHandler) {
  if (element.removeEventListener) {
    element.removeEventListener(eventName, eventHandler);
  } else if (element.detachEvent) {
    element.detachEvent(`on${eventName}`, eventHandler);
  }
}

export function enterKeyHandler(callback = () => {}) {
  return (event) => {
    if (event.defaultPrevented) {
      return;
    }

    let handled = false;
    if (event.key === 'Enter') {
      handled = true;
      callback(event);
    }

    if (handled) {
      event.preventDefault();
    }
  };
}
