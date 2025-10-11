import React, { useEffect, useState } from 'react';
import Tooltip from './Tooltip';
import { useMemoizedRef } from '../hooks';

export type TooltipWrapperProps = {
  tooltip: string | React.ReactNode;
} & React.ComponentProps<'div'>;

export default function TooltipWrapper({
  children,
  tooltip,
  ...rest
}: TooltipWrapperProps) {
  const { ref, Tooltip } = useTooltip<HTMLDivElement>();
  return (
    <div {...rest} ref={ref}>
      {children}
      <Tooltip>{tooltip}</Tooltip>
    </div>
  );
}

interface TooltipObject<T extends HTMLElement> {
  ref: React.RefCallback<T>;
  Tooltip: React.FC<{ children: React.ReactNode }>;
}

export function useTooltip<T extends HTMLElement>(): TooltipObject<T> {
  const [element, ref] = useMemoizedRef<T>();
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    if (element) {
      const onTooltipEnter = () => setHovering(true);
      const onTooltipLeave = () => setHovering(false);
      element.addEventListener('mouseenter', onTooltipEnter);
      element.addEventListener('mouseleave', onTooltipLeave);
      return () => {
        element?.removeEventListener('mouseenter', onTooltipEnter);
        element?.removeEventListener('mouseleave', onTooltipLeave);
      };
    } else {
      setHovering(false);
    }
  }, [element]);

  return {
    ref,
    Tooltip: ({ children }) => (
      <React.Fragment>
        {hovering && <Tooltip element={element}>{children}</Tooltip>}
      </React.Fragment>
    ),
  };
}
