'use client'

import { Shield, BarChart3, Users, MessageCircle, TrendingUp, DollarSign } from 'lucide-react'
import { CheckCircle } from 'lucide-react' // Added missing import
import { trackTelegramJoin, trackButtonClick } from '@/lib/fpixel'
// Import your account management background image
import managementBgImage from "@/public/assets/bg1.jpg"

export default function AccountManagementSection() {
  return (
    <section className="section-padding bg-gradient-to-br from-white to-light">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-dark mb-6">
            Professional Account Management
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We handle everything for you. Whether your account is <span className="font-semibold">$100 or $10,000+</span>, 
            our traders manage it professionally. Profits are always shared 50/50.  
            First see the results—then trust us.
          </p>
        </div>

        {/* Single Account Management Card */}
        <div className="card hover:shadow-lg transition-shadow mb-16 max-w-3xl mx-auto">
          <div className="p-8 text-center">
            <div className="w-20 h-20 bg-gradient-to-br from-trust to-profit rounded-full flex items-center justify-center mx-auto mb-6">
              <DollarSign size={32} className="text-white" />
            </div>
            <h3 className="text-3xl font-bold text-dark mb-4">Account Management</h3>
            <div className="text-lg text-gray-600 mb-6">
              <p>No minimums. No complex plans. We trade, you relax.</p>
              <p className="mt-2"><span className="font-semibold text-profit">50% profit share</span>, no matter the account size.</p>
            </div>
            <ul className="space-y-3 text-left max-w-md mx-auto">
              <li className="flex items-center space-x-2">
                <CheckCircle size={18} className="text-profit flex-shrink-0" />
                <span className="text-gray-700">We execute trades with proven strategies</span>
              </li>
              <li className="flex items-center space-x-2">
                <CheckCircle size={18} className="text-profit flex-shrink-0" />
                <span className="text-gray-700">Daily/weekly performance updates</span>
              </li>
              <li className="flex items-center space-x-2">
                <CheckCircle size={18} className="text-profit flex-shrink-0" />
                <span className="text-gray-700">Secure and transparent process</span>
              </li>
              <li className="flex items-center space-x-2">
                <CheckCircle size={18} className="text-profit flex-shrink-0" />
                <span className="text-gray-700">You keep 50% of all profits</span>
              </li>
            </ul>
          </div>
        </div>

        {/* How It Works */}
        <div className="mt-16">
          <h3 className="text-3xl font-bold text-dark text-center mb-12">
            How Account Management Works
          </h3>
          <div className="grid md:grid-cols-4 gap-8">
            <Step number="1" title="Deposit Funds" text="Fund your own trading account" color="bg-trust" />
            <Step number="2" title="We Trade" text="Our experts handle everything" color="bg-profit" />
            <Step number="3" title="Track Results" text="See real-time performance" color="bg-wealth" />
            <Step number="4" title="Share Profits" text="50% goes directly to you" color="bg-dark" />
          </div>
        </div>
      </div>

      {/* Full Width CTA Section with Background */}
      <div className="mt-20 -mx-4 md:-mx-8 lg:-mx-16 xl:-mx-24 2xl:-mx-32">
        <div className="relative rounded-2xl overflow-hidden shadow-2xl">
          {/* Background Image */}
          <div className="absolute inset-0">
            <div 
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: `url(${managementBgImage.src})`,
                backgroundColor: '#001a33' // Fallback color if image fails to load
              }}
            />
            {/* Dark overlay for better text readability */}
            <div className="absolute inset-0 bg-gradient-to-br from-profit/90 via-wealth/85 to-trust/90" />
            
            {/* Animated management elements overlay */}
            <div className="absolute inset-0 overflow-hidden">
              {/* Floating dollar signs */}
              <div className="absolute top-8 left-8 animate-float opacity-20">
                <DollarSign size={40} className="text-white" />
              </div>
              
              <div className="absolute top-12 right-12 animate-float-delayed opacity-20">
                <BarChart3 size={35} className="text-wealth" />
              </div>
              
              <div className="absolute bottom-16 left-16 animate-pulse opacity-25">
                <TrendingUp size={30} className="text-profit" />
              </div>
              
              <div className="absolute bottom-20 right-20 animate-bounce opacity-20">
                <Shield size={32} className="text-white" />
              </div>
              
              {/* Additional floating percentage symbols */}
              <div className="absolute top-1/4 left-1/3 animate-float opacity-15">
                <div className="text-2xl font-bold text-wealth opacity-60">50%</div>
              </div>
              
              <div className="absolute top-1/2 right-1/4 animate-float-delayed opacity-15">
                <div className="text-xl font-bold text-profit opacity-60">87.3%</div>
              </div>
              
              <div className="absolute bottom-1/3 left-1/5 animate-pulse opacity-15">
                <div className="text-lg font-bold text-white opacity-60">$2.4M+</div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="relative z-10 px-6 md:px-8 lg:px-12 py-12 text-white">
            <div className="text-center mb-8">
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 drop-shadow-lg">
                Ready to Let Us Manage Your Account?
              </h3>
              <p className="text-xl md:text-2xl text-gray-100 mb-8 max-w-4xl mx-auto drop-shadow-sm leading-relaxed">
                We're here for every account size. Grow your capital with trusted professionals, 
                share the profits fairly, and finally trade stress-free.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8 max-w-4xl mx-auto">
              <div className="bg-white/20 backdrop-blur-md rounded-xl p-6 border border-white/30 shadow-lg hover:bg-white/25 transition-colors">
                <div className="text-3xl lg:text-4xl font-bold text-wealth mb-2 drop-shadow-md">$2.4M+</div>
                <div className="text-gray-100 text-sm lg:text-base">Capital Managed</div>
              </div>
              <div className="bg-white/20 backdrop-blur-md rounded-xl p-6 border border-white/30 shadow-lg hover:bg-white/25 transition-colors">
                <div className="text-3xl lg:text-4xl font-bold text-wealth mb-2 drop-shadow-md">87.3%</div>
                <div className="text-gray-100 text-sm lg:text-base">Average Win Rate</div>
              </div>
              <div className="bg-white/20 backdrop-blur-md rounded-xl p-6 border border-white/30 shadow-lg hover:bg-white/25 transition-colors">
                <div className="text-3xl lg:text-4xl font-bold text-wealth mb-2 drop-shadow-md">50/50</div>
                <div className="text-gray-100 text-sm lg:text-base">Profit Share</div>
              </div>
              <div className="bg-white/20 backdrop-blur-md rounded-xl p-6 border border-white/30 shadow-lg hover:bg-white/25 transition-colors">
                <div className="text-3xl lg:text-4xl font-bold text-wealth mb-2 drop-shadow-md">$100+</div>
                <div className="text-gray-100 text-sm lg:text-base">Minimum Account</div>
              </div>
            </div>

            <div className="text-center">
              <a 
                href="https://t.me/Trade_with_Danish4x" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-primary text-xl md:text-2xl px-12 py-5 group inline-block shadow-2xl hover:shadow-3xl transition-all duration-300"
                onClick={() => {
                  trackTelegramJoin('Account Management')
                  trackButtonClick('Join Telegram', 'Account Management')
                }}
              >
                <MessageCircle size={24} className="mr-3 group-hover:scale-110 transition-transform" />
                Message Me About Account Management
              </a>
              <p className="text-sm md:text-base text-gray-100 mt-4 drop-shadow-sm">
                ⚡ Quick response • Free consultation • No obligation
              </p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(5deg); }
        }
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(-5deg); }
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

function Step({ number, title, text, color }: { number: string, title: string, text: string, color: string }) {
  return (
    <div className="text-center">
      <div className={`w-16 h-16 ${color} rounded-full flex items-center justify-center mx-auto mb-4`}>
        <span className="text-white text-2xl font-bold">{number}</span>
      </div>
      <h4 className="text-xl font-semibold text-dark mb-2">{title}</h4>
      <p className="text-gray-600">{text}</p>
    </div>
  )
}