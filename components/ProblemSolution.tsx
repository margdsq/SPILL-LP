'use client'

import { motion } from 'framer-motion'

export default function ProblemSolution() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900">
            Tu galères avec tes finances ?
            <br />
            <span className="text-gray-600">On a la solution.</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Problem */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Le problème</h3>
            <ul className="space-y-4 text-gray-600 text-lg">
              <li className="flex items-start gap-3">
                <span className="text-red-500 mt-1">✗</span>
                <span>Les apps bancaires sont compliquées et stressantes</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-500 mt-1">✗</span>
                <span>Tu ne comprends pas le jargon financier</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-500 mt-1">✗</span>
                <span>Les notifications te font paniquer</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-500 mt-1">✗</span>
                <span>Gérer son budget, c'est pas marrant</span>
              </li>
            </ul>
          </motion.div>

          {/* Solution */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">La solution SPILL</h3>
            <ul className="space-y-4 text-gray-600 text-lg">
              <li className="flex items-start gap-3">
                <span className="text-green-500 mt-1">✓</span>
                <span>Connecte tes comptes en 2 clics, c'est sécurisé</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-500 mt-1">✓</span>
                <span>Une IA qui parle comme toi, sans jargon</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-500 mt-1">✓</span>
                <span>Des notifications drôles qui dédramatisent</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-500 mt-1">✓</span>
                <span>Gérer son budget devient fun</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

