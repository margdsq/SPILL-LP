'use client'

import { motion } from 'framer-motion'

export default function ValueProposition() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 py-20 bg-white overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 right-10 w-96 h-96 rounded-full blur-3xl opacity-10"
          style={{
            background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.4), rgba(139, 92, 246, 0.3))',
          }}
          animate={{
            scale: [1, 1.2, 1],
            x: [0, -50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      <div className="relative z-10 w-full max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-red-500 via-pink-500 to-purple-500 bg-clip-text text-transparent">
              Lighten up your finances
            </span>
            <br />
            <span className="text-gray-900">has never been so simple</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Can't bring yourself to open your bank account? No problem. 
            SPILL connects your accounts and turns money management into something fun.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-center"
          >
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-400 to-indigo-500 flex items-center justify-center text-4xl mb-4 mx-auto">
              🔗
            </div>
            <h3 className="text-2xl font-bold mb-3">Connect your accounts</h3>
            <p className="text-gray-600">
              In just a few clicks, connect your bank accounts. It's secure and fast.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center"
          >
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-purple-400 to-pink-500 flex items-center justify-center text-4xl mb-4 mx-auto">
              🤖
            </div>
            <h3 className="text-2xl font-bold mb-3">An AI that helps you</h3>
            <p className="text-gray-600">
              Your personalized financial assistant guides you, budgets and answers your questions.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center"
          >
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-red-400 to-orange-500 flex items-center justify-center text-4xl mb-4 mx-auto">
              😂
            </div>
            <h3 className="text-2xl font-bold mb-3">Funny notifications</h3>
            <p className="text-gray-600">
              Notifications that make you laugh instead of stress. No more anxiety-inducing alerts.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bento-card p-8 max-w-4xl mx-auto"
        >
          <div className="text-center">
            <h3 className="text-3xl font-bold mb-4">Why SPILL?</h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Money management isn't fun. We know. But it can be less stressful. 
              SPILL turns your expenses into conversations, your budgets into challenges, and your mistakes into funny moments. 
              Because stressing about your finances isn't mandatory.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <span className="px-4 py-2 rounded-full bg-red-100 text-red-700 font-medium">No banking jargon</span>
              <span className="px-4 py-2 rounded-full bg-purple-100 text-purple-700 font-medium">100% lightened up</span>
              <span className="px-4 py-2 rounded-full bg-pink-100 text-pink-700 font-medium">Fun and useful</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

