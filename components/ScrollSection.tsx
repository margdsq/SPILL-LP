'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, ReactNode } from 'react'

interface ScrollSectionProps {
  children: ReactNode
  className?: string
}

export default function ScrollSection({ children, className = '' }: ScrollSectionProps) {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: false, margin: '-100px' })

  return (
    <section
      ref={ref}
      className={`min-h-screen flex items-center justify-center px-6 py-20 bg-white ${className}`}
    >
      <motion.div
        initial={{ opacity: 0, y: 50, scale: 0.95 }}
        animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.95 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="w-full"
      >
        {children}
      </motion.div>
    </section>
  )
}

