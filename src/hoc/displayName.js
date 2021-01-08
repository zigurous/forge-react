export function getWrappedDisplayName(WrappedComponent) {
  return WrappedComponent.displayName || WrappedComponent.name || 'Component';
}

export default function getDisplayName(componentName, WrappedComponent) {
  const wrappedDisplayName = getWrappedDisplayName(WrappedComponent);
  return `${componentName}(${wrappedDisplayName})`;
}
