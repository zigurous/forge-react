import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { useIsomorphicLayoutEffect } from '../hooks';

export interface ReactPortalProps {
  children: React.ReactNode;
  key?: string;
  rootElement?: string;
}

export default function ReactPortal({
  children,
  key,
  rootElement = 'body',
}: ReactPortalProps) {
  const [root, setRoot] = useState<Element | null>(null);

  useIsomorphicLayoutEffect(() => {
    if (typeof document !== 'undefined') {
      setRoot(document.querySelector(rootElement));
    } else {
      setRoot(null);
    }
  }, [rootElement]);

  if (!root) return null;
  return <>{createPortal(children, root, key)}</>;
}
