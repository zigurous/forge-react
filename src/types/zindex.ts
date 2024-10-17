export enum ZIndex {
  dropdown = 1000,
  sticky = 1020,
  fixed = 1030,
  overlay = 1040,
  menu = 1050,
  modal = 1060,
  popover = 1070,
  tooltip = 1080,
  toast = 1090,
  max = 1100,
}

export type ZIndexKey = keyof typeof ZIndex;
