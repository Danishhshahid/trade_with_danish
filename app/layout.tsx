import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import FacebookPixel from '@/components/FacebookPixel'
import { analyticsConfig } from '@/config/analytics'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* Meta Pixel Code */}
        <script
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
              "url": "https://forexsignals.com",
              "logo": "https://forexsignals.com/logo.png",
              "description": "Professional forex trading signals and education",
              "sameAs": [
                "https://t.me/forexsignalspro",
                "https://twitter.com/forexsignalspro"
              ]
            })
          }}
        />
      </head>
      <body className={inter.className}>
        <FacebookPixel pixelId={analyticsConfig.facebook.pixelId} />
        {children}
      </body>
    </html>
  )
}
