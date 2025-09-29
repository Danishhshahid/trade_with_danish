'use client'

import { useState } from 'react'
import { Maximize2, TrendingUp, BarChart3, DollarSign, Zap, Target, ChevronLeft, ChevronRight } from 'lucide-react'
import photo1 from "@/public/assets/profit1.jpg"
import photo2 from "@/public/assets/profit2.jpg"
import photo3 from "@/public/assets/profit3.jpg"
import photo4 from "@/public/assets/profit4.jpg"
import photo5 from "@/public/assets/analysis1.jpg"
import photo6 from "@/public/assets/analysis2.jpg"
import photo7 from "@/public/assets/analysis3.jpg"
import photo8 from "@/public/assets/analysis4.jpg"
// Add your signal images here
import signal1 from "@/public/assets/1240 pips.jpg"
import signal2 from "@/public/assets/2100 pips.jpg"
import signal3 from "@/public/assets/3230+ pips.jpg"
import signal4 from "@/public/assets/4400 pips.jpg"
import signal5 from "@/public/assets/5280+ pips.jpg"
import signal6 from "@/public/assets/6470+ pips.jpg"
import signal7 from "@/public/assets/7235+ pips.jpg"
import signal8 from "@/public/assets/8160+ pips.jpg"
import Image from 'next/image'
import { trackTelegramJoin, trackButtonClick } from '@/lib/fpixel'
import bgImage from "@/public/assets/bg2.jpg"

