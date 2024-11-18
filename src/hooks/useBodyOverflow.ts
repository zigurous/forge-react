'use client';

import { useEffect } from 'react';
import { getScrollbarWidth } from '../utils';

export function useBodyOverflow(
  hidden = false,
  adjustForScrollbarReflow = true,
) {
  useEffect(() => {
    if (typeof document !== 'undefined') {
      if (hidden) {
        if (adjustForScrollbarReflow) {
          const scrollbarWidth = getScrollbarWidth();
          if (scrollbarWidth > 0) {
            document.body.style.paddingRight = `${scrollbarWidth}px`;
          }
        }
        document.body.classList.add('overflow-hidden');
      } else {
        document.body.classList.remove('overflow-hidden');
        if (adjustForScrollbarReflow) {
          document.body.style.paddingRight = '';
        }
      }
    }
  }, [hidden, adjustForScrollbarReflow]);
}
