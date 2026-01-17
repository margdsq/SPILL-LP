'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'

interface Message {
  id: number
  text: string
  sender: 'ai' | 'user'
  delay: number
}

const chatMessages: Message[] = [
  {
    id: 1,
    text: "Hey! I'm your SPILL financial advisor. How can I help you today?",
    sender: 'ai',
    delay: 0.5,
  },
  {
    id: 2,
    text: "I'm struggling with my budget, I feel like I'm spending everything",
    sender: 'user',
    delay: 1.5,
  },
  {
    id: 3,
    text: "No stress! I see you're spending a lot on delivery. Want to create a budget for that?",
    sender: 'ai',
    delay: 2.5,
  },
  {
    id: 4,
    text: "Yes, good idea!",
    sender: 'user',
    delay: 3.5,
  },
  {
    id: 5,
    text: "Perfect! I've created a $100/month budget for delivery. You're already at $85 this month. What should we do?",
    sender: 'ai',
    delay: 4.5,
  },
]

export default function AIChatSection() {
  const containerRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  })

  const phoneY = useTransform(scrollYProgress, [0, 1], [0, -50])
  const [visibleMessages, setVisibleMessages] = useState<number[]>([])

  useEffect(() => {
    chatMessages.forEach((msg) => {
      setTimeout(() => {
        setVisibleMessages((prev) => [...prev, msg.id])
      }, msg.delay * 1000)
    })
  }, [])

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center px-6 py-20 bg-white"
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: iPhone with Chat */}
          <motion.div
            style={{ y: phoneY }}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex justify-center lg:justify-start order-1 lg:order-1"
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
                      <div className="font-bold text-sm text-gray-900">SPILL Advisor</div>
                      <div className="text-xs text-gray-500">Online • Responds instantly</div>
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

          {/* Right: Copy */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6 order-2 lg:order-2"
          >
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
              Chat with your
              <br />
              <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                AI advisor
              </span>
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              No robotic chatbot. Your AI advisor understands your situation, 
              answers your questions and helps you make the right financial decisions.
            </p>
            <div className="space-y-4 pt-4">
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 rounded-full bg-indigo-500 mt-2 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-gray-900">Ask your questions</p>
                  <p className="text-gray-600">"Why am I spending so much?", "How can I save?"</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 rounded-full bg-purple-500 mt-2 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-gray-900">Get advice</p>
                  <p className="text-gray-600">Your AI analyzes your spending and suggests solutions</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 rounded-full bg-pink-500 mt-2 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-gray-900">Create your goals</p>
                  <p className="text-gray-600">"I want to save $300" and your AI creates the tracker</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

