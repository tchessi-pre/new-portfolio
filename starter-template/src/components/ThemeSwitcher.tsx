'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';

export const ThemeSwitcher = () => {
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Ensure component is mounted to avoid hydration issues
  useEffect(() => {
    setMounted(true);
  }, []);

  // Handle initial theme setup
  useEffect(() => {
    if (mounted) {
      const currentTheme = theme === 'system' ? systemTheme : theme;
      document.documentElement.classList.toggle('dark', currentTheme === 'dark');
    }
  }, [mounted, theme, systemTheme]);

  if (!mounted) return null;

  const currentTheme = theme === 'system' ? systemTheme : theme;

  return (
    <button
      onClick={() => setTheme(currentTheme === 'light' ? 'dark' : 'light')}
      className="p-2 rounded-full transition-colors duration-300 hover:bg-orange-500/10 dark:hover:bg-sky-500/10 hover:text-orange-500 dark:hover:text-sky-500 border-2 border-orange-500/20 dark:border-sky-500/20 text-gray-900 dark:text-white"
      aria-label="Toggle theme"
    >
      {currentTheme === 'light' ? <Moon size={24} /> : <Sun size={24} />}
    </button>
  );
};
