export const enterKeyHandler = (callback = () => {}) => (event) => {
  if (event.defaultPrevented) {
    return;
  }

  var handled = false;
  if (event.key === 'Enter') {
    handled = true;
    callback(event);
  }

  if (handled) {
    event.preventDefault();
  }
};
