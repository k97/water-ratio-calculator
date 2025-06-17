'use client';

import { useTheme } from '../lib/theme-context';
import { useEffect, useState } from 'react';
import { Suspense } from 'react';

// We need to wrap the actual implementation in Suspense to avoid hydration issues
export default function ThemeApplier() {
  return (
    <Suspense fallback={null}>
      <ThemeApplierInner />
    </Suspense>
  );
}

function ThemeApplierInner() {
  const { theme } = useTheme();
  const [isMounted, setIsMounted] = useState(false);
  
  // Only run after component is mounted on client
  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted) return;
    
    try {
      const html = document.documentElement;
      
      // Set data attribute for theme
      html.setAttribute('data-theme', theme);
      
      // Don't use classList to avoid hydration issues
      if (theme === 'dark') {
        document.body.classList.add('dark-mode');
        document.body.classList.remove('light-mode');
      } else {
        document.body.classList.add('light-mode');
        document.body.classList.remove('dark-mode');
      }
    } catch (e) {
      console.error('Error applying theme:', e);
    }
  }, [theme, isMounted]);

  return null;
}
