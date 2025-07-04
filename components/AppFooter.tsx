import React, { useState, useEffect } from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import CalculateIcon from '@mui/icons-material/Calculate';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import pkg from '../package.json';
import { trackNavigationClick } from '../lib/analytics';

const AppFooter: React.FC = () => {
  const pathname = usePathname();
  const [isClient, setIsClient] = useState(false);
  
  useEffect(() => {
    setIsClient(true);
  }, []);
  
  // Prevent hydration mismatch by not rendering pathname-dependent content on server
  const isAboutPage = isClient ? pathname === '/info' : false;
  
  return (
    <Box sx={{
        width: '100%',
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center',
        mt: 'auto', 
        pt: 2,
        px: 2
        }}>
      <Link 
        href={isAboutPage ? "/" : "/info"} 
        style={{ textDecoration: 'none' }}
        onClick={() => trackNavigationClick(isAboutPage ? 'home' : 'info')}
      >
        <Box sx={{ 
          display: 'flex', 
          alignItems: 'center',
          color: '#666',
          '&:hover': {
            color: '#333'
          }
        }}>
          <IconButton sx={{ p: 0.5, mr: 0.5 }}>
            {isAboutPage ? <CalculateIcon /> : <InfoOutlinedIcon />}
          </IconButton>
          <Typography variant="body2">
            {isAboutPage ? 'Calculator' : 'Info'}
          </Typography>
        </Box>
      </Link>
      
      <Typography variant="body2" color="text.secondary">
        Experimental Build v{pkg.version}
      </Typography>
    </Box>
  );
};

export default AppFooter;
