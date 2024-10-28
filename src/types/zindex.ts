export enum ZIndex {
  min = -9999,
  dropdown = 1010,
  sticky = 1020,
  fixed = 1030,
  overlay = 1040,
  menu = 1050,
  modal = 1060,
  popover = 1070,
  tooltip = 1080,
  toast = 1090,
  max = 9999,
}

export type ZIndexToken = keyof typeof ZIndex;
