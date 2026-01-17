'use client'

import { motion } from 'framer-motion'

interface Badge {
  id: number
  title: string
  description: string
  icon: string
  iconPosition: 'left' | 'right'
  type: 'good' | 'bad'
}

const badges: Badge[] = [
  {
    id: 1,
    title: 'Biggest Smoker Badge',
    description: "Among your friends, you're the one who spent the most money on cigarettes this week.",
    icon: '🚬',
    iconPosition: 'left',
    type: 'bad',
  },
  {
    id: 2,
    title: 'Biggest Cheapskate Badge',
    description: "Chloe has been waiting for your transfer since last week, you've earned this one.",
    icon: '🐭',
    iconPosition: 'right',
    type: 'bad',
  },
  {
    id: 3,
    title: 'Budget Master Badge',
    description: "You stuck to your budget this week. Congratulations, that's not given to everyone.",
    icon: '💰',
    iconPosition: 'left',
    type: 'good',
  },
  {
    id: 4,
    title: 'Meal Prep King Badge',
    description: "You only ordered delivery once this week. Your savings thank you.",
    icon: '🍱',
    iconPosition: 'right',
    type: 'good',
  },
]

export default function BadgesSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 py-20 bg-white">
      <div className="max-w-6xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900">
            Badges for your achievements
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Good or bad, your actions deserve recognition. Sometimes with humor, always with kindness.
          </p>
        </motion.div>

        <div className="space-y-6">
          {badges.map((badge, index) => (
            <motion.div
              key={badge.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="bento-card p-6"
            >
              <div
                className={`flex items-center gap-6 ${
                  badge.iconPosition === 'right' ? 'flex-row-reverse' : ''
                }`}
              >
                {/* Icon */}
                <div
                  className={`w-20 h-20 rounded-full flex items-center justify-center text-4xl flex-shrink-0 ${
                    badge.type === 'good'
                      ? 'bg-gradient-to-br from-green-100 to-emerald-100'
                      : 'bg-gradient-to-br from-red-100 to-pink-100'
                  }`}
                >
                  {badge.icon}
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-2 text-gray-900">
                    {badge.title}
                  </h3>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    {badge.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12"
        >
          <p className="text-lg text-gray-600">
            Earn badges by achieving goals or making mistakes. 
            <br />
            That's how we learn, with a smile.
          </p>
        </motion.div>
      </div>
    </section>
  )
}


