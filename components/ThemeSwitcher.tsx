'use client';

import React from 'react';
import { IconButton, Tooltip } from '@mui/material';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { useTheme } from '../lib/theme-context';

const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useTheme();
  const [isMounted, setIsMounted] = React.useState(false);
  
  React.useEffect(() => {
    setIsMounted(true);
  }, []);
  
  // Default to light during SSR to prevent hydration mismatch
  const isDarkMode = isMounted ? theme === 'dark' : false;
  
  const handleToggleTheme = () => {
    toggleTheme();
  };
  
  // Don't render until client-side to avoid hydration mismatch
  if (!isMounted) {
    return (
      <IconButton size="small" sx={{ ml: 1, color: 'text.secondary' }} disabled>
        <DarkModeIcon fontSize="small" />
      </IconButton>
    );
  }

  return (
    <Tooltip title={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}>
      <IconButton
        onClick={handleToggleTheme}
        size="small"
        sx={{ 
          ml: 1,
          color: 'text.secondary',
          transition: 'all 0.3s ease',
          transform: isDarkMode ? 'rotate(180deg)' : 'rotate(0deg)',
          '&:hover': {
            transform: isDarkMode ? 'rotate(150deg) scale(1.1)' : 'rotate(30deg) scale(1.1)',
          },
        }}
        aria-label="Toggle light/dark theme"
      >
        {isDarkMode ? (
          <LightModeIcon fontSize="small" />
        ) : (
          <DarkModeIcon fontSize="small" />
        )}
      </IconButton>
    </Tooltip>
  );
};

export default ThemeSwitcher;
