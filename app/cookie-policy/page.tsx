import Link from 'next/link'

export default function CookiePolicy() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Cookie Policy</h1>
            <p className="text-gray-600">Last updated: {new Date().toLocaleDateString()}</p>
          </div>
          
          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. What Are Cookies?</h2>
              <p className="text-gray-700 mb-4">
                Cookies are small text files that are placed on your device when you visit our website. They help us provide you with a better experience by remembering your preferences, analyzing how you use our site, and personalizing content.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. How We Use Cookies</h2>
              <p className="text-gray-700 mb-4">
                We use cookies for several purposes:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>To provide essential website functionality</li>
                <li>To remember your preferences and settings</li>
                <li>To analyze website traffic and usage patterns</li>
                <li>To personalize your experience</li>
                <li>To improve our services and website performance</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Types of Cookies We Use</h2>
              
              <h3 className="text-xl font-medium text-gray-800 mb-2">Essential Cookies:</h3>
              <p className="text-gray-700 mb-4">
                These cookies are necessary for the website to function properly. They enable basic functions like page navigation, access to secure areas, and form submissions. The website cannot function properly without these cookies.
              </p>

              <h3 className="text-xl font-medium text-gray-800 mb-2">Performance Cookies:</h3>
              <p className="text-gray-700 mb-4">
                These cookies collect information about how visitors use our website, such as which pages are visited most often and if users get error messages. This information is used to improve website performance and user experience.
              </p>

              <h3 className="text-xl font-medium text-gray-800 mb-2">Functional Cookies:</h3>
              <p className="text-gray-700 mb-4">
                These cookies allow the website to remember choices you make (such as your username, language, or region) and provide enhanced, more personal features. They may also be used to provide services you have requested.
              </p>

              <h3 className="text-xl font-medium text-gray-800 mb-2">Analytics Cookies:</h3>
              <p className="text-gray-700 mb-4">
                We use analytics cookies to understand how visitors interact with our website. This helps us improve our services and provide better user experiences.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Third-Party Cookies</h2>
              <p className="text-gray-700 mb-4">
                Some cookies on our website are set by third-party services that we use to enhance your experience:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li><strong>Google Analytics:</strong> To analyze website traffic and usage patterns</li>
                <li><strong>Payment Processors:</strong> To process secure transactions</li>
                <li><strong>Social Media:</strong> To enable social media sharing and integration</li>
                <li><strong>Advertising Networks:</strong> To provide relevant advertisements (if applicable)</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Cookie Duration</h2>
              <p className="text-gray-700 mb-4">
                Cookies on our website have different lifespans:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li><strong>Session Cookies:</strong> These are temporary cookies that are deleted when you close your browser</li>
                <li><strong>Persistent Cookies:</strong> These remain on your device for a set period or until you delete them</li>
                <li><strong>Third-Party Cookies:</strong> Duration is controlled by the third-party service providers</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Managing Your Cookie Preferences</h2>
              <p className="text-gray-700 mb-4">
                You have several options for managing cookies:
              </p>
              
              <h3 className="text-xl font-medium text-gray-800 mb-2">Browser Settings:</h3>
              <p className="text-gray-700 mb-4">
                Most web browsers allow you to control cookies through their settings. You can:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Delete existing cookies</li>
                <li>Block cookies from being set</li>
                <li>Set your browser to ask for permission before setting cookies</li>
                <li>Set your browser to reject all cookies</li>
              </ul>

              <h3 className="text-xl font-medium text-gray-800 mb-2">Cookie Consent:</h3>
              <p className="text-gray-700 mb-4">
                When you first visit our website, you will see a cookie consent banner. You can choose which types of cookies to accept or reject.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Impact of Disabling Cookies</h2>
              <p className="text-gray-700 mb-4">
                Please note that disabling certain cookies may affect the functionality of our website:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Essential cookies are required for basic website functionality</li>
                <li>Disabling performance cookies may limit our ability to improve the website</li>
                <li>Functional cookies enhance your user experience</li>
                <li>Analytics cookies help us understand user behavior and improve services</li>
              </ul>
            </section>

                        <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Updates to This Policy</h2>
              <p className="text-gray-700 mb-4">
                We may update this Cookie Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We will notify you of any material changes by posting the updated policy on our website.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Contact Us</h2>
              <p className="text-gray-700 mb-4">
                If you have any questions about our use of cookies or this Cookie Policy, please contact us at:
              </p>
              <p className="text-gray-700 mb-4">
                Email: privacy@forexsignals.com<br />
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
