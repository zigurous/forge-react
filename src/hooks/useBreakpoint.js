import useMediaQuery from './useMediaQuery';

const sizes = {
  sm: 576,
  small: 576,
  md: 768,
  medium: 768,
  lg: 992,
  large: 992,
  xl: 1200,
  extraLarge: 1200,
};

export default function useBreakpoint(maxWidth) {
  return useMediaQuery(`(min-width: ${maxWidth})`);
}

export function useBreakpointMax(maxWidth) {
  return useMediaQuery(`(max-width: ${maxWidth})`);
}

export function useSizeClass(sizeClass) {
  return useMediaQuery(`(min-width: ${sizes[sizeClass]}px)`);
}

export function useSizeClassMax(sizeClass) {
  return useMediaQuery(`(max-width: ${sizes[sizeClass] - 1}px)`);
}