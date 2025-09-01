'use client'

import { Shield, BarChart3, Users, MessageCircle, TrendingUp, DollarSign } from 'lucide-react'

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

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-profit to-wealth rounded-2xl p-12 text-white max-w-screen mx-auto">
            <h3 className="text-4xl font-bold mb-6">
              Ready to Let Us Manage Your Account?
            </h3>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
              We’re here for every account size. Grow your capital with trusted professionals, 
              share the profits fairly, and finally trade stress-free.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6">
                <div className="text-3xl font-bold text-trust mb-2">$2.4M+</div>
                <div className="text-gray-200">Capital Managed</div>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6">
                <div className="text-3xl font-bold text-trust mb-2">87.3%</div>
                <div className="text-gray-200">Average Win Rate</div>
              </div>
            </div>

            <a 
              href="https://t.me/Trade_with_Danish4x" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-primary text-xl px-12 py-5 group inline-block"
            >
              <MessageCircle size={24} className="mr-3 group-hover:scale-110 transition-transform" />
              Message Me About Account Management
            </a>
            <p className="text-sm text-gray-200 mt-4">
              ⚡ Quick response • Free consultation • No obligation
            </p>
          </div>
        </div>
      </div>
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

function CheckCircle({ size, className }: { size: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <polyline points="22,4 12,14.01 9,11.01" />
    </svg>
  )
}
