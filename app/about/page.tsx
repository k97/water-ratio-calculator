'use client';

import React from 'react';
import { Container, Typography, Paper, Box } from '@mui/material';
import AppFooter from '../../components/AppFooter';
import pkg from '../../package.json';

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
            About
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
            This was also a fun design project to explore the new Material Design Expressive and 
            create something visually appealing while maintaining functionality.
          </Typography>
          <Typography variant="body1" sx={{
            fontSize: '1.125rem',
            color: '#484848',
            lineHeight: 1.6,
          }}>
            This was also a fun design project to explore the new Material Design Expressive and 
            create something visually appealing while maintaining functionality.
          </Typography>
        </Paper>

        {/* App Source Information */}
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
            mb: 1
          }}>
            <strong>App Source:</strong> v1.-
          </Typography>
          <Typography variant="body1" sx={{
            fontSize: '1.125rem',
            color: '#484848',
            lineHeight: 1.6,
            mb: 2
          }}>
            <strong>App Source:</strong> github.com/k97/
          </Typography>
          <Typography variant="body1" sx={{
            fontSize: '1.125rem',
            color: '#484848',
            lineHeight: 1.6,
          }}>
            Report any issues or adding simple ingredients here:
          </Typography>
        </Paper>

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
