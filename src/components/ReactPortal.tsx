'use client';

import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

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

  useEffect(() => {
    if (typeof document !== 'undefined') {
      setRoot(document.querySelector(rootElement));
    } else {
      setRoot(null);
    }
  }, [rootElement]);

  if (!root) return null;
  return <>{createPortal(children, root, key)}</>;
}
