import React, { useEffect } from 'react';
import { highlightAll } from '../utils/syntax';

export default function withSyntaxHighlighting(WrappedComponent) {
  const SyntaxHighlighting = (props) => {
    useEffect(() => {
      highlightAll();
    });
    return <WrappedComponent {...props} />;
  };
  return SyntaxHighlighting;
}
