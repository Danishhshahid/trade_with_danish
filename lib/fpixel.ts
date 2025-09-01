// Facebook Pixel Utility Functions
// This file provides reusable functions for tracking Facebook Pixel events

declare global {
  interface Window {
    fbq: any;
  }
}

export const FB_PIXEL_ID = '1438523030705133';

// Track page views
export const pageview = () => {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', 'PageView');
  }
};

// Track custom events
export const event = (name: string, options: Record<string, any> = {}) => {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('trackCustom', name, options);
  }
};

// Track standard Facebook events
export const trackStandardEvent = (eventName: string, parameters: Record<string, any> = {}) => {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', eventName, parameters);
  }
};

// Specific tracking functions for your use case
export const trackTelegramJoin = (source?: string, location?: string) => {
  if (typeof window !== 'undefined' && window.fbq) {
    // Track custom event
    window.fbq('trackCustom', 'JoinTelegramClicked', {
      action: 'telegram_cta_clicked',
      channel: 'telegram',
      source: source || 'unknown',
      location: location || 'unknown',
      value: 1,
      currency: 'USD',
    });
    
    // Also track as a Lead event for better ad optimization
    window.fbq('track', 'Lead', {
      content_name: 'Telegram Join',
      content_category: 'Social Media',
      value: 1,
      currency: 'USD',
      source: source || 'unknown',
      location: location || 'unknown',
    });
  }
};

export const trackButtonClick = (buttonName: string, location?: string) => {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('trackCustom', 'ButtonClick', {
      button_name: buttonName,
      location: location || 'unknown',
      value: 1,
    });
  }
};

export const trackEngagement = (engagementType: string, contentName?: string) => {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('trackCustom', 'Engagement', {
      engagement_type: engagementType,
      content_name: contentName || 'unknown',
      value: 1,
    });
  }
};

// Check if Pixel is loaded
export const isPixelLoaded = (): boolean => {
  return typeof window !== 'undefined' && !!window.fbq;
};

// Initialize Pixel (if needed)
export const initializePixel = () => {
  if (typeof window !== 'undefined' && !window.fbq) {
    // This should be handled by the base code in layout.tsx
    console.warn('Facebook Pixel not loaded. Make sure the base code is included in layout.tsx');
  }
};
