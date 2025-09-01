'use client'

import { useState } from 'react'
import { ChevronDown, AlertTriangle, Shield, CheckCircle } from 'lucide-react'

export default function FAQSection() {
  const [openFaq, setOpenFaq] = useState<number | null>(0)

  const faqs = [
    {
      id: 0,
      question: 'Does it cost anything to join?',
      answer:
        'No. Our forex signals service is 100% free — no hidden fees, no upsells. We believe everyone should have access to professional trading insights.'
    },
    {
      id: 1,
      question: 'How do I manage my trading account?',
      answer:
        'You give us login and password on MTQ5, still you have more access, we cant withdraw or deposit money we just trade and make profits and you will send us our 50% profit share..'
    },
    {
      id: 2,
      question: 'How many signals do you provide daily?',
      answer:
        'On average, we send 2–5 high-probability signals per day. Each includes clear entry, stop-loss, and take-profit levels backed by technical analysis.'
    },
    {
      id: 3,
      question: 'What is your win rate?',
      answer:
        'Our signals currently average an 85%+ win rate based on live results. Still, no strategy is risk-free. We emphasize consistency and strict risk management.'
    },
    {
      id: 4,
      question: 'How are signals delivered?',
      answer:
        'All signals are sent instantly via our Telegram channel with push notifications, so you never miss an opportunity.'
    }
  ]

  const toggleFaq = (id: number) => {
    setOpenFaq(openFaq === id ? null : id)
  }

  return (
    <section id="faq" className="section-padding bg-gradient-to-br from-light to-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-dark mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Quick answers to the most important questions about our free forex signals.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-4xl mx-auto mb-16">
          {faqs.map((faq) => (
            <div key={faq.id} className="mb-4">
              <button
                onClick={() => toggleFaq(faq.id)}
                className="w-full bg-white rounded-xl p-6 text-left shadow-sm border border-gray-200 hover:shadow-md transition-shadow"
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-dark pr-4">{faq.question}</h3>
                  <ChevronDown
                    size={20}
                    className={`text-gray-500 transition-transform ${
                      openFaq === faq.id ? 'rotate-180' : ''
                    }`}
                  />
                </div>
              </button>
              {openFaq === faq.id && (
                <div className="bg-white rounded-b-xl p-6 border-t-0 border border-gray-200 shadow-sm">
                  <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Risk Disclaimer */}
        <div className="bg-gradient-to-r from-red-500 to-orange-500 rounded-2xl p-8 text-white mb-16">
          <div className="text-center mb-6">
            <AlertTriangle size={48} className="mx-auto mb-4 text-red-200" />
            <h3 className="text-3xl font-bold mb-4">Important Risk Warning</h3>
          </div>

          <div className="max-w-4xl mx-auto space-y-4 text-lg">
            <p>
              <strong>Forex trading carries significant risk.</strong> The high degree of leverage
              can work for or against you.
            </p>
            <p>
              <strong>Past performance is not a guarantee.</strong> Market conditions can shift
              rapidly, and no strategy is foolproof.
            </p>
            <p>
              <strong>Trade responsibly.</strong> Never risk more than you can afford to lose. Always
              use stop-loss and proper risk management.
            </p>
            <p>
              <strong>Signals are educational.</strong> We provide analysis and guidance, but every
              trade decision is yours alone.
            </p>
            <div className="text-center mt-6">
              <a 
                href="/risk-disclosure" 
                className="inline-flex items-center px-6 py-3 bg-white text-red-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
              >
                Read Full Risk Disclosure →
              </a>
            </div>
          </div>
        </div>

        {/* Trust Points */}
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-trust rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield size={24} className="text-white" />
            </div>
            <h4 className="text-xl font-bold text-dark mb-2">100% Transparent</h4>
            <p className="text-gray-600">
              All signals and performance metrics are fully trackable and verifiable.
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-profit rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle size={24} className="text-white" />
            </div>
            <h4 className="text-xl font-bold text-dark mb-2">No Hidden Fees</h4>
            <p className="text-gray-600">Completely free — no upsells, no hidden charges.</p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-wealth rounded-full flex items-center justify-center mx-auto mb-4">
              <AlertTriangle size={24} className="text-white" />
            </div>
            <h4 className="text-xl font-bold text-dark mb-2">Risk Awareness</h4>
            <p className="text-gray-600">We teach you to protect your capital first, profits second.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
