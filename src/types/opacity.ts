export enum Opacity {
  transparent = 0,
  subtle = 0.12,
  disabled = 0.38,
  inactive = 0.62,
  scrim = 0.54,
  active = 0.87,
  opaque = 1,
}

export type OpacityKey = keyof typeof Opacity;
