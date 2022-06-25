import Prism from 'prismjs';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-csharp';

export function highlight(text, grammar, language) {
  Prism.highlight(text, grammar, language);
}

export function highlightAll(async, callback) {
  Prism.highlightAll(async, callback);
}

export function highlightAllUnder(container, async, callback) {
  Prism.highlightAllUnder(container, async, callback);
}

export function highlightElement(element, async, callback) {
  Prism.highlightElement(element, async, callback);
}
