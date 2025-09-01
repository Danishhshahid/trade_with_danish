'use client'

import { useState, useEffect } from 'react'
import { ArrowRight, Clock, CheckCircle, AlertTriangle } from 'lucide-react'
import { trackTelegramJoin, trackButtonClick } from '@/lib/fpixel'

export default function CTASection() {
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 59,
    seconds: 59
  })

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 }
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 }
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 }
        }
        return { hours: 23, minutes: 59, seconds: 59 }
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const benefits = [
    'Daily professional forex signals',
    'Complete technical analysis',
    'Risk management guidance',
    '24/7 community support',
    'Free educational resources',
    'No hidden fees or upsells'
  ]

  return (
    <section id="cta" className="section-padding bg-gradient-to-br from-dark to-gray-900 text-white">
      <div className="container-custom">


        {/* Primary CTA */}
        <div className="text-center mb-16">
          <div className="bg-gradient-to-r from-profit to-wealth rounded-2xl p-8 max-w-screen mx-auto">
            <h3 className="text-3xl font-bold mb-4">
              Ready to Start Winning?
            </h3>
            <p className="text-xl mb-8 text-gray-200">
              Join thousands of successful traders. Get FREE daily signals, expert analysis, and proven strategies.
            </p>
            <a 
              href="https://t.me/Trade_with_Danish4x" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-primary text-xl px-12 py-5 group inline-block"
              onClick={() => {
                trackTelegramJoin('CTA Section')
                trackButtonClick('Join Telegram', 'CTA Section')
              }}
            >
              <span className="mr-3">🚀</span>
              JOIN FREE TELEGRAM NOW
              <span className="ml-3 group-hover:translate-x-1 transition-transform">→</span>
            </a>
          </div>
        </div>

      
        {/* Final Risk Warning */}
        <div className="bg-red-500/20 border border-red-500/30 rounded-xl p-6 max-w-4xl mx-auto">
          <div className="flex items-start space-x-3">
            <AlertTriangle size={24} className="text-red-400 flex-shrink-0 mt-1" />
            <div>
              <h4 className="font-bold text-red-400 mb-2">Important Risk Warning</h4>
              <p className="text-sm text-gray-300">
                Trading forex involves substantial risk of loss and is not suitable for all investors. 
                The high degree of leverage can work against you as well as for you. Past performance 
                does not guarantee future results. Never risk more than you can afford to lose. 
                Our signals are for educational purposes only and should not be considered as investment advice.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
