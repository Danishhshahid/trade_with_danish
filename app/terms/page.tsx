import Link from 'next/link'

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Terms of Service</h1>
            <p className="text-gray-600">Last updated: {new Date().toLocaleDateString()}</p>
          </div>
          
          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Acceptance of Terms</h2>
              <p className="text-gray-700 mb-4">
                By accessing and using Forex Signals Pro ("Service"), you accept and agree to be bound by the terms and provision of this agreement.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Service Description</h2>
              <p className="text-gray-700 mb-4">
                Forex Signals Pro provides educational content, market analysis, and trading signals for informational purposes only. We do not guarantee profits or specific trading outcomes.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Risk Disclaimer</h2>
              <p className="text-gray-700 mb-4">
                Trading forex involves substantial risk of loss and is not suitable for all investors. Past performance does not guarantee future results. You should carefully consider your financial situation and risk tolerance before trading.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. User Responsibilities</h2>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>You are responsible for your own trading decisions</li>
                <li>You must comply with all applicable laws and regulations</li>
                <li>You agree not to misuse our services or violate any terms</li>
                <li>You are responsible for maintaining the confidentiality of your account</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Intellectual Property</h2>
              <p className="text-gray-700 mb-4">
                All content, trademarks, and intellectual property on this service are owned by Forex Signals Pro and are protected by copyright and other intellectual property laws.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Limitation of Liability</h2>
              <p className="text-gray-700 mb-4">
                Forex Signals Pro shall not be liable for any direct, indirect, incidental, special, or consequential damages resulting from the use or inability to use our services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Termination</h2>
              <p className="text-gray-700 mb-4">
                We reserve the right to terminate or suspend access to our service immediately, without prior notice, for any reason whatsoever.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Changes to Terms</h2>
              <p className="text-gray-700 mb-4">
                We reserve the right to modify these terms at any time. We will notify users of any material changes via email or through our service.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Contact Information</h2>
              <p className="text-gray-700 mb-4">
                If you have any questions about these Terms of Service, please contact us at:
              </p>
              <p className="text-gray-700 mb-4">
                Email: support@forexsignals.com<br />
                Telegram: <a href="https://t.me/Trade_with_Danish4x" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">@Trade_with_Danish4x</a>
              </p>
            </section>

          </div>

          <div className="text-center mt-8 pt-8 border-t border-gray-200">
            <div className="flex flex-wrap justify-center gap-4 mb-4">
              <Link href="/privacy" className="text-blue-600 hover:text-blue-800 font-medium">Privacy Policy</Link>
              <Link href="/risk-disclosure" className="text-blue-600 hover:text-blue-800 font-medium">Risk Disclosure</Link>
              <Link href="/cookie-policy" className="text-blue-600 hover:text-blue-800 font-medium">Cookie Policy</Link>
            </div>
            <Link href="/" className="text-blue-600 hover:text-blue-800 font-medium">
              ← Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
