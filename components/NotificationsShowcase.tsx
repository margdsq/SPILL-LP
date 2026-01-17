'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import IPhoneWithNotifications from './IPhoneWithNotifications'

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
  {
    id: 3,
    app: 'SPILL',
    title: '',
    message: "Your budget is under control. Congratulations! 🎉",
    emoji: '',
    delay: 2.5,
  },
]

export default function NotificationsShowcase() {
  const containerRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  })

  const leftPhoneY = useTransform(scrollYProgress, [0, 1], [0, -50])
  const rightPhoneY = useTransform(scrollYProgress, [0, 1], [0, 50])

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center px-6 py-20 bg-gray-50"
    >
      <div className="max-w-7xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900">
            Notifications that lighten the mood
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choose your style: caring or roast. It's up to you.
          </p>
        </motion.div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-16">
          {/* Roast iPhone */}
          <motion.div
            style={{ y: leftPhoneY }}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center"
          >
            <div className="mb-4">
              <span className="text-lg font-bold bg-gradient-to-r from-red-500 to-pink-500 bg-clip-text text-transparent">
                Roast Mode
              </span>
            </div>
            <IPhoneWithNotifications mode="roast" notifications={roastNotifications} />
          </motion.div>

          {/* Care iPhone */}
          <motion.div
            style={{ y: rightPhoneY }}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center"
          >
            <div className="mb-4">
              <span className="text-lg font-bold bg-gradient-to-r from-green-500 to-emerald-500 bg-clip-text text-transparent">
                Care Mode
              </span>
            </div>
            <IPhoneWithNotifications mode="care" notifications={careNotifications} />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

