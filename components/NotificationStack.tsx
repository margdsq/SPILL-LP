'use client'

import { motion } from 'framer-motion'

const notifications = [
  {
    type: 'roast',
    from: 'App',
    title: 'Tobacco Shop 🚬',
    message: "$13 on cigarettes? Your savings account is crying.",
    color: 'from-red-400 to-pink-400',
  },
  {
    type: 'social-roast',
    from: 'Lucas ☕️',
    title: 'Social Roast',
    message: "Another Starbucks? That's why you don't have a house, bro.",
    color: 'from-orange-400 to-red-400',
  },
  {
    type: 'care',
    from: 'App',
    title: 'Uber 🚗',
    message: "It was raining too much, you did the right thing taking an Uber. We're in this together.",
    color: 'from-green-400 to-emerald-400',
  },
]

export default function NotificationStack() {
  return (
    <div className="w-full">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            Notification Stack
          </h2>
        </motion.div>

        <div className="space-y-4">
          {notifications.map((notif, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30, scale: 0.95 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative"
            >
              <div
                className="bento-card p-5 liquid-glass"
                style={{
                  backdropFilter: 'blur(20px)',
                  WebkitBackdropFilter: 'blur(20px)',
                  background: 'rgba(255, 255, 255, 0.7)',
                }}
              >
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${notif.color} flex items-center justify-center text-white font-bold text-xl flex-shrink-0`}>
                    {notif.from[0]}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-bold text-gray-900">{notif.from}</span>
                      <span className="text-xs text-gray-500">•</span>
                      <span className="text-sm text-gray-500">now</span>
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-1">{notif.title}</h4>
                    <p className="text-gray-700 leading-relaxed">{notif.message}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

