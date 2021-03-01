import { createContext, useState, ReactNode, useEffect } from 'react';
import Cookies from 'js-cookie';

interface ThemeContextData {
  theme: 'light-mode' | 'dark-mode';
  checked: boolean;
  toggleTheme: () => void;
}

interface ThemeProviderProps {
  children: ReactNode;
  theme: 'light-mode' | 'dark-mode';
  checked: boolean;
}

export const ThemeContext = createContext({} as ThemeContextData)

export function ThemeProvider({ children, ...rest }: ThemeProviderProps) {
  const [theme, setTheme] = useState(rest.theme ?? 'light-mode')
  const [checked, setChecked] = useState(rest.checked ?? true);

  useEffect(() => {
    Cookies.set('theme', String(theme))
    Cookies.set('checked', String(checked))

  }, [theme, checked])

  function toggleTheme() {
    setTheme(theme === 'light-mode' ? 'dark-mode' : 'light-mode')
    setChecked(!checked)
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, checked }}>
      {children}
    </ThemeContext.Provider>
  )
}