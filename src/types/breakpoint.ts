export enum Breakpoint {
  sm = 576,
  md = 768,
  lg = 992,
  xl = 1200,
}

export type BreakpointToken = keyof typeof Breakpoint;
