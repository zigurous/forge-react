'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
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
  touchSupport: true,
};

export function usePanAndZoom(
  container: React.RefObject<HTMLElement>,
  settings = defaultSettings,
): [PanAndZoomState, React.RefObject<boolean>, () => void] {
  const [state, setState] = useState<PanAndZoomState>(defaultState);
  const mousedown = useRef<boolean>(false);
  const panning = useRef<boolean>(false);
  const timeout = useRef<NodeJS.Timeout>();
  const touchIdentifier = useRef(-1);
  const touchPosition = useRef({ x: 0, y: 0 });

  const resetMap = useCallback(() => {
    if (timeout.current) {
      clearTimeout(timeout.current);
    }
    timeout.current = undefined;
    mousedown.current = false;
    panning.current = false;
    touchIdentifier.current = -1;
    touchPosition.current = { x: 0, y: 0 };
    setState(defaultState);
  }, []);

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

  // Handle touch events
  useEffect(() => {
    if (!container.current) return;
    if (!settings.touchSupport) return;
    if (typeof window === 'undefined') return;

    const handleTouchStart = (e: TouchEvent) => {
      if (e.touches.length === 1) {
        const touch = e.touches[0];
        touchIdentifier.current = touch.identifier;
        touchPosition.current = {
          x: touch.clientX,
          y: touch.clientY,
        };
        if (timeout.current) {
          clearTimeout(timeout.current);
        }
        timeout.current = setTimeout(() => {
          mousedown.current = true;
        }, delay);
      }
    };

    const handleTouchEnd = (e: TouchEvent) => {
      if (e.touches.length === 0) {
        touchIdentifier.current = -1;
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

    const handlePan = (e: TouchEvent) => {
      if (mousedown.current && e.touches.length === 1) {
        const touch = e.touches[0];
        if (touch.identifier === touchIdentifier.current) {
          const x = touch.clientX;
          const y = touch.clientY;
          const dx = x - touchPosition.current.x;
          const dy = y - touchPosition.current.y;
          touchPosition.current = { x, y };
          panning.current = true;
          setState(state => ({
            panX: state.panX + dx,
            panY: state.panY + dy,
            zoom: state.zoom,
          }));
        }
      }
    };

    container.current.addEventListener('touchstart', handleTouchStart);
    document.body.addEventListener('touchend', handleTouchEnd);
    document.body.addEventListener('touchmove', handlePan);

    return () => {
      container.current?.removeEventListener('touchstart', handleTouchStart);
      document.body.removeEventListener('touchend', handleTouchEnd);
      document.body.removeEventListener('touchmove', handlePan);
    };
  }, [
    container,
    settings.minZoom,
    settings.maxZoom,
    settings.zoomSpeed,
    settings.touchSupport,
  ]);

  return [state, panning, resetMap];
}
