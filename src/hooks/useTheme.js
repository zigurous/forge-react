import { createContext, useCallback } from 'react';
import useLocalStorage from './useLocalStorage';

export const ThemeContext = createContext({
  theme: 'dark',
  setTheme: () => {},
  toggleTheme: () => {},
});

export default function useTheme(defaultTheme = 'light') {
  const [theme, setTheme] = useLocalStorage('theme', defaultTheme);

  const toggleTheme = useCallback(() => {
    const toggled = theme === 'dark' ? 'light' : 'dark';
    setTheme(toggled);
  }, [theme, setTheme]);

  return [theme, setTheme, toggleTheme];
}
