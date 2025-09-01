import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Script from 'next/script'
import PixelTracker from '@/components/PixelTracker'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://trade-with-danishh.vercel.app'),
  title: 'FREE Daily Forex Signals - Turn $100 into $1,000+ | 85% Win Rate',
  description: 'Join 50K+ traders nailing 85%+ wins with FREE daily forex signals. No experience needed! Get instant Telegram alerts, full TA breakdowns, and education.',
  keywords: 'forex signals, free forex signals, daily forex alerts, forex trading, currency trading, forex education, telegram forex signals',
  authors: [{ name: 'Forex Signals Pro' }],
  openGraph: {
    title: 'FREE Daily Forex Signals - Turn $100 into $1,000+ | 85% Win Rate',
    description: 'Join 50K+ traders nailing 85%+ wins with FREE daily forex signals. No experience needed!',
    url: 'https://trade-with-danishh.vercel.app',
    siteName: 'Forex Signals Pro',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Forex Signals Pro - Free Daily Trading Signals',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FREE Daily Forex Signals - Turn $100 into $1,000+ | 85% Win Rate',
    description: 'Join 50K+ traders nailing 85%+ wins with FREE daily forex signals.',
    images: ['/og-image.jpg'],
    creator: '@forexsignalspro',
    site: '@forexsignalspro',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
  alternates: {
    canonical: 'https://trade-with-danishh.vercel.app',
  },
  viewport: 'width=device-width, initial-scale=1',
  themeColor: '#1e40af',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-PDPP87RC');
            `
          }}
        />
        {/* End Google Tag Manager */}
        
        {/* Meta Pixel Code */}
        <Script
          id="fb-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '1438523030705133');
              fbq('track', 'PageView');
            `
          }}
        />
        <noscript>
          <img 
            height="1" 
            width="1" 
            style={{display: 'none'}}
            src="https://www.facebook.com/tr?id=1438523030705133&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
        {/* End Meta Pixel Code */}
        
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Forex Signals Pro",
              "url": "https://trade-with-danishh.vercel.app",
              "logo": "https://forexsignals.com/logo.png",
              "description": "Professional forex trading signals and education",
              "sameAs": [
                "https://t.me/trade_with_danish4x",
              ]
            })
          }}
        />
      </head>
      <body className={inter.className}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe 
            src="https://www.googletagmanager.com/ns.html?id=GTM-PDPP87RC"
            height="0" 
            width="0" 
            style={{display: 'none', visibility: 'hidden'}}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        
        <PixelTracker />
        {children}
      </body>
    </html>
  )
}