export default function ProfitShowcaseSection() {
  const [activeTab, setActiveTab] = useState('signals')
  const [selectedImage, setSelectedImage] = useState<number | null>(null)
  const [currentSignalSlide, setCurrentSignalSlide] = useState(0)

  const signalImages = [
    {
      id: 1,
      src: signal1,
      pipsHit: 1240,
    },
    {
      id: 2,
      src: signal2,
      pipsHit: 2100,
    },
    {
      id: 3,
      src: signal3,
      pipsHit: 3230,
    },
    {
      id: 4,
      src: signal4,
      pipsHit: 4400,
    },
    {
      id: 5,
      src: signal5,
      pipsHit: 5280,
    },
    {
      id: 6,
      src: signal6,
      pipsHit: 6470,
    },
    {
      id: 7,
      src: signal7,
      pipsHit: 7235,
    },
    {
      id: 8,
      src: signal8,
      pipsHit: 8160,
    }
  ]

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
      alt: "Today's view on XAU/USD chart",
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

  // Carousel functions
  const nextSignalSlide = () => {
    setCurrentSignalSlide((prev) => (prev + 1) % Math.ceil(signalImages.length / getSlidesToShow()))
  }

  const prevSignalSlide = () => {
    setCurrentSignalSlide((prev) => (prev - 1 + Math.ceil(signalImages.length / getSlidesToShow())) % Math.ceil(signalImages.length / getSlidesToShow()))
  }

  const getSlidesToShow = () => {
    if (typeof window === 'undefined') return 4
    if (window.innerWidth >= 1280) return 4 // desktop
    if (window.innerWidth >= 768) return 2 // tablet
    return 1 // mobile
  }

  const getVisibleSignalSlides = () => {
    const slidesToShow = getSlidesToShow()
    const startIndex = currentSignalSlide * slidesToShow
    return signalImages.slice(startIndex, startIndex + slidesToShow)
  }

  return (
    <section className="section-padding relative text-white overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image 
          src={bgImage}
          alt="Trading background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-br from-dark/85 to-trust/50"></div>
      </div>

      {/* Content */}
      <div className="container-custom relative z-10">
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
          <div className="bg-white/10 backdrop-blur-sm rounded-full p-2 flex flex-wrap justify-center">
            <button
              onClick={() => setActiveTab('signals')}
              className={`px-6 py-3 rounded-full font-medium transition-all m-1 ${
                activeTab === 'signals'
                  ? 'bg-trust text-white shadow-lg'
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              <Zap size={20} className="inline mr-2" />
              Trading Signals
            </button>
            <button
              onClick={() => setActiveTab('profits')}
              className={`px-6 py-3 rounded-full font-medium transition-all m-1 ${
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
              className={`px-6 py-3 rounded-full font-medium transition-all m-1 ${
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
        {activeTab === 'signals' && (
          <div>
            <h3 className="text-3xl font-bold text-center mb-8">
              Recent Trading Signals
            </h3>
            
            {/* Signal Carousel */}
            <div className="relative">
              {/* Navigation Buttons */}
              <button
                onClick={prevSignalSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/20 hover:bg-white/30 rounded-full p-2 text-white transition-all duration-300 hidden md:flex items-center justify-center"
              >
                <ChevronLeft size={24} />
              </button>
              
              <button
                onClick={nextSignalSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/20 hover:bg-white/30 rounded-full p-2 text-white transition-all duration-300 hidden md:flex items-center justify-center"
              >
                <ChevronRight size={24} />
              </button>

              {/* Carousel Container */}
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
                {getVisibleSignalSlides().map((signal) => (
                  <div
                    key={signal.id}
                    className="bg-white/10 backdrop-blur-sm rounded-xl p-4 cursor-pointer hover:scale-[1.02] transition-all duration-300 shadow-lg hover:shadow-xl"
                    onClick={() => setSelectedImage(signal.id + 200)}
                  >
                    <div className="relative">
                      <Image 
                        src={signal.src} 
                        alt={`Trading signal hitting ${signal.pipsHit} pips`}
                        width={400}
                        height={600}
                        className="w-full h-64 md:h-80 object-cover rounded-lg shadow-md"
                      />
                      <div className="absolute top-3 right-3 bg-profit/90 backdrop-blur-sm text-white px-3 py-2 rounded-full text-sm font-bold flex items-center shadow-lg">
                        <Target size={14} className="mr-1.5" />
                        {signal.pipsHit}+ pips
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Mobile Navigation */}
              <div className="flex justify-center items-center gap-4 mt-6 md:hidden">
                <button
                  onClick={prevSignalSlide}
                  className="bg-white/20 hover:bg-white/30 rounded-full p-2 text-white transition-all duration-300"
                >
                  <ChevronLeft size={20} />
                </button>
                
                <div className="flex gap-2">
                  {Array.from({ length: Math.ceil(signalImages.length / getSlidesToShow()) }).map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSignalSlide(index)}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        currentSignalSlide === index ? 'bg-white' : 'bg-white/30'
                      }`}
                    />
                  ))}
                </div>

                <button
                  onClick={nextSignalSlide}
                  className="bg-white/20 hover:bg-white/30 rounded-full p-2 text-white transition-all duration-300"
                >
                  <ChevronRight size={20} />
                </button>
              </div>

              {/* Desktop Dots */}
              <div className="hidden md:flex justify-center items-center gap-2 mt-8">
                {Array.from({ length: Math.ceil(signalImages.length / getSlidesToShow()) }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSignalSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      currentSignalSlide === index ? 'bg-white' : 'bg-white/30'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'profits' && (
          <div>
            <h3 className="text-3xl font-bold text-center mb-8">
              Recent Trade Results
            </h3>
            <div className="grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
              {profitImages.map((image) => (
                <div
                  key={image.id}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 cursor-pointer hover:scale-[1.02] transition-all duration-300 shadow-lg hover:shadow-xl"
                  onClick={() => setSelectedImage(image.id)}
                >
                  <div className="relative mb-6">
                    <Image 
                      src={image.src} 
                      alt={image.alt}
                      width={600}
                      height={400}
                      className="w-full h-72 sm:h-80 object-cover rounded-lg shadow-md"
                    />
                    <div className="absolute top-3 right-3 bg-profit/90 backdrop-blur-sm text-white px-4 py-2 rounded-full text-lg font-bold shadow-lg">
                      {image.profit}
                    </div>
                  </div>
                  <div className="space-y-3">
                    <h4 className="text-xl font-semibold text-white">{image.title}</h4>
                    <div className="flex justify-between items-center text-sm text-gray-300">
                      <div className="bg-white/10 rounded-lg px-3 py-1">
                        <span className="font-medium">{image.timeframe}</span>
                      </div>
                      <div className="bg-white/10 rounded-lg px-3 py-1">
                        <span className="font-medium">{image.date}</span>
                      </div>
                    </div>
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
                className="absolute top-4 right-4 bg-white/20 hover:bg-white/30 rounded-full p-2 text-white transition-colors z-10"
              >
                <span className="text-2xl">×</span>
              </button>
              {/* Signal Images Modal */}
              {selectedImage >= 201 && selectedImage <= 208 && (
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 sm:p-6 max-w-3xl mx-auto">
                  {(() => {
                    const signal = signalImages.find(s => s.id === selectedImage - 200)
                    if (!signal) return null
                    return (
                      <div className="text-white">
                        <Image 
                          src={signal.src}
                          alt={`Trading signal hitting ${signal.pipsHit} pips`}
                          width={800}
                          height={1200}
                          className="w-full h-auto max-h-[70vh] object-contain rounded-lg mb-6 shadow-lg"
                        />
                        <div className="text-center">
                          <div className="bg-profit text-white px-6 py-3 rounded-full text-lg font-bold inline-flex items-center shadow-lg">
                            <Target size={20} className="mr-2" />
                            {signal.pipsHit}+ pips hit
                          </div>
                        </div>
                      </div>
                    )
                  })()}
                </div>
              )}
              {/* Profit Images Modal */}
              {selectedImage >= 1 && selectedImage <= 4 && (
                <Image 
                  src={selectedImage === 1 ? photo1 : selectedImage === 2 ? photo2 : selectedImage === 3 ? photo3 : photo4}
                  alt={`Trade result ${selectedImage}`}
                  width={800}
                  height={600}
                  className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
                />
              )}
              {/* Analysis Images Modal */}
              {selectedImage >= 101 && selectedImage <= 104 && (
                <Image 
                  src={selectedImage === 101 ? photo5 : selectedImage === 102 ? photo6 : selectedImage === 103 ? photo7 : photo8}
                  alt={`Technical analysis ${selectedImage - 100}`}
                  width={800}
                  height={600}
                  className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
                />
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
              onClick={() => {
                trackTelegramJoin('Profit Showcase')
                trackButtonClick('Join Telegram', 'Profit Showcase')
              }}
            >
              Join Telegram Channel
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}