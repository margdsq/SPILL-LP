'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

export default function CustomTeaAlerts() {
  const [message, setMessage] = useState('')
  const [friend, setFriend] = useState('')
  const [mood] = useState<'care' | 'roast'>('roast')

  const handleSend = () => {
    if (message && friend) {
      // In a real app, this would send the notification
      alert(`Sent to ${friend}: "${message}"`)
      setMessage('')
      setFriend('')
    }
  }

  return (
    <div className="bento-card p-6">
      <h3 className="text-2xl font-bold mb-6">Custom Tea Alerts</h3>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Friend's Name
          </label>
          <input
            type="text"
            value={friend}
            onChange={(e) => setFriend(e.target.value)}
            placeholder="Enter friend's name"
            className="w-full px-4 py-3 rounded-xl liquid-glass border border-white/20 focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Your Message
          </label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Dude, McDonald's again? Your banker is going to have a heart attack."
            rows={3}
            className="w-full px-4 py-3 rounded-xl liquid-glass border border-white/20 focus:outline-none focus:ring-2 focus:ring-purple-400 resize-none"
          />
        </div>
        <motion.button
          onClick={handleSend}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className={`w-full py-3 rounded-xl font-medium text-white ${
            mood === 'care'
              ? 'bg-gradient-to-r from-purple-500 to-indigo-500'
              : 'bg-gradient-to-r from-red-500 to-pink-500'
          } shadow-lg`}
        >
          Send Tea Alert ☕️
        </motion.button>
      </div>
    </div>
  )
}

