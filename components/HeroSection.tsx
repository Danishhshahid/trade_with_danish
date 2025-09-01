'use client'

import { ArrowRight, CheckCircle, TrendingUp, Users, Clock } from 'lucide-react'
import { useState, useEffect } from 'react'

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
              <span className="text-sm font-medium">🔥 50K+ Active Traders</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Turn{' '}
              <span className="text-wealth">$100</span>
              {' '}into{' '}
              <span className="text-profit">$1,000+</span>
              {' '}with{' '}
              <span className="text-wealth">FREE</span>
              {' '}Daily Forex Signals
            </h1>

            {/* Subheadline */}
            <p className="text-xl text-gray-200 leading-relaxed">
              Join <span className="text-profit font-semibold">50K+ traders</span> nailing{' '}
              <span className="text-wealth font-semibold">85%+ wins</span>. No experience needed!
            </p>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center gap-4 text-sm">
              <div className="flex items-center space-x-2">
                <CheckCircle size={16} className="text-profit" />
                <span>50K Members</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle size={16} className="text-profit" />
                <span>85% Win Rate</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle size={16} className="text-profit" />
                <span>Totally Free</span>
              </div>
            </div>

            {/* CTA Button */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="https://t.me/Trade_with_Danish4x" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-primary text-xl px-12 py-5 group inline-block text-center"
              >
                <span className="mr-3">🚀</span>
                JOIN FREE TELEGRAM NOW
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
                <p className="text-sm text-gray-300">Limited Time Offer</p>
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
                <div className="text-2xl font-bold">50K+</div>
                <div className="text-sm text-gray-300">Active Members</div>
              </div>
              <div className="bg-white/10 backdrop-blur-custom rounded-xl p-4 text-center border border-white/20">
                <TrendingUp size={24} className="text-wealth mx-auto mb-2" />
                <div className="text-2xl font-bold">85%</div>
                <div className="text-sm text-gray-300">Win Rate</div>
              </div>
            </div>

            {/* Success Story */}
            <div className="bg-gradient-to-r from-profit to-wealth rounded-xl p-4 text-center">
              <div className="text-sm text-white/80 mb-1">Latest Success</div>
              <div className="text-lg font-bold text-white">
                John D. made $2,450 in 3 days
              </div>
              <div className="text-sm text-white/80">using our signals</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
