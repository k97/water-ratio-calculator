'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

export type ThemeMode = 'light' | 'dark';

interface ThemeContextType {
  theme: ThemeMode;
  setTheme: (theme: ThemeMode) => void;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  // Start with a default theme to avoid hydration mismatch
  // The actual theme will be set in useEffect after client-side mount
  const [theme, setTheme] = useState<ThemeMode>('light');
  const [isMounted, setIsMounted] = useState(false);

  // Mark when component has mounted on client
  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    // Only run on client-side to prevent hydration mismatch
    if (!isMounted) return;

    try {
      // Load theme from localStorage if available
      const savedTheme = localStorage.getItem('theme') as ThemeMode | null;
      if (savedTheme && ['light', 'dark'].includes(savedTheme)) {
        setTheme(savedTheme);
      } else {
        // Check system preference if no saved theme
        const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        setTheme(systemPrefersDark ? 'dark' : 'light');
      }
    } catch (e) {
      console.error('Error loading theme from localStorage:', e);
    }
  }, [isMounted]);

  useEffect(() => {
    // Only run on client-side and after first mount
    if (!isMounted) return;
    
    try {
      // Save theme to localStorage
      localStorage.setItem('theme', theme);
    } catch (e) {
      console.error('Error saving theme to localStorage:', e);
    }
  }, [theme, isMounted]);

  // Toggle between light and dark mode
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const value = {
    theme,
    setTheme,
    toggleTheme
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
