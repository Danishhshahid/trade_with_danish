import Link from 'next/link'

export default function RiskDisclosure() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Risk Disclosure Statement</h1>
            <p className="text-gray-600">Last updated: {new Date().toLocaleDateString()}</p>
          </div>
          
          <div className="prose prose-lg max-w-none">
            <div className="bg-red-50 border-l-4 border-red-400 p-4 mb-8">
              <div className="flex">
                <div className="flex-shrink-0">
                  <svg className="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="ml-3">
                  <p className="text-sm text-red-700">
                    <strong>IMPORTANT:</strong> This document contains important information about the risks associated with forex trading. Please read it carefully before making any trading decisions.
                  </p>
                </div>
              </div>
            </div>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. General Risk Warning</h2>
              <p className="text-gray-700 mb-4">
                Trading foreign exchange (forex) carries a high level of risk and may not be suitable for all investors. The high degree of leverage can work against you as well as for you. Before deciding to trade foreign exchange, you should carefully consider your investment objectives, level of experience, and risk appetite.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Specific Risks of Forex Trading</h2>
              
              <h3 className="text-xl font-medium text-gray-800 mb-2">Market Risk:</h3>
              <p className="text-gray-700 mb-4">
                Forex markets are highly volatile and can move rapidly in response to economic, political, and social events. These movements can result in significant losses.
              </p>

              <h3 className="text-xl font-medium text-gray-800 mb-2">Leverage Risk:</h3>
              <p className="text-gray-700 mb-4">
                Forex trading often involves high leverage, which can amplify both gains and losses. A small market movement can result in substantial losses that exceed your initial investment.
              </p>

              <h3 className="text-xl font-medium text-gray-800 mb-2">Liquidity Risk:</h3>
              <p className="text-gray-700 mb-4">
                While forex markets are generally liquid, there may be times when it is difficult to execute trades at desired prices, especially during volatile market conditions.
              </p>

              <h3 className="text-xl font-medium text-gray-800 mb-2">Counterparty Risk:</h3>
              <p className="text-gray-700 mb-4">
                There is a risk that the broker or financial institution with which you trade may become insolvent or fail to meet its obligations.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. No Guarantee of Profits</h2>
              <p className="text-gray-700 mb-4">
                Past performance is not indicative of future results. The historical performance of any trading strategy or signal does not guarantee future success. You should not expect to achieve similar results or returns.
              </p>
              <p className="text-gray-700 mb-4">
                <strong>Important:</strong> Our trading signals and analysis are for informational purposes only and do not constitute investment advice. We do not guarantee profits or specific trading outcomes.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Suitability Considerations</h2>
              <p className="text-gray-700 mb-4">
                Forex trading may not be suitable for you if:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>You cannot afford to lose your entire investment</li>
                <li>You are not comfortable with high levels of risk</li>
                <li>You do not have sufficient time to monitor your positions</li>
                <li>You lack experience in financial markets</li>
                <li>You have limited financial resources</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Regulatory Considerations</h2>
              <p className="text-gray-700 mb-4">
                Forex trading is subject to regulation in many jurisdictions. You should ensure that you understand the regulatory framework applicable to your trading activities and that your broker is properly licensed and regulated.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Tax Implications</h2>
              <p className="text-gray-700 mb-4">
                Trading profits and losses may have tax implications. You should consult with a qualified tax advisor to understand the tax consequences of your trading activities.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Recommendations</h2>
              <p className="text-gray-700 mb-4">
                Before engaging in forex trading, we strongly recommend that you:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Educate yourself about forex markets and trading strategies</li>
                <li>Start with a demo account to practice without real money</li>
                <li>Only trade with money you can afford to lose</li>
                <li>Use proper risk management techniques</li>
                <li>Consider seeking advice from qualified financial professionals</li>
                <li>Never invest more than you can afford to lose</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Acknowledgment</h2>
              <p className="text-gray-700 mb-4">
                By using our services, you acknowledge that you have read and understood this risk disclosure statement. You confirm that you are aware of the risks involved in forex trading and that you are willing to accept these risks.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Contact Information</h2>
              <p className="text-gray-700 mb-4">
                If you have any questions about this risk disclosure statement or need clarification on any points, please contact us at:
              </p>
              <p className="text-gray-700 mb-4">
                Email: support@forexsignals.com<br />
                Telegram: <a href="https://t.me/Trade_with_Danish4x" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">@Trade_with_Danish4x</a>
              </p>
            </section>

          </div>

          <div className="text-center mt-8 pt-8 border-t border-gray-200">
            <div className="flex flex-wrap justify-center gap-4 mb-4">
              <Link href="/terms" className="text-blue-600 hover:text-blue-800 font-medium">Terms of Service</Link>
              <Link href="/privacy" className="text-blue-600 hover:text-blue-800 font-medium">Privacy Policy</Link>
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
