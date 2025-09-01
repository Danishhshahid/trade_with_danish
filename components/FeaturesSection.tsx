'use client'

import { CheckCircle, TrendingUp, BarChart3, Shield, Zap, Target } from 'lucide-react'

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
    <section id="features" className="section-padding bg-gradient-to-br from-light to-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-dark mb-6">
            Institutional-Grade Technology
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            The same tools and technology used by professional traders and institutions. 
            Now available to you, completely free.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="card hover:shadow-lg transition-shadow">
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center`}>
                    <feature.icon size={28} className="text-white" />
                  </div>
                  <span className="bg-gradient-to-r from-trust to-profit text-white px-3 py-1 rounded-full text-sm font-medium">
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
        <div className="bg-gradient-to-r from-trust to-profit rounded-2xl p-8 text-white mb-16">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-4">
              Proven Performance Metrics
            </h3>
            <p className="text-xl text-gray-200">
              Our track record speaks for itself
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6">
            {performanceStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-wealth mb-2">{stat.value}</div>
                <div className="text-gray-200 mb-2">{stat.label}</div>
                <div className="text-sm text-profit">
                  {stat.change} this month
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Technology Stack */}
        <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 mb-16">
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
                    <div className="w-6 h-6 bg-profit rounded-full flex items-center justify-center">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <span className="text-gray-700">{tech}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-br from-dark to-trust rounded-xl p-8 text-white">
                <div className="text-4xl font-bold text-wealth mb-4">$20k+</div>
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
          <div className="bg-gradient-to-r from-profit to-wealth rounded-2xl p-8 text-white max-w-screen mx-auto">
            <h3 className="text-3xl font-bold mb-4">
              Why Elite Class Choose Us
            </h3>
            <p className="text-xl text-gray-200 mb-6">
              We combine institutional-grade technology with proven strategies to deliver 
              consistent results that most retail traders can only dream of.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <div className="text-3xl font-bold text-trust mb-2">15+</div>
                <div className="text-sm">Years Experience</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-trust mb-2">50K+</div>
                <div className="text-sm">Active Traders</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-trust mb-2">$2M+</div>
                <div className="text-sm">Profits Generated</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
