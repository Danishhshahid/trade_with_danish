'use client'

import { TrendingDown, AlertTriangle, DollarSign, Target } from 'lucide-react'

export default function PainAgitationSection() {
  const painPoints = [
    {
      icon: TrendingDown,
      title: 'Losing Money Consistently',
      description: 'Most traders lose 70-90% of their capital within the first year',
      stat: '90% of traders fail'
    },
    {
      icon: AlertTriangle,
      title: 'No Clear Strategy',
      description: 'Trading without a proven system leads to emotional decisions',
      stat: '85% trade emotionally'
    },
    {
      icon: DollarSign,
      title: 'Missing Opportunities',
      description: 'Watching profitable setups pass by due to lack of knowledge',
      stat: 'Miss 60% of setups'
    },
    {
      icon: Target,
      title: 'Poor Risk Management',
      description: 'Risking too much per trade or no stop-loss discipline',
      stat: 'Lose 3x more than gains'
    }
  ]

  const tradingStats = [
    { label: 'Retail Traders Fail', value: '90%', color: 'text-red-900' },
    { label: 'Lose Money Monthly', value: '75%', color: 'text-red-900' },
    { label: 'No Risk Management', value: '80%', color: 'text-red-900' },
    { label: 'Trade Emotionally', value: '85%', color: 'text-red-900' }
  ]

  return (
    <section className="section-padding bg-gradient-to-br from-red-50 to-orange-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-dark mb-6">
            The Harsh Reality of Forex Trading
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Most traders fail because they lack professional guidance. 
            Don't become another statistic - get the help you need.
          </p>
        </div>

        {/* Pain Points Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {painPoints.map((point, index) => (
            <div key={index} className="card bg-white border-l-4 border-red-500 hover:shadow-lg transition-shadow">
              <div className="p-6">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <point.icon size={24} className="text-red-500" />
                </div>
                <h3 className="text-xl font-bold text-dark mb-3">{point.title}</h3>
                <p className="text-gray-600 mb-4">{point.description}</p>
                <div className="text-lg font-bold text-red-500">{point.stat}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Statistics Block */}
        <div className="bg-gradient-to-r from-red-500 to-orange-500 rounded-2xl p-8 text-white mb-16">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-4">
              The Numbers Don't Lie
            </h3>
            <p className="text-xl text-red-100">
              This is why most traders struggle and lose money consistently
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6">
            {tradingStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className={`text-4xl font-bold mb-2 ${stat.color}`}>
                  {stat.value}
                </div>
                <div className="text-red-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Solution Preview */}
        <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold text-dark mb-4">
                But There's a Better Way
              </h3>
              <p className="text-lg text-gray-600 mb-6">
                Professional traders use proven strategies, risk management, and 
                institutional-level analysis. Now you can too - completely free.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-profit rounded-full flex items-center justify-center">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <span className="text-gray-700">Daily professional signals</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-profit rounded-full flex items-center justify-center">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <span className="text-gray-700">Risk management guidance</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-profit rounded-full flex items-center justify-center">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <span className="text-gray-700">Professional education</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-profit rounded-full flex items-center justify-center">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <span className="text-gray-700">24/7 community support</span>
                </li>
              </ul>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-br from-trust to-profit rounded-xl p-8 text-white">
                <div className="text-6xl font-bold text-wealth mb-4">85%</div>
                <div className="text-2xl mb-2">Win Rate</div>
                <div className="text-lg text-gray-200">
                  vs. 10% for most retail traders
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
