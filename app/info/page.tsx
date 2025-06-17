'use client';

import React from 'react';
import { Container, Typography, Paper, Box, Button } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import Link from 'next/link';
import AppFooter from '../../components/AppFooter';
import { trackNavigationClick } from '../../lib/analytics';

export default function About() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        p: 1.5,
      }}
    >
      <Container
        maxWidth="sm"
        sx={{
          display: "flex",
          flexDirection: "column",
          backgroundColor: "#FED9FE",
          borderRadius: 8,
          p: 2,
        }}
      >
        {/* About Header - Similar to AppHeader */}
        <Box sx={{ 
          display: 'flex',
          flexDirection: 'column',
          mb: 2,
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
              backgroundImage: `url('/star.svg')`,
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
            <Box sx={{ fontSize: '2.25rem', zIndex: 1, position: 'relative' }}>👨‍🍳⏱️</Box>
          </Box>
          <Typography variant="h3" component="h1" sx={{ 
            fontSize: '2.5rem',
            letterSpacing: '-0.03em', 
            fontWeight: 1000, 
            color: '#3e2723', 
            fontFamily: '--apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif',
            fontStretch: 'expanded',
            lineHeight: 1.1,
            mb: 1
          }}>
            Info
          </Typography>
        </Box>

        {/* Content Cards */}
        <Paper 
          elevation={0} 
          sx={{ 
            p: 3,
            borderRadius: 8,
            mb: 2,
            backgroundColor: 'rgba(255, 255, 255, 0.9)',
          }}
        >
          <Typography variant="body1" sx={{
            fontSize: '1.125rem',
            color: '#484848',
            lineHeight: 1.6,
            mb: 2
          }}>
            This is a simple water ratio calculator for cooking by <a href="http://rkarthik.co" target='_blank'>Karthik</a>. 
            It helps you determine the right amount of water to use based on the ingredient and its cooking method, and saves time googling or screaming at your phone. 😉
          </Typography>

          <Typography variant="body1" sx={{
            fontSize: '1.125rem',
            color: '#484848',
            lineHeight: 1.6,
            mb: 2
          }}>
            This is also a fun design project to explore the new Material Design Expressive and 
            create something visually appealing while maintaining functionality. 
          </Typography>

          <Typography variant="body1" sx={{
            fontSize: '1.125rem',
            color: '#484848',
            lineHeight: 1.6,
            mt: 2,
            mb: 2
          }}>
            <strong>App Source:</strong>
            <a href="https://github.com/k97/water-ratio-calculator" target="_blank" rel="noopener noreferrer">
              github.com/k97/water-ratio-calculator
            </a>
          </Typography>


          <Typography variant="body1" sx={{
            fontSize: '1.125rem',
            color: '#484848',
            lineHeight: 1.6,
          }}>
            <strong>Report any issues or adding simple ingredients here:</strong>
            <a href="https://github.com/k97/water-ratio-calculator/issues" target="_blank" rel="noopener noreferrer">
              github.com/k97/water-ratio-calculator/issues
            </a> 
          </Typography>



        </Paper>

        {/* Home Button */}
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 1, mb: 1 }}>
          <Button
            component={Link}
            href="/"
            variant="contained"
            startIcon={<HomeIcon />}
            onClick={() => trackNavigationClick('home_from_about')}
            sx={{
              backgroundColor: '#FFFCFF',
              color: '#812AC7',
              borderRadius: 8,
              px: 4,
              py: 1.5,
              fontSize: '1.1rem',
              fontWeight: 600,
              boxShadow: '0 1px 4px rgba(0,0,0,0.08)',
              textTransform: 'none',
              '&:hover': {
                backgroundColor: '#f8f9fa',
                boxShadow: '0 6px 25px rgba(0,0,0,0.12)'
              }
            }}
          >
            Go to Calculator
          </Button>
        </Box>

      </Container>
      
      <Container maxWidth="sm" sx={{ 
        display: 'flex',
        flexDirection: 'column',
      }}>
        <AppFooter />
      </Container>
    </Box>
  );
}
