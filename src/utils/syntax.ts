'use client';

import * as Prism from 'prismjs';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-csharp';
import 'prismjs/components/prism-css';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-markup';

export function highlight(
  text: string,
  grammar: Prism.Grammar,
  language: string,
) {
  Prism.highlight(text, grammar, language);
}

export function highlightAll(
  async?: boolean,
  callback?: Prism.HighlightCallback,
) {
  Prism.highlightAll(async, callback);
}

export function highlightAllUnder(
  container: ParentNode,
  async?: boolean,
  callback?: Prism.HighlightCallback,
) {
  Prism.highlightAllUnder(container, async, callback);
}

export function highlightElement(
  element: Element,
  async?: boolean,
  callback?: Prism.HighlightCallback,
) {
  Prism.highlightElement(element, async, callback);
}
