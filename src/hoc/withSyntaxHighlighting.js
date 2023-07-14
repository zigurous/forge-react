import React, { useEffect } from 'react';
import { highlightAll } from '../utils/syntax';
import getDisplayName from './displayName';

export default function withSyntaxHighlighting(WrappedComponent) {
  const SyntaxHighlighting = (props) => {
    useEffect(() => {
      highlightAll();
    });
    return <WrappedComponent {...props} />;
  };
  SyntaxHighlighting.displayName = getDisplayName(
    'SyntaxHighlighting',
    WrappedComponent
  );
  return SyntaxHighlighting;
}
