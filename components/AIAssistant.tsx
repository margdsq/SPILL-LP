'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

interface Message {
  id: number
  text: string
  sender: 'ai' | 'user'
  delay: number
}

const chatMessages: Message[] = [
  {
    id: 1,
    text: "Hey! I'm your SPILL financial assistant 💰",
    sender: 'ai',
    delay: 0.5,
  },
  {
    id: 2,
    text: "You can give me a personality: do you want me to be caring or roast you? 😏",
    sender: 'ai',
    delay: 1.5,
  },
  {
    id: 3,
    text: "I want you to be caring but direct",
    sender: 'user',
    delay: 2.5,
  },
  {
    id: 4,
    text: "Perfect! I'll help you manage your budget with care but without lying to you 💚",
    sender: 'ai',
    delay: 3.5,
  },
  {
    id: 5,
    text: "You spent $45 on coffee this week. Can we reduce that?",
    sender: 'ai',
    delay: 4.5,
  },
]

export default function AIAssistant() {
  const [visibleMessages, setVisibleMessages] = useState<number[]>([])

  useEffect(() => {
    chatMessages.forEach((msg) => {
      setTimeout(() => {
        setVisibleMessages((prev) => [...prev, msg.id])
      }, msg.delay * 1000)
    })
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 py-20 bg-white overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-96 h-96 rounded-full blur-3xl opacity-15"
          style={{
            background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.4), rgba(139, 92, 246, 0.3))',
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
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            Your AI Financial Assistant
          </h2>
          <p className="text-xl text-gray-600 mb-2">
            An intelligent chat that helps you budget and manage your finances
          </p>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Connect your accounts, ask questions, and let the AI guide you. 
            You can even give it a personality: caring or roast, it's your choice.
          </p>
        </motion.div>

        {/* iPhone with Chat */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          <div
            className="relative w-[320px] h-[640px] rounded-[3rem] p-2"
            style={{
              background: 'linear-gradient(135deg, #1e1e1e 0%, #2d2d2d 100%)',
              boxShadow: `
                0 20px 60px rgba(0, 0, 0, 0.3),
                inset 0 0 0 2px rgba(255, 255, 255, 0.1),
                inset 0 2px 0 rgba(255, 255, 255, 0.2)
              `,
            }}
          >
            {/* Notch */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-black rounded-b-2xl z-10" />
            
            {/* Screen */}
            <div
              className="w-full h-full rounded-[2.5rem] overflow-hidden relative"
              style={{
                background: 'linear-gradient(135deg, #f5f5f7 0%, #ffffff 100%)',
              }}
            >
              {/* Dynamic Island */}
              <div className="absolute top-2 left-1/2 -translate-x-1/2 w-32 h-6 bg-black rounded-full z-20" />
              
              {/* Status bar */}
              <div className="absolute top-8 left-0 right-0 px-6 z-10">
                <div className="flex justify-between items-center text-xs font-semibold text-black">
                  <span>9:41</span>
                  <div className="flex items-center gap-1">
                    <div className="w-4 h-2 border border-black rounded-sm" />
                    <div className="w-1 h-1 bg-black rounded-full" />
                  </div>
                </div>
              </div>

              {/* App Header */}
              <div className="absolute top-16 left-0 right-0 px-6 py-4 z-10 bg-white/80 backdrop-blur-xl border-b border-gray-200/50">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center text-white font-bold text-lg">
                    AI
                  </div>
                  <div>
                    <div className="font-bold text-sm text-gray-900">SPILL Assistant</div>
                    <div className="text-xs text-gray-500">Online</div>
                  </div>
                </div>
              </div>

              {/* Chat Messages */}
              <div className="absolute top-32 left-0 right-0 bottom-20 px-4 overflow-y-auto">
                <div className="space-y-4 py-4">
                  {chatMessages.map((msg) => (
                    <motion.div
                      key={msg.id}
                      initial={{ opacity: 0, y: 20, scale: 0.95 }}
                      animate={{
                        opacity: visibleMessages.includes(msg.id) ? 1 : 0,
                        y: visibleMessages.includes(msg.id) ? 0 : 20,
                        scale: visibleMessages.includes(msg.id) ? 1 : 0.95,
                      }}
                      transition={{
                        type: 'spring',
                        stiffness: 300,
                        damping: 25,
                      }}
                      className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div
                        className={`max-w-[75%] rounded-3xl px-4 py-3 ${
                          msg.sender === 'user'
                            ? 'bg-gradient-to-br from-indigo-500 to-purple-500 text-white'
                            : 'bg-white/90 backdrop-blur-xl text-gray-900 border border-gray-200/50'
                        }`}
                        style={{
                          boxShadow: msg.sender === 'user'
                            ? '0 4px 12px rgba(99, 102, 241, 0.3)'
                            : '0 2px 8px rgba(0, 0, 0, 0.08)',
                        }}
                      >
                        <p className="text-sm leading-relaxed font-medium">{msg.text}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Input Area */}
              <div className="absolute bottom-0 left-0 right-0 px-4 py-4 bg-white/90 backdrop-blur-xl border-t border-gray-200/50">
                <div className="flex items-center gap-2">
                  <div className="flex-1 rounded-full bg-gray-100 px-4 py-2 text-sm text-gray-500">
                    Type a message...
                  </div>
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center">
                    <span className="text-white text-sm">→</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

