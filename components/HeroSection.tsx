'use client'

import { ArrowRight, CheckCircle, TrendingUp, Users, Clock } from 'lucide-react'
import { useState, useEffect } from 'react'
import { trackTelegramJoin, trackButtonClick } from '@/lib/fpixel'
// Import your forex trading background image
import forexBgImage from "@/public/assets/bg1.jpg"

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
    <section className="pt-24 pb-16 relative text-white overflow-hidden min-h-screen flex items-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${forexBgImage.src})`,
            backgroundColor: '#0a2540' // Fallback color if image fails to load
          }}
        />
        
        {/* Additional animated trading overlay */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1600 900'%3E%3Cg opacity='0.6'%3E%3Cpath d='M0 450Q200 400 400 450T800 500Q1000 520 1200 500T1600 480' stroke='%2300ff88' stroke-width='4' fill='none' stroke-dasharray='15,10'%3E%3Canimate attributeName='stroke-dashoffset' values='0;-25' dur='3s' repeatCount='indefinite'/%3E%3C/path%3E%3Cpath d='M0 300Q300 250 600 300T1200 350Q1400 360 1600 340' stroke='%23ffaa00' stroke-width='3' fill='none' stroke-dasharray='12,8'%3E%3Canimate attributeName='stroke-dashoffset' values='0;-20' dur='4s' repeatCount='indefinite'/%3E%3C/path%3E%3Cpath d='M0 600Q400 550 800 600T1600 650' stroke='%236366f1' stroke-width='3' fill='none' stroke-dasharray='10,6'%3E%3Canimate attributeName='stroke-dashoffset' values='0;-16' dur='2.5s' repeatCount='indefinite'/%3E%3C/path%3E%3C/g%3E%3Cg opacity='0.4'%3E%3Ccircle cx='300' cy='200' r='6' fill='%2300ff88'%3E%3Canimate attributeName='r' values='6;15;6' dur='4s' repeatCount='indefinite'/%3E%3C/circle%3E%3Ccircle cx='700' cy='350' r='4' fill='%23ffaa00'%3E%3Canimate attributeName='r' values='4;12;4' dur='3s' repeatCount='indefinite'/%3E%3C/circle%3E%3Ccircle cx='1100' cy='250' r='8' fill='%236366f1'%3E%3Canimate attributeName='r' values='8;18;8' dur='3.5s' repeatCount='indefinite'/%3E%3C/circle%3E%3Ccircle cx='500' cy='500' r='5' fill='%23ff6b6b'%3E%3Canimate attributeName='r' values='5;14;5' dur='2.8s' repeatCount='indefinite'/%3E%3C/circle%3E%3Ccircle cx='1300' cy='400' r='7' fill='%2300ff88'%3E%3Canimate attributeName='r' values='7;16;7' dur='4.2s' repeatCount='indefinite'/%3E%3C/circle%3E%3C/g%3E%3C/svg%3E")`
          }}
        />
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-dark/95 via-dark/85 to-trust/90" />
        
        {/* Enhanced animated forex elements overlay */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Floating currency pairs */}
          <div className="absolute top-20 left-10 animate-float">
            <div className="bg-profit/20 backdrop-blur-sm rounded-lg p-3 border border-profit/30 shadow-lg">
              <div className="text-xs text-profit font-mono">EUR/USD</div>
              <div className="text-sm font-bold text-white">1.0845 ↗</div>
            </div>
          </div>
          
          <div className="absolute top-32 right-20 animate-float-delayed">
            <div className="bg-wealth/20 backdrop-blur-sm rounded-lg p-3 border border-wealth/30 shadow-lg">
              <div className="text-xs text-wealth font-mono">XAU/USD</div>
              <div className="text-sm font-bold text-white">2635.40 ↗</div>
            </div>
          </div>
          
          <div className="absolute bottom-40 left-20 animate-pulse">
            <div className="bg-red-500/20 backdrop-blur-sm rounded-lg p-3 border border-red-500/30 shadow-lg">
              <div className="text-xs text-red-400 font-mono">USD/JPY</div>
              <div className="text-sm font-bold text-white">147.85 ↘</div>
            </div>
          </div>
          
          <div className="absolute bottom-60 right-10 animate-bounce">
            <div className="bg-blue-500/20 backdrop-blur-sm rounded-lg p-3 border border-blue-500/30 shadow-lg">
              <div className="text-xs text-blue-400 font-mono">GBP/USD</div>
              <div className="text-sm font-bold text-white">1.2650 ↗</div>
            </div>
          </div>
          
          {/* Additional floating profit indicators */}
          <div className="absolute top-1/4 left-1/4 animate-float opacity-30">
            <div className="bg-profit/30 backdrop-blur-sm rounded-full px-4 py-2 border border-profit/40 shadow-lg">
              <div className="text-xs font-bold text-profit">+$2,450</div>
            </div>
          </div>
          
          <div className="absolute top-1/2 right-1/3 animate-float-delayed opacity-30">
            <div className="bg-wealth/30 backdrop-blur-sm rounded-full px-4 py-2 border border-wealth/40 shadow-lg">
              <div className="text-xs font-bold text-wealth">85% WIN</div>
            </div>
          </div>
          
          <div className="absolute bottom-1/3 left-1/3 animate-pulse opacity-25">
            <div className="bg-trust/30 backdrop-blur-sm rounded-full px-4 py-2 border border-trust/40 shadow-lg">
              <div className="text-xs font-bold text-trust">50K+ MEMBERS</div>
            </div>
          </div>
          
          {/* Geometric shapes for depth */}
          <div className="absolute top-16 right-16 animate-spin-slow opacity-10">
            <div className="w-20 h-20 border-2 border-wealth/30 rounded-full"></div>
          </div>
          
          <div className="absolute bottom-20 left-16 animate-spin-reverse opacity-10">
            <div className="w-16 h-16 border-2 border-profit/30 transform rotate-45"></div>
          </div>
          
          <div className="absolute top-1/2 left-8 animate-float opacity-8">
            <div className="w-12 h-12 bg-gradient-to-br from-trust/20 to-wealth/20 rounded-lg transform rotate-12"></div>
          </div>
          
          <div className="absolute bottom-1/4 right-8 animate-float-delayed opacity-8">
            <div className="w-14 h-14 bg-gradient-to-br from-profit/20 to-trust/20 rounded-full"></div>
          </div>
        </div>
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-white/15 backdrop-blur-md rounded-full px-4 py-2 border border-white/30 shadow-lg">
              <TrendingUp size={16} className="text-wealth" />
              <span className="text-sm font-medium">🔥 50K+ Active Traders</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight drop-shadow-lg">
              Turn{' '}
              <span className="text-wealth drop-shadow-md">$100</span>
              {' '}into{' '}
              <span className="text-profit drop-shadow-md">$1,000+</span>
              {' '}with{' '}
              <span className="text-wealth drop-shadow-md">FREE</span>
              {' '}Daily Forex Signals
            </h1>

            {/* Subheadline */}
            <p className="text-xl text-gray-100 leading-relaxed drop-shadow-sm">
              Join <span className="text-profit font-semibold">50K+ traders</span> nailing{' '}
              <span className="text-wealth font-semibold">85%+ wins</span>. No experience needed!
            </p>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center gap-4 text-sm">
              <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-3 py-1.5">
                <CheckCircle size={16} className="text-profit" />
                <span>50K Members</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-3 py-1.5">
                <CheckCircle size={16} className="text-profit" />
                <span>85% Win Rate</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-3 py-1.5">
                <CheckCircle size={16} className="text-profit" />
                <span>Totally Free</span>
              </div>
            </div>

            {/* CTA Button */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="https://t.me/+DORKxYp9TXszZDVk" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-primary text-xl px-12 py-5 group inline-block text-center shadow-2xl hover:shadow-3xl transition-all duration-300"
                onClick={() => {
                  trackTelegramJoin('Hero Section')
                  trackButtonClick('Join Telegram', 'Hero Section')
                }}
              >
                <span className="mr-3">🚀</span>
                JOIN FREE TELEGRAM NOW
                <span className="ml-3 group-hover:translate-x-1 transition-transform">→</span>
              </a>
            </div>
          </div>

          {/* Right Content */}
          <div className="space-y-6">
            {/* Countdown Timer */}
            <div className="bg-white/15 backdrop-blur-md rounded-2xl p-6 border border-white/30 shadow-xl">
              <div className="text-center mb-4">
                <Clock size={24} className="text-wealth mx-auto mb-2" />
                <p className="text-sm text-gray-200">Limited Time Offer</p>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-wealth drop-shadow-md">{timeLeft.hours.toString().padStart(2, '0')}</div>
                  <div className="text-sm text-gray-200">Hours</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-wealth drop-shadow-md">{timeLeft.minutes.toString().padStart(2, '0')}</div>
                  <div className="text-sm text-gray-200">Minutes</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-wealth drop-shadow-md">{timeLeft.seconds.toString().padStart(2, '0')}</div>
                  <div className="text-sm text-gray-200">Seconds</div>
                </div>
              </div>
            </div>

            {/* Trust Stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/15 backdrop-blur-md rounded-xl p-4 text-center border border-white/30 shadow-lg">
                <Users size={24} className="text-profit mx-auto mb-2" />
                <div className="text-2xl font-bold">50K+</div>
                <div className="text-sm text-gray-200">Active Members</div>
              </div>
              <div className="bg-white/15 backdrop-blur-md rounded-xl p-4 text-center border border-white/30 shadow-lg">
                <TrendingUp size={24} className="text-wealth mx-auto mb-2" />
                <div className="text-2xl font-bold">85%</div>
                <div className="text-sm text-gray-200">Win Rate</div>
              </div>
            </div>

            {/* Success Story */}
            <div className="bg-gradient-to-r from-profit to-wealth rounded-xl p-4 text-center shadow-xl">
              <div className="text-sm text-white/80 mb-1">Latest Success</div>
              <div className="text-lg font-bold text-white drop-shadow-sm">
                John D. made $2,450 in 3 days
              </div>
              <div className="text-sm text-white/80">using our signals</div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes spin-reverse {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float-delayed 4s ease-in-out infinite 1s;
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
        .animate-spin-reverse {
          animation: spin-reverse 25s linear infinite;
        }
      `}</style>
    </section>
  )
}