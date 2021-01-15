import { useEffect, useState } from 'react';
import { getScrollbarWidth, hasVerticalScroll } from '../utils/scrolling';

const useModal = (open = false, reflow = false) => {
  const [isOpen, setIsOpen] = useState(Boolean(open));

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('overflow-hidden');

      if (reflow) {
        const canScroll = hasVerticalScroll(document.body);
        const scrollbarWidth = getScrollbarWidth();

        if (canScroll && scrollbarWidth > 0) {
          document.body.style.paddingRight = `${scrollbarWidth}px`;
        }
      }
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
