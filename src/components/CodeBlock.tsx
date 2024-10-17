import classNames from 'classnames';
import React, { useEffect, useRef } from 'react';
import { highlightElement } from '../utils/syntax';

export type CodeBlockProps = {
  language: string;
} & React.ComponentPropsWithRef<'code'>;

export default function CodeBlock({
  children,
  className,
  language,
  ...rest
}: CodeBlockProps) {
  const ref = useRef<HTMLPreElement>(null);

  useEffect(() => {
    if (ref.current) {
      const nodes = ref.current.querySelectorAll('pre code');
      nodes.forEach(node => highlightElement(node));
    }
  }, [children, language, ref]);

  return (
    <pre
      className={classNames({ [`language-${language}`]: language }, className)}
      ref={ref}
    >
      <code
        className={classNames({ [`language-${language}`]: language })}
        {...rest}
      >
        {children}
      </code>
    </pre>
  );
}
