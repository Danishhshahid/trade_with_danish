'use client'

import { Star, TrendingUp, Users, MessageCircle } from 'lucide-react'
// Import your community/trading background image
import communityBgImage from "@/public/assets/bg1.jpg"

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
    <section id="testimonials" className="section-padding relative overflow-hidden min-h-screen">
      {/* Full Page Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed"
          style={{
            backgroundImage: `url(${communityBgImage.src})`,
            backgroundColor: '#0a2540' // Fallback color if image fails to load
          }}
        />
        {/* Subtle overlay for better content readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/80 via-white/60 to-white/80" />
        
        {/* Animated community elements overlay */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Floating community icons */}
          <div className="absolute top-8 left-8 animate-float opacity-10">
            <Users size={40} className="text-white" />
          </div>
          
          <div className="absolute top-12 right-12 animate-float-delayed opacity-10">
            <TrendingUp size={35} className="text-wealth" />
          </div>
          
          <div className="absolute bottom-16 left-16 animate-pulse opacity-15">
            <MessageCircle size={30} className="text-profit" />
          </div>
          
          <div className="absolute bottom-20 right-20 animate-bounce opacity-10">
            <Star size={32} className="text-wealth" />
          </div>
          
          {/* Additional floating elements */}
          <div className="absolute top-1/2 left-1/4 animate-float opacity-8">
            <div className="w-3 h-3 bg-wealth rounded-full animate-ping"></div>
          </div>
          
          <div className="absolute top-1/3 right-1/3 animate-float-delayed opacity-8">
            <div className="w-2 h-2 bg-profit rounded-full animate-ping"></div>
          </div>
          
          <div className="absolute bottom-1/3 left-1/5 animate-pulse opacity-8">
            <div className="w-4 h-4 bg-white rounded-full animate-ping"></div>
          </div>
        </div>
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-dark mb-6 drop-shadow-sm">
            What Our Traders Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto drop-shadow-sm">
            Real profits, real results. Here's what traders are saying after following our XAUUSD signals on Telegram.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="card hover:shadow-xl transition-all duration-300 backdrop-blur-sm bg-white/90 border border-white/50">
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
                    <div className="text-2xl font-bold text-profit drop-shadow-sm">{testimonial.profit}</div>
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
                <p className="text-gray-700 mb-4 leading-relaxed drop-shadow-sm">"{testimonial.message}"</p>

                {/* Footer */}
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span>{testimonial.location}</span>
                  <span>Member since 2024</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Community Statistics with Enhanced Background */}
        <div className="relative rounded-2xl overflow-hidden mb-16 shadow-2xl backdrop-blur-sm bg-white/10 border border-white/20">
          {/* Enhanced background within the card */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0 bg-gradient-to-br from-profit/30 via-wealth/20 to-trust/30" />
          </div>
          
          {/* Content */}
          <div className="relative z-10 p-8 text-white">
            <div className="text-center mb-8">
              <h3 className="text-3xl md:text-4xl font-bold mb-4 drop-shadow-lg">
                Our Growing Community
              </h3>
              <p className="text-xl text-gray-100 drop-shadow-sm">
                Join thousands of traders achieving consistent results
              </p>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {communityStats.map((stat, index) => (
                <div key={index} className="text-center group hover:scale-105 transition-transform">
                  <div className="w-16 h-16 bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4 border border-white/40 shadow-lg group-hover:bg-white/40 transition-all duration-300">
                    <stat.icon size={24} className="text-white drop-shadow-sm" />
                  </div>
                  <div className="text-3xl font-bold text-wealth mb-2 drop-shadow-md">{stat.value}</div>
                  <div className="text-gray-100 drop-shadow-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center backdrop-blur-sm bg-white/90 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="w-16 h-16 bg-trust rounded-full flex items-center justify-center mx-auto mb-4">
              <TrendingUp size={24} className="text-white" />
            </div>
            <h4 className="text-xl font-bold text-dark mb-2">Proven Track Record</h4>
            <p className="text-gray-600">
              Verified results with traders worldwide making real profits
            </p>
          </div>
          
          <div className="text-center backdrop-blur-sm bg-white/90 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="w-16 h-16 bg-profit rounded-full flex items-center justify-center mx-auto mb-4">
              <Users size={24} className="text-white" />
            </div>
            <h4 className="text-xl font-bold text-dark mb-2">1K+ Active Members</h4>
            <p className="text-gray-600">
              Trade alongside one of the biggest XAUUSD communities
            </p>
          </div>
          
          <div className="text-center backdrop-blur-sm bg-white/90 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
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

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float-delayed 5s ease-in-out infinite 1.5s;
        }
      `}</style>
    </section>
  )
}