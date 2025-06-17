// Google Analytics utility functions
declare global {
  interface Window {
    gtag: (
      command: 'config' | 'event' | 'js' | 'consent',
      targetId: string | Date,
      config?: Record<string, unknown>
    ) => void;
  }
}

// Track page views
export const trackPageView = (url: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', process.env.NEXT_PUBLIC_GA_ID || '', {
      page_path: url,
    });
  }
};

// Track custom events
export const trackEvent = (action: string, category: string, label?: string, value?: number) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

// Specific tracking functions for your cooking app
export const trackIngredientSelection = (ingredientName: string) => {
  trackEvent('select_ingredient', 'calculator', ingredientName);
};

export const trackCalculation = (ingredient: string, portions: number, cupSize: number, mode: string) => {
  trackEvent('calculate', 'cooking', ingredient, portions);
  trackEvent('measurement_mode', 'calculator', mode);
};

export const trackMeasurementToggle = (newMode: string) => {
  trackEvent('toggle_measurement', 'calculator', newMode);
};

export const trackNavigationClick = (destination: string) => {
  trackEvent('click', 'navigation', destination);
};
