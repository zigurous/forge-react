import { useEffect, useState } from 'react';
import { getScrollbarWidth } from '../utils/scrolling';

const useModal = (open = false, reflow = false) => {
  const [isOpen, setIsOpen] = useState(Boolean(open));

  useEffect(() => {
    if (isOpen) {
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
  }, [isOpen, reflow]);

  return [isOpen, setIsOpen];
};

export default useModal;
