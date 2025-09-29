'use client'

import { trackTelegramJoin, trackButtonClick } from '@/lib/fpixel'

import { CheckCircle, TrendingUp, BarChart3, Shield, Zap, Target } from 'lucide-react'
// Import your features background image
import featuresBgImage from "@/public/assets/bg1.jpg"

export default function FeaturesSection() {
  const features = [
    {
      icon: Target,
      title: '85% Accuracy',
      description: 'Proven track record with extensive backtesting',
      badge: 'Proven',
      color: 'from-profit to-trust'
    },
    {
      icon: BarChart3,
      title: 'Full TA Breakdowns',
      description: 'Complete technical analysis with multiple indicators',
      badge: 'Complete',
      color: 'from-trust to-wealth'
    },
    {
      icon: Zap,
      title: 'Instant Alerts',
      description: 'Real-time notifications via Telegram',
      badge: 'Fast',
      color: 'from-wealth to-profit'
    },
    {
      icon: Shield,
      title: 'Risk Management',
      description: 'Built-in stop-loss and position sizing',
      badge: 'Safe',
      color: 'from-profit to-trust'
    },
    {
      icon: TrendingUp,
      title: 'Performance Tracking',
      description: 'Monitor your progress with detailed analytics',
      badge: 'Track',
      color: 'from-trust to-wealth'
    },
    {
      icon: CheckCircle,
      title: 'Community Support',
      description: '24/7 help from experienced traders',
      badge: 'Support',
      color: 'from-wealth to-profit'
    }
  ]

  const performanceStats = [
    { label: 'Win Rate', value: '85.7%', change: '+2.3%', trend: 'up' },
    { label: 'Total Signals', value: '200+', change: '+156', trend: 'up' },
    { label: 'Avg Profit', value: '+2.4%', change: '+0.8%', trend: 'up' },
    { label: 'Success Rate', value: '92.1%', change: '+1.2%', trend: 'up' }
  ]

  const technologyStack = [
    'Advanced Charting Software',
    'Real-time Market Data Feeds',
    'AI-Powered Pattern Recognition',
    'Institutional-Grade Analysis Tools',
    'Multi-Timeframe Analysis',
    'Risk Management Algorithms'
  ]

  return (
    <section id="features" className="section-padding relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed"
          style={{
            backgroundImage: `url(${featuresBgImage.src})`,
            backgroundColor: '#f8f9ff' // Fallback color if image fails to load
          }}
        />
        {/* Light overlay for better content readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/95 via-light/90 to-white/95" />
        
        {/* Animated trading elements overlay */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Floating feature icons */}
          <div className="absolute top-16 left-16 animate-float opacity-10">
            <Target size={60} className="text-profit" />
          </div>
          
          <div className="absolute top-32 right-32 animate-float-delayed opacity-10">
            <BarChart3 size={55} className="text-trust" />
          </div>
          
          <div className="absolute bottom-40 left-24 animate-pulse opacity-15">
            <Zap size={50} className="text-wealth" />
          </div>
          
          <div className="absolute bottom-60 right-40 animate-bounce opacity-10">
            <Shield size={65} className="text-profit" />
          </div>
          
          <div className="absolute top-1/2 left-1/4 animate-float opacity-8">
            <TrendingUp size={45} className="text-trust" />
          </div>
          
          <div className="absolute top-1/3 right-1/3 animate-float-delayed opacity-8">
            <CheckCircle size={40} className="text-wealth" />
          </div>
          
          {/* Additional floating elements */}
          <div className="absolute top-1/4 left-1/3 animate-float opacity-5">
            <div className="text-3xl font-bold text-profit opacity-40">85%</div>
          </div>
          
          <div className="absolute top-1/2 right-1/4 animate-float-delayed opacity-5">
            <div className="text-2xl font-bold text-trust opacity-40">50K+</div>
          </div>
          
          <div className="absolute bottom-1/3 left-1/5 animate-pulse opacity-5">
            <div className="text-xl font-bold text-wealth opacity-40">$2M+</div>
          </div>
          
          <div className="absolute bottom-1/4 right-1/5 animate-bounce opacity-5">
            <div className="text-lg font-bold text-profit opacity-40">24/7</div>
          </div>
        </div>
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-dark mb-6 drop-shadow-sm">
            Institutional-Grade Technology
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto drop-shadow-sm">
            The same tools and technology used by professional traders and institutions. 
            Now available to you, completely free.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="card hover:shadow-xl transition-all duration-300 backdrop-blur-sm bg-white/80 border border-white/50">
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center shadow-lg`}>
                    <feature.icon size={28} className="text-white" />
                  </div>
                  <span className="bg-gradient-to-r from-trust to-profit text-white px-3 py-1 rounded-full text-sm font-medium shadow-sm">
                    {feature.badge}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-dark mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Performance Statistics */}
        <div className="relative rounded-2xl overflow-hidden mb-16 shadow-2xl">
          {/* Background for stats section */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-r from-trust/95 via-profit/90 to-trust/95" />
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute top-4 left-4 animate-float opacity-20">
                <BarChart3 size={30} className="text-white" />
              </div>
              <div className="absolute bottom-4 right-4 animate-float-delayed opacity-20">
                <TrendingUp size={35} className="text-wealth" />
              </div>
            </div>
          </div>
          
          <div className="relative z-10 p-8 text-white">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold mb-4 drop-shadow-md">
                Proven Performance Metrics
              </h3>
              <p className="text-xl text-gray-100 drop-shadow-sm">
                Our track record speaks for itself
              </p>
            </div>
            
            <div className="grid md:grid-cols-4 gap-6">
              {performanceStats.map((stat, index) => (
                <div key={index} className="text-center group hover:scale-105 transition-transform">
                  <div className="text-4xl font-bold text-wealth mb-2 drop-shadow-md group-hover:text-white transition-colors">{stat.value}</div>
                  <div className="text-gray-100 mb-2">{stat.label}</div>
                  <div className="text-sm text-profit drop-shadow-sm">
                    {stat.change} this month
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Technology Stack */}
        <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/50 mb-16">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold text-dark mb-4">
                Professional Trading Technology
              </h3>
              <p className="text-lg text-gray-600 mb-6">
                We use the same advanced tools and platforms that institutional traders rely on 
                for consistent profits. Our technology stack includes:
              </p>
              <ul className="space-y-3">
                {technologyStack.map((tech, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-profit rounded-full flex items-center justify-center shadow-sm">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <span className="text-gray-700">{tech}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-br from-dark to-trust rounded-xl p-8 text-white shadow-xl">
                <div className="text-4xl font-bold text-wealth mb-4 drop-shadow-md">$20k+</div>
                <div className="text-2xl mb-2">Traded Daily</div>
                <div className="text-lg text-gray-200">
                  Using our technology
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="text-center">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl max-w-4xl mx-auto">
            {/* Background for CTA section */}
            <div className="absolute inset-0">
              <div className="absolute inset-0 bg-gradient-to-r from-profit/95 via-wealth/90 to-profit/95" />
              <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-8 left-8 animate-float opacity-15">
                  <CheckCircle size={40} className="text-white" />
                </div>
                <div className="absolute bottom-8 right-8 animate-float-delayed opacity-15">
                  <Target size={35} className="text-wealth" />
                </div>
              </div>
            </div>
            
            <div className="relative z-10 p-8 text-white">
              <h3 className="text-3xl font-bold mb-4 drop-shadow-lg">
                Why Elite Class Choose Us
              </h3>
              <p className="text-xl text-gray-100 mb-6 drop-shadow-sm">
                We combine institutional-grade technology with proven strategies to deliver 
                consistent results that most retail traders can only dream of.
              </p>
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="group hover:scale-105 transition-transform">
                  <div className="text-3xl font-bold text-wealth mb-2 drop-shadow-md group-hover:text-white transition-colors">15+</div>
                  <div className="text-sm">Years Experience</div>
                </div>
                <div className="group hover:scale-105 transition-transform">
                  <div className="text-3xl font-bold text-wealth mb-2 drop-shadow-md group-hover:text-white transition-colors">50K+</div>
                  <div className="text-sm">Active Traders</div>
                </div>
                <div className="group hover:scale-105 transition-transform">
                  <div className="text-3xl font-bold text-wealth mb-2 drop-shadow-md group-hover:text-white transition-colors">$2M+</div>
                  <div className="text-sm">Profits Generated</div>
                </div>
              </div>
              <div className="flex justify-center">
                <a 
                  href="https://t.me/Trade_with_Danish4x" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn-primary text-xl px-12 py-5 group inline-block text-center shadow-2xl hover:shadow-3xl transition-all duration-300"
                  onClick={() => {
                    trackTelegramJoin('Features Section')
                    trackButtonClick('Join Telegram', 'Features Section')
                  }}
                >
                  <span className="mr-3">🚀</span>
                  JOIN FREE TELEGRAM NOW
                  <span className="ml-3 group-hover:translate-x-1 transition-transform">→</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(3deg); }
        }
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-25px) rotate(-3deg); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float-delayed 7s ease-in-out infinite 2s;
        }
      `}</style>
    </section>
  )
}