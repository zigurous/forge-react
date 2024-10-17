export function bindEvent(
  element: EventTarget,
  eventName: string,
  eventHandler: EventListenerOrEventListenerObject,
) {
  if (element.addEventListener) {
    element.addEventListener(eventName, eventHandler);
  }
}

export function unbindEvent(
  element: EventTarget,
  eventName: string,
  eventHandler: EventListenerOrEventListenerObject,
) {
  if (element.removeEventListener) {
    element.removeEventListener(eventName, eventHandler);
  }
}

export function keyHandler<T>(
  key: string,
  callback: Function,
): React.KeyboardEventHandler<T> {
  return (event: React.KeyboardEvent<T>) => {
    if (event.defaultPrevented) {
      return;
    }

    let handled = false;
    if (event.key === key) {
      handled = true;
      callback(event);
    }

    if (handled) {
      event.preventDefault();
    }
  };
}

export function enterKeyHandler<T>(
  callback: Function,
): React.KeyboardEventHandler<T> {
  return keyHandler('Enter', callback);
}
