'use client';

import { useTheme } from "../lib/theme-context";
import { useEffect } from "react";

export default function ThemeScript() {
  const { theme } = useTheme();
  
  useEffect(() => {
    const root = document.documentElement;
    root.setAttribute('data-theme', theme);
  }, [theme]);
  
  return null;
}
