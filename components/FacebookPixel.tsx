'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

declare global {
  interface Window {
    fbq: any
  }
}

interface FacebookPixelProps {
  pixelId: string
}

export default function FacebookPixel({ pixelId }: FacebookPixelProps) {
  const pathname = usePathname()

  useEffect(() => {
    // Load Facebook Pixel script
    if (!window.fbq) {
      // Create script element
      const script = document.createElement('script')
      script.innerHTML = `
        !function(f,b,e,v,n,t,s)
        {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
        n.callMethod.apply(n,arguments):n.queue.push(arguments)};
        if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
        n.queue=[];t=b.createElement(e);t.async=!0;
        t.src=v;s=b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t,s)}(window, document,'script',
        'https://connect.facebook.net/en_US/fbevents.js');
        fbq('init', '${pixelId}');
        fbq('track', 'PageView');
      `
      document.head.appendChild(script)
    }

    // Track page views
    if (window.fbq) {
      window.fbq('track', 'PageView')
    }
  }, [pixelId, pathname])

  return null
}

// Utility function to track custom events
export const trackEvent = (eventName: string, parameters?: Record<string, any>) => {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', eventName, parameters)
  }
}

// Utility function to track Telegram joins specifically
export const trackTelegramJoin = (source?: string) => {
  trackEvent('Lead', {
    content_name: 'Telegram Join',
    content_category: 'Social Media',
    value: 1,
    currency: 'USD',
    source: source || 'Website'
  })
}

// Utility function to track button clicks
export const trackButtonClick = (buttonName: string, location?: string) => {
  trackEvent('CustomEvent', {
    event_name: 'Button Click',
    button_name: buttonName,
    location: location || 'Unknown',
    value: 1
  })
}

// Utility function to track engagement events
export const trackEngagement = (engagementType: string, contentName?: string) => {
  trackEvent('CustomEvent', {
    event_name: 'Engagement',
    engagement_type: engagementType,
    content_name: contentName || 'Website Content',
    value: 1
  })
}

// Utility function to track page engagement (time spent, scroll depth)
export const trackPageEngagement = (pageName: string, engagementLevel: 'low' | 'medium' | 'high') => {
  trackEvent('CustomEvent', {
    event_name: 'Page Engagement',
    page_name: pageName,
    engagement_level: engagementLevel,
    value: engagementLevel === 'high' ? 3 : engagementLevel === 'medium' ? 2 : 1
  })
}
