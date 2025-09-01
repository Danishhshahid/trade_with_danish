'use client'

import { useEffect } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'

const PixelTracker = () => {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    // Add delay to ensure pixel is loaded
    const timer = setTimeout(() => {
      if (typeof window !== 'undefined' && window.fbq) {
        console.log('PixelTracker: Pixel loaded, tracking PageView')
        window.fbq('track', 'PageView')
      } else {
        console.error('PixelTracker: Pixel not loaded after delay')
      }
    }, 1000)

    return () => clearTimeout(timer)
  }, [pathname, searchParams])

  return null
}

export default PixelTracker
