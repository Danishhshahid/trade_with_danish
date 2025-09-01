'use client'

import { useEffect } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'
import { pageview } from '@/lib/fpixel'

const PixelTracker = () => {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    // Track page view on route change
    pageview()
  }, [pathname, searchParams])

  return null
}

export default PixelTracker
