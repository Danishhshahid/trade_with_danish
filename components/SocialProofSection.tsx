'use client'

import { MessageCircle, Users, TrendingUp, Star, ArrowRight } from 'lucide-react'
import { trackTelegramJoin, trackButtonClick } from '@/lib/fpixel'

export default function SocialProofSection() {
  const joinCount = 2347

  const testimonials = [
    {
      id: 1,
      name: 'Sarah M.',
      profit: '$2,890',
      timeframe: '30 days',
      avatar: '👩‍💼',
      message: 'Started with $500, now at $3,390! The signals are incredibly accurate.',
      rating: 5
    },
    {
      id: 2,
      name: 'Mike R.',
      profit: '$4,120',
      timeframe: '45 days',
      avatar: '👨‍💻',
      message: 'Best forex signals I\'ve ever used. Clear entries and exits.',
      rating: 5
    },
    {
      id: 3,
      name: 'Lisa K.',
      profit: '$1,650',
      timeframe: '20 days',
      avatar: '👩‍🎓',
      message: 'As a beginner, this has been a game-changer. Easy to follow!',
      rating: 5
    },
    {
      id: 4,
      name: 'David P.',
      profit: '$3,450',
      timeframe: '60 days',
      avatar: '👨‍🏭',
      message: 'Consistent profits every week. Highly recommended!',
      rating: 5
    },
    {
      id: 5,
      name: 'Emma T.',
      profit: '$2,100',
      timeframe: '25 days',
      avatar: '👩‍⚕️',
      message: 'The technical analysis is top-notch. Love the results.',
      rating: 5
    },
    {
      id: 6,
      name: 'James L.',
      profit: '$5,200',
      timeframe: '90 days',
      avatar: '👨‍💼',
      message: 'Professional service with real results. No regrets!',
      rating: 5
    }
  ]

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        {/* Live Join Counter */}
        <div className="text-center mb-16">
          <div className="bg-gradient-to-r from-trust to-profit rounded-2xl p-8 text-white max-w-screen mx-auto">
            <div className="text-6xl font-bold text-wealth mb-4">
              {joinCount.toLocaleString()}
            </div>
            <div className="text-2xl mb-2">traders joined today!</div>
            <div className="text-lg text-gray-200">
              Join the fastest-growing forex community
            </div>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="card shadow-md">
              <div className="p-6">
                {/* Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="text-3xl">{testimonial.avatar}</div>
                    <div>
                      <div className="font-semibold text-dark">{testimonial.name}</div>
                      <div className="text-sm text-gray-500">{testimonial.timeframe}</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-profit">{testimonial.profit}</div>
                    <div className="text-sm text-gray-500">profit</div>
                  </div>
                </div>

                {/* Message */}
                <p className="text-gray-700 mb-4">{testimonial.message}</p>

                {/* Rating */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} size={16} className="text-wealth fill-current" />
                    ))}
                  </div>
                  <div className="text-sm text-gray-500">Verified Trader</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Telegram Chat Preview */}
        <div className="bg-gradient-to-r from-trust to-profit rounded-2xl p-8 text-white mb-16">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-4">
                See Our Telegram Channel in Action
              </h3>
              <p className="text-xl text-gray-200 mb-6">
                Watch real-time signals being shared with our community. 
                See the excitement, the questions, and the celebrations!
              </p>
              <a 
                href="https://t.me/Trade_with_Danish4x" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-secondary text-lg px-8 py-4 inline-block"
                onClick={() => {
                  trackTelegramJoin('Social Proof')
                  trackButtonClick('Join Telegram', 'Social Proof')
                }}
              >
                View Live Channel
                <ArrowRight size={20} className="ml-2" />
              </a>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6">
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-wealth rounded-full flex items-center justify-center">
                    <TrendingUp size={16} className="text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="text-sm text-gray-300">Forex Signals Pro</div>
                    <div className="text-white">🔥 NEW SIGNAL: EUR/USD BUY</div>
                  </div>
                  <div className="text-xs text-gray-300">2 min ago</div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-profit rounded-full flex items-center justify-center">
                    <MessageCircle size={16} className="text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="text-sm text-gray-300">Sarah M.</div>
                    <div className="text-white">Entry triggered! Let's go! 🚀</div>
                  </div>
                  <div className="text-xs text-gray-300">1 min ago</div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-wealth rounded-full flex items-center justify-center">
                    <MessageCircle size={16} className="text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="text-sm text-gray-300">Mike R.</div>
                    <div className="text-white">Perfect entry! Already +15 pips 💪</div>
                  </div>
                  <div className="text-xs text-gray-300">now</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Community Stats */}
        <div className="grid md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="text-4xl font-bold text-trust mb-2">1K+</div>
            <div className="text-gray-600">Active Members</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-profit mb-2">85%</div>
            <div className="text-gray-600">Win Rate</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-wealth mb-2">24/7</div>
            <div className="text-gray-600">Support</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-dark mb-2">100%</div>
            <div className="text-gray-600">Free</div>
          </div>
        </div>
      </div>
    </section>
  )
}