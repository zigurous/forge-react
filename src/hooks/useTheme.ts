import { createContext, useCallback } from 'react';
import { useLocalStorage } from './useLocalStorage';
import type { Theme } from '../types';

type ThemeContextType = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
};

const defaultThemeContext: ThemeContextType = {
  theme: 'light',
  setTheme: () => {},
  toggleTheme: () => {},
};

export const ThemeContext = createContext(defaultThemeContext);

export function useTheme(
  defaultTheme: Theme = 'light',
): [Theme, (theme: Theme) => void, () => void] {
  const [theme, setTheme] = useLocalStorage('theme', defaultTheme);

  const toggleTheme = useCallback(() => {
    const toggled = theme === 'dark' ? 'light' : 'dark';
    setTheme(toggled);
  }, [theme]);

  if (typeof window !== 'undefined') {
    if (document && document.documentElement) {
      document.documentElement.style.setProperty('color-scheme', theme);
    }
  }

  return [theme ?? defaultTheme, setTheme, toggleTheme];
}
