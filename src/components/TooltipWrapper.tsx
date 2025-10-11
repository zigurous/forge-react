import React, { useEffect, useState } from 'react';
import Tooltip, { type TooltipProps } from './Tooltip';
import { useMemoizedRef } from '../hooks';

export type TooltipWrapperProps = {
  tooltip: React.ReactNode;
  tooltipProps?: Omit<TooltipProps, 'children' | 'element'>;
} & React.ComponentProps<'div'>;

export default function TooltipWrapper({
  children,
  tooltip,
  tooltipProps,
  ...rest
}: TooltipWrapperProps) {
  const { ref, Tooltip } = useTooltip<HTMLDivElement>();
  return (
    <div {...rest} ref={ref}>
      {children}
      <Tooltip {...tooltipProps}>{tooltip}</Tooltip>
    </div>
  );
}

interface TooltipObject<T extends HTMLElement> {
  ref: React.RefCallback<T>;
  Tooltip: React.FC<Omit<TooltipProps, 'element'>>;
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
    Tooltip: ({ children, ...rest }: Omit<TooltipProps, 'element'>) => (
      <React.Fragment>
        {hovering && (
          <Tooltip {...rest} element={element}>
            {children}
          </Tooltip>
        )}
      </React.Fragment>
    ),
  };
}
