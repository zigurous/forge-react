export function getDisplayName<P extends object>(
  componentName: string,
  WrappedComponent: React.ComponentType<P>,
): string {
  const wrappedDisplayName = getWrappedDisplayName(WrappedComponent);
  return `${componentName}(${wrappedDisplayName})`;
}

export function getWrappedDisplayName<P extends object>(
  WrappedComponent: React.ComponentType<P>,
): string {
  return WrappedComponent.displayName || WrappedComponent.name || 'Component';
}
