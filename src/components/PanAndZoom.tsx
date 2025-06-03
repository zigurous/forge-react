import classNames from 'classnames';
import React, { createContext, useCallback, useContext, useEffect, useRef, useState } from 'react'; // prettier-ignore
import { clamp, getRelativeMousePosition, getWheelDirection } from '../utils';

interface PanAndZoomState {
  panX: number;
  panY: number;
  zoom: number;
}

interface PanAndZoomContextData {
  state: PanAndZoomState;
  panning: React.RefObject<boolean>;
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

const PanAndZoomContext = createContext<PanAndZoomContextData>({
  state: defaultState,
  panning: { current: null },
});

export type PanAndZoomProviderProps = {
  children: (
    state: PanAndZoomState,
    panning: React.RefObject<boolean>,
    resetMap: () => void,
  ) => React.ReactNode;
  settings?: typeof defaultSettings;
} & Omit<React.ComponentPropsWithoutRef<'div'>, 'children'>;

export default React.forwardRef(function PanAndZoomProvider(
  { children, settings = defaultSettings, ...rest }: PanAndZoomProviderProps,
  forwardRef: React.ForwardedRef<HTMLDivElement>,
) {
  const [state, setState] = useState<PanAndZoomState>(defaultState);
  const mousedown = useRef<boolean>(false);
  const panning = useRef<boolean>(false);
  const timeout = useRef<NodeJS.Timeout>(undefined);
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
    if (typeof window === 'undefined') return;

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

    const handleTouchPan = (e: TouchEvent) => {
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

    document.body.addEventListener('mouseup', handleMouseUp);
    document.body.addEventListener('mousemove', handlePan);

    if (settings.touchSupport) {
      document.body.addEventListener('touchend', handleTouchEnd);
      document.body.addEventListener('touchmove', handleTouchPan);
    }

    return () => {
      document.body.removeEventListener('mouseup', handleMouseUp);
      document.body.removeEventListener('mousemove', handlePan);
      document.body.removeEventListener('touchend', handleTouchEnd);
      document.body.removeEventListener('touchmove', handleTouchPan);
    };
  }, [settings.touchSupport]);

  return (
    <PanAndZoomContext.Provider value={{ state, panning }}>
      <div
        {...rest}
        ref={forwardRef}
        onMouseDown={e => {
          if (e.button === 0 || e.button === 1) {
            if (timeout.current) {
              clearTimeout(timeout.current);
            }
            timeout.current = setTimeout(() => {
              mousedown.current = true;
            }, delay);
          }
        }}
        onTouchStart={e => {
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
        }}
        onWheel={e => {
          const target = e.currentTarget;
          setState(state => {
            const zoomDirection = getWheelDirection(e.nativeEvent);
            const zoomChange = zoomDirection * settings.zoomSpeed;
            const zoom = clamp(
              state.zoom + zoomChange,
              settings.minZoom,
              settings.maxZoom,
            );
            const { x, y } = getRelativeMousePosition(e.nativeEvent, target);
            const panX = x - (x - state.panX) * (zoom / state.zoom);
            const panY = y - (y - state.panY) * (zoom / state.zoom);
            return { panX, panY, zoom };
          });
        }}
      >
        {children(state, panning, resetMap)}
      </div>
    </PanAndZoomContext.Provider>
  );
});

export function PanAndZoomTransform({
  children,
  className,
  style,
  ...rest
}: React.ComponentPropsWithoutRef<'div'>) {
  const { state } = useContext(PanAndZoomContext);
  return (
    <div
      className={classNames(className, 'w-full h-full')}
      style={{
        ...style,
        transform: `translate(${state.panX}px, ${state.panY}px) scale(${state.zoom})`,
        transformOrigin: '0 0',
      }}
      {...rest}
    >
      {children}
    </div>
  );
}
