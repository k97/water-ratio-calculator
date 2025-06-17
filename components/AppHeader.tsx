import React from 'react';
import { Box, Typography, useTheme as useMuiTheme } from '@mui/material';
import { useTheme } from '../lib/theme-context';

const AppHeader: React.FC = () => {
  const muiTheme = useMuiTheme();
  const { theme } = useTheme();
  const [isMounted, setIsMounted] = React.useState(false);
  
  React.useEffect(() => {
    setIsMounted(true);
  }, []);
  
  // Use a safe default during server-rendering and initial client render
  const isDarkMode = isMounted ? theme === 'dark' : false;
  
  return (
    <Box sx={{ 
      display: 'flex',
      flexDirection: 'column',
      mb: 2,
      color: isDarkMode ? '#ffffff' : 'inherit',
    }}>
      <Box 
        component="div" 
        sx={{ 
          width: 120, 
          height: 120,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: '50%',
          mt: 15,
          backgroundImage: isDarkMode ? `url('/star-dark.svg')` : `url('/star.svg')`,
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          color: 'white',
          mb: 3,
          position: 'relative',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '60%',
            height: '60%',
          }
        }}
      >
        <Box sx={{ 
          fontSize: '2.25rem', 
          zIndex: 1, 
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 1
        }}>👨‍🍳⏱️</Box>
      </Box>
      <Typography variant="h3" component="h1" sx={{ 
        fontSize: '2.5rem',
        letterSpacing: '-0.03em', 
        fontWeight: 1000, 
        color: isDarkMode ? '#FED9FE' : '#3e2723', 
        fontFamily: '--apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif',
        fontStretch: 'expanded',
        lineHeight: 1.1,
        mb: 1
      }}>
        Simple Water Ratio Calculator
      </Typography>
    </Box>
  );
};

export default AppHeader;
