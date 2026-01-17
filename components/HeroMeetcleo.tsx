'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef, useState } from 'react'
import IPhoneWithNotifications from './IPhoneWithNotifications'
import WaitlistModal from './WaitlistModal'

const roastNotifications = [
  {
    id: 1,
    app: 'Uber Eats',
    title: '',
    message: "Laziness has a price: $28 for a cold burger. Well done, champ.",
    emoji: '',
    delay: 0.5,
  },
  {
    id: 2,
    app: 'Hola',
    title: '',
    message: "90% of your limit. Time to learn to live on love and fresh water (mostly fresh water).",
    emoji: '',
    delay: 1.5,
  },
  {
    id: 3,
    app: 'SPILL',
    title: '',
    message: "Red alert. Your banker just bought a new Tesla thanks to your overdraft fees. Thanks for that.",
    emoji: '',
    delay: 2.5,
  },
  {
    id: 4,
    app: 'SPILL',
    title: '',
    message: "Eating out again? Just a reminder that you have pasta and pesto waiting sadly in your cupboard.",
    emoji: '',
    delay: 3.5,
  },
]

const careNotifications = [
  {
    id: 1,
    app: 'Uber',
    title: '',
    message: "It was raining too much, you did the right thing taking an Uber. We're in this together.",
    emoji: '',
    delay: 0.5,
  },
  {
    id: 2,
    app: 'SPILL',
    title: '',
    message: "You saved $50 this week! Keep it up 💪",
    emoji: '',
    delay: 1.5,
  },
]

export default function HeroMeetcleo() {
  const containerRef = useRef<HTMLElement>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  })

  const phoneY = useTransform(scrollYProgress, [0, 1], [0, -100])
  const phoneOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center px-6 py-20 overflow-hidden bg-white"
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Copy */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h1 className="text-5xl md:text-7xl font-bold leading-tight text-gray-900">
              Can't bring yourself to open your banking app?
              <br />
              <span className="bg-gradient-to-r from-red-500 via-pink-500 to-purple-500 bg-clip-text text-transparent">
                SPILL takes care of everything.
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed">
              Chat with your AI financial advisor. No stress, no jargon. 
              Notifications that make you laugh instead of stress.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsModalOpen(true)}
                className="px-8 py-4 bg-gradient-to-r from-red-500 to-pink-500 text-white rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                Join Waitlist
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white border-2 border-gray-200 text-gray-700 rounded-full font-semibold text-lg hover:border-gray-300 transition-colors"
              >
                Learn More
              </motion.button>
            </div>
            <p className="text-sm text-gray-500 pt-2">
              Free • Secure • Less than 2 minutes
            </p>
          </motion.div>

          {/* Right: iPhone Visual */}
          <motion.div
            style={{ y: phoneY, opacity: phoneOpacity }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <IPhoneWithNotifications mode="roast" notifications={roastNotifications} />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
      <WaitlistModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  )
}

