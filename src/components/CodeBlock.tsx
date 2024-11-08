import classNames from 'classnames';
import React, { useEffect, useRef } from 'react';
import { highlightElement } from '../utils/syntax';
import Button from './Button';

export type CodeBlockProps = {
  bordered?: boolean;
  inline?: boolean;
  language: string;
  showCopyButton?: boolean;
} & React.ComponentPropsWithRef<'code'>;

export default function CodeBlock({
  bordered = false,
  children,
  className,
  inline = false,
  language,
  showCopyButton = false,
  ...rest
}: CodeBlockProps) {
  const ref = useRef<HTMLPreElement>(null);

  useEffect(() => {
    if (ref.current) {
      const nodes = ref.current.querySelectorAll('pre code');
      nodes.forEach(node => highlightElement(node));
    }
  }, [children, language, ref]);

  if (inline) {
    return (
      <code
        className={classNames('inline-code', {
          [`language-${language}`]: language,
          border: bordered,
        })}
        {...rest}
      >
        {children}
      </code>
    );
  }

  return (
    <pre
      className={classNames(
        'code-block',
        { [`language-${language}`]: language, border: bordered },
        className,
      )}
      ref={ref}
    >
      <code
        className={classNames({ [`language-${language}`]: language })}
        {...rest}
      >
        {children}
      </code>
      {showCopyButton && (
        <Button
          className="code-block__copy"
          icon="copy"
          iconAlignment="only"
          onClick={() => {
            if (navigator && navigator.clipboard) {
              navigator.clipboard.writeText(children as string);
            }
          }}
          variant="text"
        />
      )}
    </pre>
  );
}
