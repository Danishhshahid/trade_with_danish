'use client'

import { trackTelegramJoin, trackButtonClick } from '@/lib/fpixel'

interface TelegramCTAProps {
  location?: string
  source?: string
  className?: string
  children?: React.ReactNode
}

const TelegramCTA = ({ 
  location = 'component', 
  source = 'telegram_cta',
  className = '',
  children 
}: TelegramCTAProps) => {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault()
    
    // Track the click event
    trackTelegramJoin(source, location)
    trackButtonClick('Join Telegram', location)
    
    // Open Telegram in new tab
    window.open('https://t.me/Trade_with_Danish4x', '_blank')
  }

  return (
    <a
      href="https://t.me/Trade_with_Danish4x"
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      className={className}
    >
      {children || 'Join Telegram Channel'}
    </a>
  )
}

export default TelegramCTA
