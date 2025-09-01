import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import FacebookPixel from '@/components/FacebookPixel'
import { analyticsConfig } from '@/config/analytics'

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
        <FacebookPixel pixelId={analyticsConfig.facebook.pixelId} />
        {children}
      </body>
    </html>
  )
}
