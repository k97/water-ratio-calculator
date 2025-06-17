import React from 'react';
import { Paper, Box, Typography, useTheme as useMuiTheme } from '@mui/material';
import { useTheme } from '../lib/theme-context';

interface ResultCardProps {
  title: string;
  subtitle?: string;
  value: string | number;
  unit?: string;
  subValue?: string;
  backgroundColor?: string;
}

const ResultCard: React.FC<ResultCardProps> = ({ 
  title, 
  subtitle, 
  value, 
  unit, 
  subValue, 
  backgroundColor = '#EEAEFF'
}) => {
  // Use theme context to get current theme
  const { theme } = useTheme();
  const [isMounted, setIsMounted] = React.useState(false);
  
  React.useEffect(() => {
    setIsMounted(true);
  }, []);
  
  // Default to light during SSR to prevent hydration mismatch
  const isDarkMode = isMounted ? theme === 'dark' : false;
  
  // Use dark mode color if in dark mode
  const bgColor = isDarkMode ? '#501F6B' : backgroundColor;
  
  return (
  <Paper 
    elevation={0} 
    sx={{ 
      p: 3,
      borderRadius: 8,
      mb: 2,
      backgroundColor: bgColor,
      minHeight: '100px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      color: isDarkMode ? '#ffffff' : '#551374'
    }}
  >
    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <Box>
        <Typography variant="h5" sx={{ 
            fontWeight: 600,
            fontSize: '1.5rem',
            letterSpacing: '-0.05em',
            opacity: 0.9,
            }}>
          {title}
        </Typography>
        {subtitle && (
          <Typography variant="body2" color="text.secondary" sx={{

            opacity: 0.8,
          }}>
            {subtitle}
          </Typography>
        )}
      </Box>
      <Box sx={{ textAlign: 'right' }}>
        <Typography variant="h4" sx={{ 
            fontWeight: 600,
            fontSize: '1.65rem',
            letterSpacing: '-0.02em',
            lineHeight: 1.2,
            }}>
          {value} {unit}
        </Typography>
        {subValue && (
          <Typography variant="caption" color="text.secondary"
          sx={{
            fontSize: '0.975rem',
            fontWeight: 400,
            opacity: 0.9,
        }}>
            {subValue}
          </Typography>
        )}
      </Box>
    </Box>
  </Paper>
);
}

export default ResultCard;
