'use client'

import { useState } from 'react'
import { Maximize2, TrendingUp, BarChart3, DollarSign } from 'lucide-react'
import photo1 from "@/public/assets/profit1.jpg"
import photo2 from "@/public/assets/profit2.jpg"
import photo3 from "@/public/assets/profit3.jpg"
import photo4 from "@/public/assets/profit4.jpg"
import photo5 from "@/public/assets/analysis1.jpg"
import photo6 from "@/public/assets/analysis2.jpg"
import photo7 from "@/public/assets/analysis3.jpg"
import photo8 from "@/public/assets/analysis4.jpg"
import Image from 'next/image'

export default function ProfitShowcaseSection() {
  const [activeTab, setActiveTab] = useState('profits')
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const profitImages = [
    {
      id: 1,
      src: photo1,
      alt: 'Forex profit screenshot showing $3,155 gain',
      title: 'XAU/USD Trade Result',
      profit: '+$3,155',
      timeframe: '4H Chart',
      date: 'Dec 15, 2024'
    },
    {
      id: 2,
      src: photo2,
      alt: 'XAU/USD trade showing $11,508 profit',
      title: 'XAU/USD Trade Result',
      profit: '+$11,508',
      timeframe: 'Daily Chart',
      date: 'May 18, 2025'
    },
    {
      id: 3,
      src: photo3,
      alt: 'XAU/USD trade result with $3,843 profit',
      title: 'XAU/USD Trade Result',
      profit: '+$3,843',
      timeframe: 'Daily Chart',
      date: 'June 21, 2025'
    },
    {
      id: 4,
      src: photo4,
      alt: 'XAU/USD trade showing $6,935 gain',
      title: 'XAU/USD Trade Result',
      profit: '+$6,935',
      timeframe: 'Daily Chart',
      date: 'August 12, 2025'
    }
  ]

  const technicalAnalysisImages = [
    {
      id: 1,
      src: photo5,
      alt: 'Today’s view on XAU/USD chart',
      title: 'Fibonacci Analysis',
      description: 'XAU/USD 4H chart with key support levels',
      indicators: 'Fib 281.8%, 161.8%, 100.0%'
    },
    {
      id: 2,
      src: photo6,
      alt: 'XAU/USD showing bullish divergence',
      title: 'Trendline Analysis',
      description: 'Wait for proper test and bullish confirmation. If price breaks trendline, then no buying.',
      indicators: 'Market Structure, Trendline, Action Area'
    },
    {
      id: 3,
      src: photo7,
      alt: 'XAU/USD support and resistance analysis',
      title: 'Multi-Timeframe',
      description: 'Wait for proper test and bearish confirmation.',
      indicators: 'Moving Averages, Bollinger Bands, Support and Resistance'
    },
    {
      id: 4,
      src: photo8,
      alt: 'Support and resistance levels on XAU/USD',
      title: 'S/R Levels',
      description: 'Retest pending. If price gives retest, then after retest we can expect long buying again in XAU/USD.',
      indicators: 'Horizontal S/R, Trend Lines'
    }
  ]

  const accountStats = [
    { label: 'Total Profit', value: '$47,890', change: '+23.4%', trend: 'up' },
    { label: 'Win Rate', value: '87.3%', change: '+2.1%', trend: 'up' },
    { label: 'Total Trades', value: '156', change: '+12', trend: 'up' },
    { label: 'Average R:R', value: '1:2.4', change: '+0.3', trend: 'up' }
  ]

  return (
    <section className="section-padding bg-gradient-to-br from-dark to-trust text-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Real Results, Real Profits
          </h2>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            See the actual trades and technical analysis that generate consistent profits. 
            No fake screenshots - just real results from our proven strategies.
          </p>
        </div>

        {/* Account Statistics */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          {accountStats.map((stat, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
              <div className="text-3xl font-bold text-wealth mb-2">{stat.value}</div>
              <div className="text-gray-300 mb-2">{stat.label}</div>
              <div className={`flex items-center justify-center space-x-1 ${
                stat.trend === 'up' ? 'text-profit' : 'text-red-400'
              }`}>
                <TrendingUp size={16} />
                <span className="text-sm">{stat.change}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="bg-white/10 backdrop-blur-sm rounded-full p-2">
            <button
              onClick={() => setActiveTab('profits')}
              className={`px-6 py-3 rounded-full font-medium transition-all ${
                activeTab === 'profits'
                  ? 'bg-trust text-white shadow-lg'
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              <DollarSign size={20} className="inline mr-2" />
              Profit Screenshots
            </button>
            <button
              onClick={() => setActiveTab('analysis')}
              className={`px-6 py-3 rounded-full font-medium transition-all ${
                activeTab === 'analysis'
                  ? 'bg-trust text-white shadow-lg'
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              <BarChart3 size={20} className="inline mr-2" />
              Technical Analysis
            </button>
          </div>
        </div>

        {/* Content Tabs */}
        {activeTab === 'profits' && (
          <div>
            <h3 className="text-3xl font-bold text-center mb-8">
              Recent Trade Results
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {profitImages.map((image) => (
                <div
                  key={image.id}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-4 cursor-pointer hover:scale-105 transition-transform"
                  onClick={() => setSelectedImage(image.id)}
                >
                  <div className="relative mb-4">
                    <Image 
                      src={image.src} 
                      alt={image.alt}
                      width={400}
                      height={192}
                      className="w-full h-48 object-cover rounded-lg"
                    />
                    <div className="absolute top-2 right-2 bg-profit text-white px-2 py-1 rounded-full text-sm font-bold">
                      {image.profit}
                    </div>
                  </div>
                  <h4 className="font-semibold mb-2">{image.title}</h4>
                  <div className="text-sm text-gray-300 space-y-1">
                    <div>{image.timeframe}</div>
                    <div>{image.date}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'analysis' && (
          <div>
            <h3 className="text-3xl font-bold text-center mb-8">
              Technical Analysis Examples
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              {technicalAnalysisImages.map((image) => (
                <div
                  key={image.id}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 cursor-pointer hover:scale-105 transition-transform"
                  onClick={() => setSelectedImage(image.id + 100)}
                >
                  <div className="relative mb-4">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      width={600}
                      height={400}
                      className="w-full h-64 object-cover rounded-lg"
                    />
                  </div>
                  <h4 className="text-xl font-semibold mb-2">{image.title}</h4>
                  <p className="text-gray-300 mb-3">{image.description}</p>
                  <div className="text-sm text-profit font-medium">
                    Indicators: {image.indicators}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Image Modal */}
        {selectedImage !== null && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
            <div className="relative max-w-4xl max-h-full">
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 bg-white/20 hover:bg-white/30 rounded-full p-2 text-white transition-colors"
              >
                <span className="text-2xl">×</span>
              </button>
              {selectedImage === 1 ? (
                <Image 
                  src={photo1} 
                  alt="XAU/USD Trade Result - $3,155 profit"
                  width={800}
                  height={600}
                  className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
                />
              ) : selectedImage === 2 ? (
                <Image 
                  src={photo2} 
                  alt="XAU/USD Trade Result - $11,508 profit"
                  width={800}
                  height={600}
                  className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
                />
              ) : selectedImage === 3 ? (
                <Image 
                  src={photo3} 
                  alt="XAU/USD Trade Result - $3,843 profit"
                  width={800}
                  height={600}
                  className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
                />
              ) : selectedImage === 4 ? (
                <Image 
                  src={photo4} 
                  alt="XAU/USD Trade Result - $6,935 profit"
                  width={800}
                  height={600}
                  className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
                />
              ) : selectedImage === 101 ? (
                <Image 
                  src={photo5} 
                  alt="Fibonacci analysis on XAU/USD"
                  width={800}
                  height={600}
                  className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
                />
              ) : selectedImage === 102 ? (
                <Image 
                  src={photo6} 
                  alt="Trendline analysis on XAU/USD"
                  width={800}
                  height={600}
                  className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
                />
              ) : selectedImage === 103 ? (
                <Image 
                  src={photo7} 
                  alt="Support and resistance analysis on XAU/USD"
                  width={800}
                  height={600}
                  className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
                />
              ) : selectedImage === 104 ? (
                <Image 
                  src={photo8} 
                  alt="S/R levels on XAU/USD"
                  width={800}
                  height={600}
                  className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
                />
              ) : (
                <div className="w-full h-96 bg-gradient-to-br from-gray-700 to-gray-800 rounded-lg flex items-center justify-center">
                  <div className="text-center text-white">
                    <Maximize2 size={48} className="mx-auto mb-4 text-gray-400" />
                    <p className="text-lg">Image placeholder</p>
                    <p className="text-sm text-gray-400 mt-2">
                      Replace with actual profit screenshots and technical analysis images
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">
              Ready to See These Results in Your Account?
            </h3>
            <p className="text-gray-200 mb-6">
              Join our Telegram channel for real-time signals and start building your trading success today.
            </p>
            <a 
              href="https://t.me/Trade_with_Danish4x" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-primary text-lg px-8 py-4 inline-block"
            >
              Join Telegram Channel
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
