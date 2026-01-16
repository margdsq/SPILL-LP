'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import IPhoneWithNotifications from './IPhoneWithNotifications'

const roastNotifications = [
  {
    id: 1,
    app: 'Uber Eats',
    title: '',
    message: "La flemme a un prix : c'est 28 balles pour un burger froid. Bravo l'artiste.",
    emoji: '',
    delay: 0.5,
  },
  {
    id: 2,
    app: 'Hola',
    title: '',
    message: "90% du plafond. Il va falloir apprendre à vivre d'amour et d'eau fraîche (surtout d'eau fraîche).",
    emoji: '',
    delay: 1.5,
  },
  {
    id: 3,
    app: 'SPILL',
    title: '',
    message: "Alerte rouge. Ton banquier vient de s'acheter une nouvelle Tesla grâce à tes agios. Merci pour lui.",
    emoji: '',
    delay: 2.5,
  },
  {
    id: 4,
    app: 'SPILL',
    title: '',
    message: "Encore au resto ? On rappelle que tu as des pâtes et du pesto qui t'attendent tristement dans ton placard.",
    emoji: '',
    delay: 3.5,
  },
]

const careNotifications = [
  {
    id: 1,
    app: 'Uber',
    title: '',
    message: "Il pleuvait trop, tu as bien fait de prendre un Uber. On est ensemble.",
    emoji: '',
    delay: 0.5,
  },
  {
    id: 2,
    app: 'SPILL',
    title: '',
    message: "Tu as économisé 50€ cette semaine ! Continue comme ça",
    emoji: '',
    delay: 1.5,
  },
  {
    id: 3,
    app: 'SPILL',
    title: '',
    message: "Ton budget est sous contrôle. Félicitations !",
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
            Des notifications qui dédramatisent
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choisis ton style : bienveillant ou roast. C'est toi qui décides.
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
                Mode Roast
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
                Mode Care
              </span>
            </div>
            <IPhoneWithNotifications mode="care" notifications={careNotifications} />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

