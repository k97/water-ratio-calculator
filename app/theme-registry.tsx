'use client';

import React from 'react';
import { ThemeProvider as MuiThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider as CustomThemeProvider, useTheme } from '../lib/theme-context';
import MuiEmotionCacheProvider from '../lib/emotion-cache';
import { NoSSR } from '../lib/no-ssr';

export default function ThemeRegistry({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <MuiEmotionCacheProvider>
      <CustomThemeProvider>
        <NoSSR fallback={<SSRTheme>{children}</SSRTheme>}>
          <ClientSideTheme>{children}</ClientSideTheme>
        </NoSSR>
      </CustomThemeProvider>
    </MuiEmotionCacheProvider>
  );
}

// This component renders a consistent light theme during SSR
function SSRTheme({ children }: { children: React.ReactNode }) {
  // Always use light theme for SSR to prevent hydration mismatch
  const theme = createTheme({
    palette: {
      mode: 'light',
      primary: {
        main: '#812AC7',
      },
      secondary: {
        main: '#f5b7e5',
      },
      background: {
        default: '#f9e6f7',
        paper: '#f8d0f3',
      },
      text: {
        primary: '#3e2723',
        secondary: '#666666',
      },
    },
    typography: {
      fontFamily: 'var(--font-barlow)',
    }
  });

  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <div style={{visibility: 'hidden'}}>
        {children}
      </div>
    </MuiThemeProvider>
  );
}

// This component renders the theme based on user preference on the client
function ClientSideTheme({ children }: { children: React.ReactNode }) {
  const { theme: currentTheme } = useTheme();
  const isDarkMode = currentTheme === 'dark';
  
  const theme = createTheme({
    palette: {
      mode: isDarkMode ? 'dark' : 'light',
      primary: {
        main: '#812AC7', // Purple color for the button
      },
      secondary: {
        main: isDarkMode ? '#9e4fb7' : '#f5b7e5', // Dark purple for dark mode
      },
      background: {
        default: isDarkMode ? '#2D1142' : '#f9e6f7', // Dark purple background from image
        paper: isDarkMode ? '#3F1C57' : '#f8d0f3', // Slightly lighter purple for cards
      },
      text: {
        primary: isDarkMode ? '#ffffff' : '#3e2723',
        secondary: isDarkMode ? '#e0e0e0' : '#666666',
      },
    },
    typography: {
      fontFamily: 'var(--font-barlow)',
      h1: {
        fontSize: '2.5rem',
        fontWeight: 500,
      },
      h2: {
        fontSize: '2rem',
        fontWeight: 500,
      },
      h3: {
        fontSize: '1.75rem',
        fontWeight: 500,
      },
      h4: {
        fontSize: '1.5rem',
        fontWeight: 500,
      },
      h5: {
        fontSize: '1.25rem',
        fontWeight: 500,
      },
      h6: {
        fontSize: '1rem',
        fontWeight: 500,
      },
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: 8,
            textTransform: 'none',
          },
        },
      },
      MuiPaper: {
        styleOverrides: {
          root: {
            borderRadius: 8,
          },
        },
      },
    },
  });

  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </MuiThemeProvider>
  );
}
