'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import IPhoneWithNotifications from './IPhoneWithNotifications'

const roastNotifications = [
  {
    id: 1,
    app: 'Tobacco Shop',
    title: '',
    message: "$13 on cigarettes? Your savings account is crying.",
    emoji: '🚬',
    delay: 0.5,
  },
  {
    id: 2,
    app: 'Starbucks',
    title: '',
    message: "Another $6 coffee? At this rate, you'll end up under a bridge.",
    emoji: '☕️',
    delay: 1.5,
  },
  {
    id: 3,
    app: 'Uber Eats',
    title: '',
    message: "$25 on delivery? You know you have a fridge at home, right?",
    emoji: '🍔',
    delay: 2.5,
  },
]

const careNotifications = [
  {
    id: 1,
    app: 'Uber',
    title: '',
    message: "It was raining too much, you did the right thing taking an Uber. We're in this together.",
    emoji: '🚗',
    delay: 0.5,
  },
  {
    id: 2,
    app: 'SPILL',
    title: '',
    message: "You saved $50 this week! Keep it up 💪",
    emoji: '💰',
    delay: 1.5,
  },
  {
    id: 3,
    app: 'SPILL',
    title: '',
    message: "Your budget is under control. Congratulations! 🎉",
    emoji: '✨',
    delay: 2.5,
  },
]

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8])
  const y = useTransform(scrollYProgress, [0, 0.5], [0, 100])

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center px-6 py-20 overflow-hidden bg-white"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-96 h-96 rounded-full blur-3xl opacity-20"
          style={{
            background: 'linear-gradient(135deg, rgba(255, 200, 200, 0.8), rgba(255, 150, 150, 0.6))',
          }}
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 rounded-full blur-3xl opacity-20"
          style={{
            background: 'linear-gradient(135deg, rgba(240, 255, 244, 0.8), rgba(230, 230, 250, 0.6))',
          }}
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -40, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      <motion.div
        style={{ opacity, scale, y }}
        className="relative z-10 w-full max-w-7xl mx-auto"
      >
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-7xl md:text-9xl font-bold mb-6 tracking-tight bg-gradient-to-r from-red-500 via-pink-500 to-purple-500 bg-clip-text text-transparent">
            SPILL.
          </h1>
          <p className="text-xl md:text-3xl text-gray-700 font-medium mb-4 max-w-3xl mx-auto">
            We spill the tea about your finances.
          </p>
          <p className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto">
            The app that connects your bank accounts and turns money management into something fun. 
            With an AI that helps you and notifications that make you laugh instead of stress.
          </p>
        </motion.div>

        {/* Two iPhones side by side */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
          {/* Roast iPhone - Left */}
          <motion.div
            initial={{ opacity: 0, x: -100, rotateY: -15 }}
            animate={{ opacity: 1, x: 0, rotateY: 0 }}
            transition={{ duration: 1, delay: 0.2, type: 'spring', stiffness: 100 }}
            className="flex flex-col items-center"
            style={{ perspective: '1000px' }}
          >
            <motion.div
              className="mb-4"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <span className="text-xl font-bold bg-gradient-to-r from-red-500 to-pink-500 bg-clip-text text-transparent">
                🔥 ROAST MODE
              </span>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05, rotateY: -5 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <IPhoneWithNotifications mode="roast" notifications={roastNotifications} />
            </motion.div>
          </motion.div>

          {/* Care iPhone - Right */}
          <motion.div
            initial={{ opacity: 0, x: 100, rotateY: 15 }}
            animate={{ opacity: 1, x: 0, rotateY: 0 }}
            transition={{ duration: 1, delay: 0.4, type: 'spring', stiffness: 100 }}
            className="flex flex-col items-center"
            style={{ perspective: '1000px' }}
          >
            <motion.div
              className="mb-4"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              <span className="text-xl font-bold bg-gradient-to-r from-green-500 to-emerald-500 bg-clip-text text-transparent">
                💚 CARE MODE
              </span>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05, rotateY: 5 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <IPhoneWithNotifications mode="care" notifications={careNotifications} />
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
