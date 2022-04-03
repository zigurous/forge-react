import { useEffect } from 'react';
import { getScrollbarWidth } from '../utils';

export default function useModalOverlay(open = false, reflow = true) {
  useEffect(() => {
    if (typeof document !== 'undefined') {
      if (open) {
        if (reflow) {
          const scrollbarWidth = getScrollbarWidth();

          if (scrollbarWidth > 0) {
            document.body.style.paddingRight = `${scrollbarWidth}px`;
          }
        }

        document.body.classList.add('overflow-hidden');
      } else {
        document.body.classList.remove('overflow-hidden');

        if (reflow) {
          document.body.style.paddingRight = null;
        }
      }
    }
  }, [open, reflow]);
}
