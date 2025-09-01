'use client'

import { useEffect } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'

const PixelTracker = () => {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    // Track page view on route change using the hardcoded pixel
    if (typeof window !== 'undefined' && window.fbq) {
      window.fbq('track', 'PageView')
    }
  }, [pathname, searchParams])

  return null
}

export default PixelTracker
