'use client'

import { motion } from 'framer-motion'
import IPhoneWithNotifications from './IPhoneWithNotifications'

const careNotifications = [
  {
    id: 1,
    app: 'SPILL',
    title: '',
    message: "Account connected! Ready to start?",
    emoji: '',
    delay: 0.5,
  },
  {
    id: 2,
    app: 'SPILL',
    title: '',
    message: "I see you're spending a lot on coffee. Want to talk about it?",
    emoji: '',
    delay: 1.5,
  },
]

const steps = [
  {
    number: '01',
    title: 'Connect your accounts',
    description: 'In just a few clicks, connect your bank accounts. It\'s secure and takes less than 2 minutes.',
    emoji: '',
  },
  {
    number: '02',
    title: 'Chat with your AI advisor',
    description: 'Ask questions, get advice, create a budget. Your AI advisor understands your situation and responds without jargon.',
    emoji: '',
  },
  {
    number: '03',
    title: 'Receive fun notifications',
    description: 'Notifications that make you laugh instead of stress. No more anxiety-inducing alerts.',
    emoji: '',
  },
]

export default function HowItWorks() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 py-20 bg-white">
      <div className="max-w-7xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900">
            How it works
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Three simple steps to transform your relationship with money
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Steps */}
          <div className="space-y-12">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="flex gap-6"
              >
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-red-400 to-pink-500 flex items-center justify-center text-2xl font-bold text-white">
                    {step.number}
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-2 text-gray-900">{step.title}</h3>
                  <p className="text-lg text-gray-600 leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* iPhone Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex justify-center lg:justify-end"
          >
            <IPhoneWithNotifications mode="care" notifications={careNotifications} />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

