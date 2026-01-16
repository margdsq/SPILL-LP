'use client'

import HeroMeetcleo from '@/components/HeroMeetcleo'
import ProblemSolution from '@/components/ProblemSolution'
import HowItWorks from '@/components/HowItWorks'
import AIChatSection from '@/components/AIChatSection'
import NotificationsShowcase from '@/components/NotificationsShowcase'
import BudgetTracking from '@/components/BudgetTracking'
import BadgesSection from '@/components/BadgesSection'
import CTASection from '@/components/CTASection'

export default function Home() {
  return (
    <main className="bg-white overflow-x-hidden">
      <HeroMeetcleo />
      <ProblemSolution />
      <HowItWorks />
      <AIChatSection />
      <NotificationsShowcase />
      <BudgetTracking />
      <BadgesSection />
      <CTASection />
    </main>
  )
}

