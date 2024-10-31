import { BaseTheme, SupportedTheme } from '../enums';

export type BaseThemeToken = `${BaseTheme}`;
export type SupportedThemeToken = `${SupportedTheme}`;
export type ThemeToken = BaseThemeToken | SupportedThemeToken | string;
