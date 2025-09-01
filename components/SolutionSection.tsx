'use client'

import { Target, TrendingUp, BarChart3, BookOpen, Users, Clock, Shield, Zap } from 'lucide-react'

const solutionFeatures = [
  {
    icon: Target,
    title: "Daily Signals (2-5)",
    description: "Get 2-5 high-probability signals every day, carefully analyzed and tested for maximum accuracy.",
    color: "from-profit to-trust"
  },
  {
    icon: TrendingUp,
    title: "Entry/SL/TP Levels",
    description: "Precise entry points, stop-loss, and take-profit levels for every trade. No more guessing!",
    color: "from-wealth to-profit"
  },
  {
    icon: BarChart3,
    title: "R:R Ratios",
    description: "Optimal risk-reward ratios (1:2, 1:3, 1:4) to maximize profits while minimizing risk.",
    color: "from-trust to-wealth"
  },
  {
    icon: BookOpen,
    title: "Full TA Breakdowns",
    description: "Complete technical analysis including support/resistance, trend lines, and market structure.",
    color: "from-profit to-wealth"
  },
  {
    icon: Users,
    title: "24/7 Community",
    description: "Join thousands of traders sharing insights, strategies, and support around the clock.",
    color: "from-wealth to-trust"
  },
  {
    icon: Clock,
    title: "Instant Alerts",
    description: "Real-time Telegram notifications so you never miss a profitable trading opportunity.",
    color: "from-trust to-profit"
  }
]

export default function SolutionSection() {
  return (
    <section id="solution" className="section-padding bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">
            Here's Exactly What You <span className="gradient-text">Get</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Professional-grade forex signals and education that most traders pay thousands for. 
            We're giving it to you completely FREE.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {solutionFeatures.map((feature, index) => (
            <div key={index} className="group">
              <div className="card hover:scale-105 transition-all duration-300 h-full">
                <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon size={28} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-dark mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Signal Example */}
        <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-dark mb-4">
              📊 See a Real Signal Example
            </h3>
            <p className="text-gray-600">
              This is exactly what you'll receive every day
            </p>
          </div>

          <div className="bg-gradient-to-r from-profit to-trust rounded-xl p-6 text-white">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-xl font-bold">🔥 EUR/USD BUY Signal</h4>
                  <span className="text-wealth font-bold text-lg">High Probability</span>
                </div>
                
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-white/80">Entry Price:</span>
                    <span className="font-bold">1.0850</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/80">Stop Loss:</span>
                    <span className="font-bold text-red-300">1.0820</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/80">Take Profit 1:</span>
                    <span className="font-bold text-wealth">1.0890</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/80">Take Profit 2:</span>
                    <span className="font-bold text-wealth">1.0920</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/80">Risk:Reward:</span>
                    <span className="font-bold text-wealth">1:2.5</span>
                  </div>
                </div>
              </div>

              <div>
                <h5 className="font-semibold mb-3">📈 Technical Analysis:</h5>
                <ul className="space-y-2 text-sm text-white/90">
                  <li>• Strong support at 1.0820</li>
                  <li>• RSI oversold (30)</li>
                  <li>• MACD bullish crossover</li>
                  <li>• Price above 200 EMA</li>
                  <li>• Fibonacci retracement 61.8%</li>
                </ul>
                
                <div className="mt-4 p-3 bg-white/20 rounded-lg">
                  <p className="text-sm">
                    <span className="font-semibold">Strategy:</span> Buy on pullback to support with tight stop loss. 
                    Target major resistance levels for maximum profit.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        
      </div>
    </section>
  )
}

const CheckCircle = ({ size, className }: { size: number; className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

