'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

interface Notification {
  id: number
  app: string
  title: string
  message: string
  emoji: string
  delay: number
}

interface IPhoneWithNotificationsProps {
  mode: 'roast' | 'care'
  notifications: Notification[]
}

export default function IPhoneWithNotifications({ mode, notifications }: IPhoneWithNotificationsProps) {
  const [visibleNotifications, setVisibleNotifications] = useState<number[]>([])

  useEffect(() => {
    notifications.forEach((notif) => {
      setTimeout(() => {
        setVisibleNotifications((prev) => [...prev, notif.id])
      }, notif.delay * 1000)
    })
  }, [notifications])

  const isDarkMode = false // iOS Liquid Glass works best on light backgrounds

  return (
    <motion.div
      className="relative"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
      style={{
        perspective: '1000px',
        transformStyle: 'preserve-3d',
      }}
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
        
        {/* Screen with Liquid Glass background */}
        <div
          className="w-full h-full rounded-[2.5rem] overflow-hidden relative"
          style={{
            background: isDarkMode 
              ? 'linear-gradient(135deg, #000000 0%, #1a1a1a 100%)'
              : 'linear-gradient(135deg, #f5f5f7 0%, #ffffff 100%)',
          }}
        >
          {/* Dynamic Island */}
          <div className="absolute top-2 left-1/2 -translate-x-1/2 w-32 h-6 bg-black rounded-full z-20" />
          
          {/* Status bar */}
          <div className="absolute top-8 left-0 right-0 px-6 z-10">
            <div className="flex justify-between items-center text-xs font-semibold" style={{ color: isDarkMode ? '#fff' : '#000' }}>
              <span>9:41</span>
              <div className="flex items-center gap-1">
                <div className="w-4 h-2 border border-current rounded-sm" />
                <div className="w-1 h-1 bg-current rounded-full" />
              </div>
            </div>
          </div>

          {/* Notifications Stack - iOS Liquid Glass Style */}
          <div className="absolute top-20 left-0 right-0 px-4 space-y-3 z-30">
            {notifications.map((notif) => (
              <motion.div
                key={notif.id}
                initial={{ opacity: 0, y: -20, scale: 0.95 }}
                animate={{
                  opacity: visibleNotifications.includes(notif.id) ? 1 : 0,
                  y: visibleNotifications.includes(notif.id) ? 0 : -20,
                  scale: visibleNotifications.includes(notif.id) ? 1 : 0.95,
                }}
                transition={{
                  type: 'spring',
                  stiffness: 300,
                  damping: 25,
                }}
                className="relative"
              >
                {/* Liquid Glass Notification - iOS Style */}
                <div
                  className="rounded-3xl p-4 relative overflow-hidden"
                  style={{
                    background: isDarkMode
                      ? 'rgba(255, 255, 255, 0.08)'
                      : 'rgba(255, 255, 255, 0.75)',
                    backdropFilter: 'blur(60px) saturate(200%)',
                    WebkitBackdropFilter: 'blur(60px) saturate(200%)',
                    border: `1px solid ${isDarkMode ? 'rgba(255, 255, 255, 0.12)' : 'rgba(0, 0, 0, 0.08)'}`,
                    boxShadow: `
                      0 8px 32px rgba(0, 0, 0, 0.12),
                      inset 0 1px 0 rgba(255, 255, 255, ${isDarkMode ? '0.15' : '0.9'}),
                      0 1px 3px rgba(0, 0, 0, 0.08),
                      inset 0 -1px 0 rgba(0, 0, 0, ${isDarkMode ? '0.1' : '0.05'})
                    `,
                  }}
                >
                  {/* Subtle gradient overlay for depth */}
                  <div
                    className="absolute inset-0 rounded-3xl pointer-events-none"
                    style={{
                      background: isDarkMode
                        ? 'linear-gradient(180deg, rgba(255, 255, 255, 0.1) 0%, transparent 50%)'
                        : 'linear-gradient(180deg, rgba(255, 255, 255, 0.5) 0%, transparent 50%)',
                    }}
                  />
                  <div className="flex items-start gap-3">
                    {/* App Icon */}
                    <div
                      className="w-10 h-10 rounded-2xl flex items-center justify-center text-xl flex-shrink-0"
                      style={{
                        background: mode === 'roast'
                          ? 'linear-gradient(135deg, #ff6b6b, #ee5a6f)'
                          : 'linear-gradient(135deg, #4ecdc4, #44a08d)',
                        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
                      }}
                    >
                      {notif.emoji}
                    </div>
                    
                    {/* Notification Content */}
                    <div className="flex-1 min-w-0 relative z-10">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-semibold text-sm" style={{ color: isDarkMode ? '#fff' : '#000' }}>
                          {notif.app}
                        </span>
                        {notif.title && (
                          <>
                            <span className="text-xs opacity-60" style={{ color: isDarkMode ? '#fff' : '#000' }}>•</span>
                            <span className="text-xs font-medium opacity-80" style={{ color: isDarkMode ? '#fff' : '#000' }}>
                              {notif.title}
                            </span>
                          </>
                        )}
                      </div>
                      <p className="text-sm leading-relaxed font-medium" style={{ color: isDarkMode ? 'rgba(255, 255, 255, 0.95)' : 'rgba(0, 0, 0, 0.85)' }}>
                        {notif.message}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Background app content (subtle) */}
          <div className="absolute bottom-0 left-0 right-0 p-6 opacity-20">
            <div className="text-center">
              <div className="text-2xl font-bold mb-2" style={{ color: isDarkMode ? '#fff' : '#000' }}>
                SPILL
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

