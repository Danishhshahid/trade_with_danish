'use client'

import { ArrowRight, CheckCircle, TrendingUp, Users, Clock } from 'lucide-react'
import { useState, useEffect } from 'react'
import { trackTelegramJoin, trackButtonClick } from '@/lib/fpixel'

export default function HeroSection() {
  const [timeLeft, setTimeLeft] = useState({
    hours: 72,
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

  return (
    <section className="pt-24 pb-16 bg-gradient-to-br from-dark via-trust to-dark text-white overflow-hidden">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-custom rounded-full px-4 py-2 border border-white/20">
              <TrendingUp size={16} className="text-wealth" />
              <span className="text-sm font-medium">🔥 Trading Community</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Grow Your{' '}
                <span className="text-wealth">Trading Capital</span>
                {' '}with{' '}
                <span className="text-profit">Professional</span>
                {' '}Forex Signals and{' '}
                <span className="text-wealth">PREMIUM</span>
                {' '}Market Intelligence
              </h1>

            {/* Subheadline */}
            <p className="text-xl text-gray-200 leading-relaxed">
              Join our <span className="text-profit font-semibold">signals community</span> focused on{' '}
              <span className="text-wealth font-semibold">potential profit opportunities</span>. Professional analysis for serious traders!
            </p>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center gap-4 text-sm">
              <div className="flex items-center space-x-2">
                <CheckCircle size={16} className="text-profit" />
                <span>Active Community</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle size={16} className="text-profit" />
                <span>Daily Signals</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle size={16} className="text-profit" />
                <span>No Cost to Join</span>
              </div>
            </div>

            {/* CTA Button */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="https://t.me/Trade_with_Danish4x" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-primary text-xl px-12 py-5 group inline-block text-center"
                onClick={() => {
                  trackTelegramJoin('Hero Section')
                  trackButtonClick('Join Telegram', 'Hero Section')
                }}
              >
                <span className="mr-3">🚀</span>
                JOIN SIGNALS COMMUNITY
                <span className="ml-3 group-hover:translate-x-1 transition-transform">→</span>
              </a>
              <button className="btn-secondary text-lg px-8 py-4">
                Learn More
              </button>
            </div>
          </div>

          {/* Right Content */}
          <div className="space-y-6">
            {/* Countdown Timer */}
            <div className="bg-white/10 backdrop-blur-custom rounded-2xl p-6 border border-white/20">
              <div className="text-center mb-4">
                <Clock size={24} className="text-wealth mx-auto mb-2" />
                <p className="text-sm text-gray-300">Limited Access Period</p>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-wealth">{timeLeft.hours.toString().padStart(2, '0')}</div>
                  <div className="text-sm text-gray-300">Hours</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-wealth">{timeLeft.minutes.toString().padStart(2, '0')}</div>
                  <div className="text-sm text-gray-300">Minutes</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-wealth">{timeLeft.seconds.toString().padStart(2, '0')}</div>
                  <div className="text-sm text-gray-300">Seconds</div>
                </div>
              </div>
            </div>

            {/* Trust Stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/10 backdrop-blur-custom rounded-xl p-4 text-center border border-white/20">
                <Users size={24} className="text-profit mx-auto mb-2" />
                <div className="text-2xl font-bold">Active</div>
                <div className="text-sm text-gray-300">Members</div>
              </div>
              <div className="bg-white/10 backdrop-blur-custom rounded-xl p-4 text-center border border-white/20">
                <TrendingUp size={24} className="text-wealth mx-auto mb-2" />
                <div className="text-2xl font-bold">Daily</div>
                <div className="text-sm text-gray-300">Signals</div>
              </div>
            </div>

            {/* Success Story */}
            <div className="bg-gradient-to-r from-profit to-wealth rounded-xl p-4 text-center">
              <div className="text-sm text-white/80 mb-1">Trading Potential</div>
              <div className="text-lg font-bold text-white">
                Turn $100 into $10,000 just with FREE signals
              </div>
              <div className="text-sm text-gray-200">
                *Trading involves risk. Past performance doesn't guarantee future results.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}