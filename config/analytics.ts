// Analytics Configuration
export const analyticsConfig = {
  // Facebook Pixel Configuration
  facebook: {
    pixelId: process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID || 'YOUR_PIXEL_ID_HERE',
    // Add your Facebook Pixel ID here or set it as an environment variable
    // You can get this from Facebook Ads Manager > Events Manager > Data Sources
  },
  
  // Google Analytics Configuration (if you want to add it later)
  google: {
    measurementId: process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || '',
  },
  
  // Custom Events Configuration
  events: {
    telegramJoin: {
      name: 'Lead',
      category: 'Social Media',
      value: 1,
      currency: 'USD',
    },
    buttonClick: {
      name: 'CustomEvent',
      category: 'User Interaction',
      value: 1,
    },
  },
}

// Environment Variables to add to your .env.local file:
// NEXT_PUBLIC_FACEBOOK_PIXEL_ID=123456789012345
// NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
