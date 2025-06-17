import React from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import CalculateIcon from '@mui/icons-material/Calculate';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import pkg from '../package.json';

const AppFooter: React.FC = () => {
  const pathname = usePathname();
  const isAboutPage = pathname === '/about';
  
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
      <Link href={isAboutPage ? "/" : "/about"} style={{ textDecoration: 'none' }}>
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
            {isAboutPage ? 'Calculator' : 'About'}
          </Typography>
        </Box>
      </Link>
      
      <Typography variant="caption" color="text.secondary">
        Experimental Build v{pkg.version}
      </Typography>
    </Box>
  );
};

export default AppFooter;
