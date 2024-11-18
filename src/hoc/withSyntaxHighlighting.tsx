'use client';

import React, { useEffect } from 'react';
import { getDisplayName, highlightAll } from '../utils';

export function withSyntaxHighlighting<P extends object>(
  WrappedComponent: React.ComponentType<P>,
) {
  const SyntaxHighlighting = (props: P) => {
    useEffect(() => {
      highlightAll();
    });
    return <WrappedComponent {...props} />;
  };
  SyntaxHighlighting.displayName = getDisplayName(
    'SyntaxHighlighting',
    WrappedComponent,
  );
  return SyntaxHighlighting;
}
