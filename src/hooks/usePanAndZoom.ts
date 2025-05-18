'use client';

import { useEffect, useRef, useState } from 'react';
import { clamp, getRelativeMousePosition, getWheelDirection } from '../utils';

interface PanAndZoomState {
  panX: number;
  panY: number;
  zoom: number;
}

const delay = (1 / 16) * 1000;

const defaultState: PanAndZoomState = {
  panX: 0,
  panY: 0,
  zoom: 1,
};

const defaultSettings = {
  minZoom: 0.5,
  maxZoom: 2,
  zoomSpeed: 0.1,
};

export function usePanAndZoom(
  container: React.RefObject<HTMLElement>,
  settings = defaultSettings,
): [PanAndZoomState, React.RefObject<boolean>] {
  const [state, setState] = useState<PanAndZoomState>(defaultState);
  const mousedown = useRef<boolean>(false);
  const panning = useRef<boolean>(false);
  const timeout = useRef<NodeJS.Timeout>();

  useEffect(() => {
    if (!container.current) return;
    if (typeof window === 'undefined') return;

    const handleMouseDown = (e: MouseEvent) => {
      if (e.button === 0 || e.button === 1) {
        if (timeout.current) {
          clearTimeout(timeout.current);
        }
        timeout.current = setTimeout(() => {
          mousedown.current = true;
        }, delay);
      }
    };

    const handleMouseUp = (e: MouseEvent) => {
      if (e.button === 0 || e.button === 1) {
        mousedown.current = false;
        if (timeout.current) {
          clearTimeout(timeout.current);
        }
        if (panning.current) {
          timeout.current = setTimeout(() => {
            panning.current = false;
          }, delay);
        }
      }
    };

    const handlePan = (e: MouseEvent) => {
      if (mousedown.current) {
        panning.current = true;
        setState(state => ({
          panX: state.panX + e.movementX,
          panY: state.panY + e.movementY,
          zoom: state.zoom,
        }));
      }
    };

    const handleZoom = (e: WheelEvent) => {
      setState(state => {
        const zoomDirection = getWheelDirection(e);
        const zoomChange = zoomDirection * settings.zoomSpeed;
        const zoom = clamp(
          state.zoom + zoomChange,
          settings.minZoom,
          settings.maxZoom,
        );

        const { x, y } = getRelativeMousePosition(e, container.current);
        const panX = x - (x - state.panX) * (zoom / state.zoom);
        const panY = y - (y - state.panY) * (zoom / state.zoom);

        return { panX, panY, zoom };
      });
    };

    container.current.addEventListener('wheel', handleZoom);
    container.current.addEventListener('mousedown', handleMouseDown);
    document.body.addEventListener('mouseup', handleMouseUp);
    document.body.addEventListener('mousemove', handlePan);

    return () => {
      container.current?.removeEventListener('wheel', handleZoom);
      container.current?.removeEventListener('mousedown', handleMouseDown);
      document.body.removeEventListener('mouseup', handleMouseUp);
      document.body.removeEventListener('mousemove', handlePan);
    };
  }, [container, settings.minZoom, settings.maxZoom, settings.zoomSpeed]);

  return [state, panning];
}
