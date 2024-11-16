export function bindEvent(
  element: EventTarget,
  eventName: string,
  eventHandler: EventListenerOrEventListenerObject,
) {
  if (element && element.addEventListener) {
    element.addEventListener(eventName, eventHandler);
  }
}

export function unbindEvent(
  element: EventTarget,
  eventName: string,
  eventHandler: EventListenerOrEventListenerObject,
) {
  if (element && element.removeEventListener) {
    element.removeEventListener(eventName, eventHandler);
  }
}

export function keyboardEventHandler<T>(
  key: string | string[],
  callback: Function,
  preventDefault = true,
): React.KeyboardEventHandler<T> {
  return (event: React.KeyboardEvent<T>) => {
    if (event.defaultPrevented) {
      return;
    }

    let handled = false;

    if (Array.isArray(key)) {
      if (key.includes(event.key)) {
        handled = true;
        callback(event);
      }
    } else if (event.key === key) {
      handled = true;
      callback(event);
    }

    if (handled && preventDefault) {
      event.preventDefault();
    }
  };
}

export function nativeKeyboardEventHandler(
  key: string | string[],
  callback: Function,
  preventDefault = true,
) {
  return (event: KeyboardEvent) => {
    if (event.defaultPrevented) {
      return;
    }

    let handled = false;

    if (Array.isArray(key)) {
      if (key.includes(event.key)) {
        handled = true;
        callback(event);
      }
    } else if (event.key === key) {
      handled = true;
      callback(event);
    }

    if (handled && preventDefault) {
      event.preventDefault();
    }
  };
}
