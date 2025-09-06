'use client'

import HeroSection from '@/components/HeroSection'
import SocialProofSection from '@/components/SocialProofSection'
import PainAgitationSection from '@/components/PainAgitationSection'
import SolutionSection from '@/components/SolutionSection'
import FeaturesSection from '@/components/FeaturesSection'
import TestimonialsSection from '@/components/TestimonialsSection'
import AccountManagementSection from '@/components/AccountManagementSection'
import ProfitShowcaseSection from '@/components/ProfitShowcaseSection'
import FAQSection from '@/components/FAQSection'
import CTASection from '@/components/CTASection'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-light via-white to-light">
      <Header />
      
      <div>
        <HeroSection />
        <ProfitShowcaseSection />
        <TestimonialsSection />
        <AccountManagementSection />
        <PainAgitationSection />
        {/* <SocialProofSection /> */}
        {/* <SolutionSection /> */}
        <FeaturesSection />
        {/* <CTASection /> */}
        <FAQSection />
      </div>
      
      <Footer />
    </main>
  )
}
