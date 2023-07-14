import classNames from 'classnames';
import PropTypes from 'prop-types';
import React, { useEffect, useRef } from 'react';
import { highlightElement } from '../utils/syntax';

function CodeBlock({ children, language = 'none' }) {
  const className = classNames({ [`language-${language}`]: language });
  const ref = useRef();

  useEffect(() => {
    if (ref.current) {
      const nodes = ref.current.querySelectorAll('pre code');
      nodes.forEach((node) => highlightElement(node));
    }
  }, [children, language, ref]);

  return (
    <pre className={className} ref={ref}>
      <code className={className}>{children}</code>
    </pre>
  );
}

CodeBlock.propTypes = {
  children: PropTypes.node,
  language: PropTypes.string.isRequired,
};

export default CodeBlock;
