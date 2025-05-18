import classNames from 'classnames';
import React from 'react';
import { usePanAndZoom } from '../hooks';

export interface PanAndZoomTransformProps {
  children: (panning: React.RefObject<boolean>) => React.ReactNode;
  className?: string;
  container: React.RefObject<HTMLElement>;
}

export default function PanAndZoomTransform({
  children,
  className,
  container,
}: PanAndZoomTransformProps) {
  const [{ panX, panY, zoom }, panning] = usePanAndZoom(container);
  return (
    <div
      className={classNames(className, 'w-full h-full')}
      style={{
        transform: `translate(${panX}px, ${panY}px) scale(${zoom})`,
        transformOrigin: '0 0',
      }}
    >
      {children(panning)}
    </div>
  );
}
