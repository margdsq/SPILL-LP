'use client'

import { motion } from 'framer-motion'

const feedItems = [
  { name: 'Lucas', action: 'just spent €5.50 at Starbucks ☕️', time: '2m ago' },
  { name: 'Emma', action: 'saved €50 this week! 🎉', time: '15m ago' },
  { name: 'Tom', action: 'got a new badge: "Budget Master" 💰', time: '1h ago' },
  { name: 'Sophie', action: 'is on a 7-day no-spend streak 🔥', time: '2h ago' },
]

export default function FriendFeed() {
  return (
    <div className="bento-card p-6 h-full">
      <h3 className="text-2xl font-bold mb-6">Friend Feed</h3>
      <div className="space-y-4">
        {feedItems.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="flex items-start gap-3 p-3 rounded-xl hover:bg-white/50 transition-colors"
          >
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center text-white font-bold">
              {item.name[0]}
            </div>
            <div className="flex-1">
              <p className="font-medium text-gray-900">
                <span className="font-bold">{item.name}</span> {item.action}
              </p>
              <p className="text-sm text-gray-500 mt-1">{item.time}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}


