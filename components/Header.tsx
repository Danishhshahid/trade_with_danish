'use client'

import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import { trackTelegramJoin, trackButtonClick } from '@/lib/fpixel'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMenuOpen(false)
    }
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-custom border-b border-gray-100">
      <div className="container-custom">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-profit to-trust rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">F</span>
            </div>
            <span className="text-xl font-bold text-dark">ForexWith<span className="text-profit">James</span></span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('features')}
              className="text-gray-600 hover:text-trust transition-colors cursor-pointer"
            >
              Features
            </button>
            <button 
              onClick={() => scrollToSection('testimonials')}
              className="text-gray-600 hover:text-trust transition-colors cursor-pointer"
            >
              Success Stories
            </button>
            <button 
              onClick={() => scrollToSection('faq')}
              className="text-gray-600 hover:text-trust transition-colors cursor-pointer"
            >
              FAQ
            </button>
            <a 
              href="https://t.me/Trade_with_Danish4x" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-secondary cursor-pointer"
              onClick={() => {
                trackTelegramJoin('Header Desktop')
                trackButtonClick('Join Telegram', 'Header Desktop')
              }}
            >
              Join Free
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-gray-600 hover:text-trust transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-100 bg-white">
            <div className="py-4 space-y-4">
              <button 
                onClick={() => scrollToSection('features')}
                className="block w-full text-left px-4 py-2 text-gray-600 hover:text-trust transition-colors cursor-pointer"
              >
                Features
              </button>
              <button 
                onClick={() => scrollToSection('testimonials')}
                className="block w-full text-left px-4 py-2 text-gray-600 hover:text-trust transition-colors cursor-pointer"
              >
                Success Stories
              </button>
              <button 
                onClick={() => scrollToSection('faq')}
                className="block w-full text-left px-4 py-2 text-gray-600 hover:text-trust transition-colors cursor-pointer"
              >
                FAQ
              </button>
              <a 
                href="https://t.me/Trade_with_Danish4x" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block mx-4 w-auto btn-secondary text-center cursor-pointer"
                onClick={() => {
                  trackTelegramJoin('Header Mobile')
                  trackButtonClick('Join Telegram', 'Header Mobile')
                }}
              >
                Join Free
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}