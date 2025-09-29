'use client'

import { TrendingUp, MessageCircle, Mail, Phone, MapPin } from 'lucide-react'
import { FaTelegram } from "react-icons/fa";
import { trackTelegramJoin, trackButtonClick } from '@/lib/fpixel'


export default function Footer() {
  return (
    <footer className="bg-dark text-white">
      <div className="container-custom py-16">
        <div className="grid md:grid-cols-4 gap-8">
                     {/* Company Info */}
           <div className="md:col-span-2">
             <div className="flex items-center space-x-3 mb-6">
               <div className="w-12 h-12 bg-gradient-to-br from-trust to-profit rounded-lg flex items-center justify-center">
                 <TrendingUp size={24} className="text-white" />
               </div>
               <div>
                 <div className="text-2xl font-bold">Forex With James</div>
                 <div className="text-gray-400">Professional Trading Signals</div>
               </div>
             </div>
             <p className="text-gray-300 mb-6 max-w-md">
               Providing institutional-grade forex signals and education to help traders 
               achieve consistent profits. Join our community of 1k+ successful traders.
             </p>
           </div>


           {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <FaTelegram size={16} className="text-trust" />
                <span className="text-gray-300">
                                 <a 
                     href="https://t.me/Trade_with_Danish4x" 
                   target="_blank" 
                   rel="noopener noreferrer"
                   onClick={() => {
                     trackTelegramJoin('Footer')
                     trackButtonClick('Join Telegram', 'Footer')
                   }}
                 >Join Now</a>
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin size={16} className="text-trust" />
                <span className="text-gray-300">Global Service</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="grid md:grid-cols-2 gap-4 items-center">
            <div className="text-gray-400 text-sm">
              © 2024 Forex With James. All rights reserved.
            </div>
            <div className="flex flex-wrap gap-4 text-sm">
              <a href="/terms" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a>
              <a href="/privacy" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
              <a href="/risk-disclosure" className="text-gray-400 hover:text-white transition-colors">Risk Disclosure</a>
              <a href="/cookie-policy" className="text-gray-400 hover:text-white transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>

      
      </div>
    </footer>
  )
}
