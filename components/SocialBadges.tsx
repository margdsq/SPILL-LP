'use client'

import { motion } from 'framer-motion'

const badges = [
  { name: 'Léo', badge: 'Princesse Uber 💅', color: 'from-pink-400 to-purple-400' },
  { name: 'Marie', badge: 'Coffee Addict ☕️', color: 'from-amber-400 to-orange-400' },
  { name: 'Alex', badge: 'Savings Master 💰', color: 'from-green-400 to-emerald-400' },
  { name: 'Lucas', badge: 'Budget Hero 🦸', color: 'from-blue-400 to-indigo-400' },
]

export default function SocialBadges() {
  return (
    <div className="bento-card p-6 h-full">
      <h3 className="text-2xl font-bold mb-6">Social Badges</h3>
      <div className="space-y-4">
        {badges.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            className="p-4 rounded-xl bg-gradient-to-r bg-white/50 backdrop-blur-sm"
          >
            <div className="flex items-center gap-3">
              <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${item.color} flex items-center justify-center text-white font-bold text-lg`}>
                {item.name[0]}
              </div>
              <div>
                <p className="font-bold text-gray-900">{item.name}</p>
                <p className="text-sm text-gray-600">{item.badge}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}


