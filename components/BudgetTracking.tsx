'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'

export default function BudgetTracking() {
  const containerRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  })

  const phoneY = useTransform(scrollYProgress, [0, 1], [0, -50])
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    // Animate progress bar
    const timer = setTimeout(() => {
      setProgress(45) // 135€ / 300€ = 45%
    }, 1000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center px-6 py-20 bg-gray-50"
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Copy */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
              Set your goals,
              <br />
              <span className="bg-gradient-to-r from-red-500 via-pink-500 to-purple-500 bg-clip-text text-transparent">
                we'll handle the rest
              </span>
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Simply tell your AI what you want to save. 
              A widget automatically appears to track your progress in real time.
            </p>
            <div className="space-y-4 pt-4">
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 rounded-full bg-red-500 mt-2 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-gray-900">Talk to your AI</p>
                  <p className="text-gray-600">"I'd like to save $300 for a trip"</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 rounded-full bg-pink-500 mt-2 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-gray-900">Automatic widget</p>
                  <p className="text-gray-600">A tracker appears in your app to follow your savings</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 rounded-full bg-purple-500 mt-2 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-gray-900">Real-time tracking</p>
                  <p className="text-gray-600">Watch your progress evolve as you save</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: iPhone with Widget */}
          <motion.div
            style={{ y: phoneY }}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex justify-center lg:justify-end"
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

                {/* Chat conversation */}
                <div className="absolute top-16 left-0 right-0 px-4 space-y-3 z-30">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="flex justify-end"
                  >
                    <div className="max-w-[75%] rounded-3xl px-4 py-3 bg-gradient-to-br from-indigo-500 to-purple-500 text-white text-sm">
                      I'd like to save $300 for a trip
                    </div>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1 }}
                    className="flex justify-start"
                  >
                    <div className="max-w-[75%] rounded-3xl px-4 py-3 bg-white/90 backdrop-blur-xl text-gray-900 text-sm border border-gray-200/50">
                      Perfect! I've created a widget to track your goal. You've already saved $135!
                    </div>
                  </motion.div>
                </div>

                {/* Budget Widget */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ delay: 1.5, type: 'spring', stiffness: 200 }}
                  className="absolute bottom-32 left-4 right-4 z-30"
                >
                  <div
                    className="rounded-3xl p-5 backdrop-blur-xl"
                    style={{
                      background: 'rgba(255, 255, 255, 0.75)',
                      backdropFilter: 'blur(60px) saturate(200%)',
                      WebkitBackdropFilter: 'blur(60px) saturate(200%)',
                      border: '1px solid rgba(0, 0, 0, 0.08)',
                      boxShadow: `
                        0 8px 32px rgba(0, 0, 0, 0.12),
                        inset 0 1px 0 rgba(255, 255, 255, 0.9),
                        0 1px 3px rgba(0, 0, 0, 0.08)
                      `,
                    }}
                  >
                    <div className="mb-3">
                      <h3 className="font-bold text-gray-900 text-lg mb-1">Trip</h3>
                      <p className="text-sm text-gray-600">Savings goal</p>
                    </div>
                    <div className="mb-4">
                      <div className="flex justify-between items-baseline mb-2">
                        <span className="text-3xl font-bold text-gray-900">$135</span>
                        <span className="text-sm text-gray-500">/ $300</span>
                      </div>
                      {/* Progress bar */}
                      <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
                        <motion.div
                          className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"
                          initial={{ width: 0 }}
                          animate={{ width: `${progress}%` }}
                          transition={{ duration: 1, delay: 1.5 }}
                        />
                      </div>
                    </div>
                    <p className="text-xs text-gray-500">
                      Only $165 left to reach your goal
                    </p>
                  </div>
                </motion.div>

                {/* App background */}
                <div className="absolute bottom-0 left-0 right-0 p-6 opacity-20">
                  <div className="text-center">
                    <div className="text-2xl font-bold mb-2 text-gray-900">SPILL</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}


