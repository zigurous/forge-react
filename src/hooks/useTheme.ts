'use client';

import { createContext, useCallback } from 'react';
import { useLocalStorage } from './useLocalStorage';
import type { BaseThemeToken } from '../types';

type ThemeContextType = {
  theme: BaseThemeToken;
  setTheme: (theme: BaseThemeToken) => void;
  toggleTheme: Function;
};

const defaultThemeContext: ThemeContextType = {
  theme: 'light',
  setTheme: () => {},
  toggleTheme: () => {},
};

export const ThemeContext = createContext(defaultThemeContext);

export function useTheme(
  defaultTheme: BaseThemeToken = 'light',
): [BaseThemeToken, (theme: BaseThemeToken) => void, Function] {
  const [theme, setTheme] = useLocalStorage('theme', defaultTheme);

  const toggleTheme = useCallback(() => {
    const toggled = theme === 'dark' ? 'light' : 'dark';
    setTheme(toggled);
  }, [theme]);

  if (typeof document !== 'undefined' && document.documentElement) {
    document.documentElement.style.setProperty('color-scheme', theme);
  }

  return [theme ?? defaultTheme, setTheme, toggleTheme];
}
