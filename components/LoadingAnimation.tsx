"use client";

import React, { useState, useEffect } from 'react';
import { Box, keyframes } from '@mui/system';
import Image from 'next/image';

// Define the bounce animation keyframes
const bounce = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px);
  }
`;

// Define a rotation animation for additional effect (optional)
const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

interface LoadingAnimationProps {
  size?: number;
  isGlobal?: boolean;
  delay?: number; // Delay in milliseconds before hiding the loader
  forceShow?: boolean; // Force the loader to show regardless of state
}

const LoadingAnimation: React.FC<LoadingAnimationProps> = ({ 
  size = 120, 
  isGlobal = false, 
  delay = 0,
  forceShow = false 
}) => {
  const [showLoader, setShowLoader] = useState(true);
  
  useEffect(() => {
    // If no delay is set or forceShow is true, keep showing
    if (delay === 0 || forceShow) return;
    
    const timer = setTimeout(() => {
      setShowLoader(false);
    }, delay);
    
    return () => clearTimeout(timer);
  }, [delay, forceShow]);
  
  if (!showLoader && !forceShow) return null;
  return (
    <Box
      sx={{
        width: '100%',
        height: isGlobal ? '100vh' : '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 4,
        position: isGlobal ? 'fixed' : 'relative',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: isGlobal ? 9999 : 'auto',
      }}
    >
      <Box
        sx={{
          animation: `${bounce} 1.5s ease infinite`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Image
          src="/icons/icon-base.svg"
          width={size}
          height={size}
          alt="Loading"
          priority
          style={{
            borderRadius: '100%',
            // filter: 'drop-shadow(0 4px 8px rgba(0, 0, 0, 0.2))',
          }}
        />
      </Box>
    </Box>
  );
};

export default LoadingAnimation;
