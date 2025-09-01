'use client'

import { Star, TrendingUp, Users, MessageCircle } from 'lucide-react'

export default function TestimonialsSection() {
  const testimonials = [
    {
      id: 1,
      name: 'James Carter',
      title: 'Full-Time Trader',
      profit: '$18,600',
      timeframe: '2 months',
      avatar: '👨‍💼',
      rating: 5,
      message: 'The XAUUSD signals on Telegram are unreal. Clear entries and exits—no guessing. I doubled my account in weeks and finally trade stress-free.',
      experience: '6 years trading',
      location: 'Dubai, UAE'
    },
    {
      id: 2,
      name: 'Sophia Martinez',
      title: 'Investor',
      profit: '$11,320',
      timeframe: '6 weeks',
      avatar: '👩‍💼',
      rating: 5,
      message: 'Every alert is laser precise. Entry, stop-loss, and take-profit delivered instantly. My portfolio has never looked this green before.',
      experience: '9 years trading',
      location: 'Madrid, Spain'
    },
    {
      id: 3,
      name: 'Rahul Mehta',
      title: 'Retail Trader',
      profit: '$7,950',
      timeframe: '1 month',
      avatar: '👨‍💻',
      rating: 5,
      message: 'I started with $3,000 and grew it to almost $11,000 just from their XAUUSD calls. The Telegram channel feels like insider access.',
      experience: '3 years trading',
      location: 'Mumbai, India'
    },
    {
      id: 4,
      name: 'Emily Johnson',
      title: 'Day Trader',
      profit: '$4,480',
      timeframe: '3 weeks',
      avatar: '👩‍🎓',
      rating: 5,
      message: 'The real-time updates on Telegram are a game changer. I can catch trades instantly on mobile and lock in profits daily.',
      experience: '4 years trading',
      location: 'Sydney, Australia'
    }
  ]

  const communityStats = [
    { label: 'Active Members', value: '1k+', icon: Users },
    { label: 'Daily Signals', value: '3-5', icon: TrendingUp },
    { label: 'Success Rate', value: '87.3%', icon: TrendingUp },
    { label: 'Support Response', value: '<5 min', icon: MessageCircle }
  ]

  return (
    <section id="testimonials" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-dark mb-6">
            What Our Traders Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real profits, real results. Here’s what traders are saying after following our XAUUSD signals on Telegram.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="card hover:shadow-lg transition-shadow">
              <div className="p-6">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="text-3xl">{testimonial.avatar}</div>
                    <div>
                      <div className="font-semibold text-dark">{testimonial.name}</div>
                      <div className="text-sm text-gray-500">{testimonial.title}</div>
                      <div className="text-xs text-gray-400">{testimonial.experience}</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-profit">{testimonial.profit}</div>
                    <div className="text-sm text-gray-500">in {testimonial.timeframe}</div>
                  </div>
                </div>

                {/* Rating */}
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={16} className="text-wealth fill-current" />
                  ))}
                  <span className="text-sm text-gray-500 ml-2">Verified Trader</span>
                </div>

                {/* Message */}
                <p className="text-gray-700 mb-4 leading-relaxed">"{testimonial.message}"</p>

                {/* Footer */}
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span>{testimonial.location}</span>
                  <span>Member since 2024</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Community Statistics */}
        <div className="bg-gradient-to-r from-trust to-profit rounded-2xl p-8 text-white mb-16">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-4">
              Our Growing Community
            </h3>
            <p className="text-xl text-gray-200">
              Join thousands of traders achieving consistent results
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6">
            {communityStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon size={24} className="text-white" />
                </div>
                <div className="text-3xl font-bold text-wealth mb-2">{stat.value}</div>
                <div className="text-gray-200">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-trust rounded-full flex items-center justify-center mx-auto mb-4">
              <TrendingUp size={24} className="text-white" />
            </div>
            <h4 className="text-xl font-bold text-dark mb-2">Proven Track Record</h4>
            <p className="text-gray-600">
              Verified results with traders worldwide making real profits
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-profit rounded-full flex items-center justify-center mx-auto mb-4">
              <Users size={24} className="text-white" />
            </div>
            <h4 className="text-xl font-bold text-dark mb-2">1K+ Active Members</h4>
            <p className="text-gray-600">
              Trade alongside one of the biggest XAUUSD communities
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-wealth rounded-full flex items-center justify-center mx-auto mb-4">
              <MessageCircle size={24} className="text-white" />
            </div>
            <h4 className="text-xl font-bold text-dark mb-2">24/7 Support</h4>
            <p className="text-gray-600">
              Get instant help from experienced analysts and mentors
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
