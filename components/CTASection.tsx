'use client'

import { motion } from 'framer-motion'

export default function CTASection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 py-20 bg-gradient-to-br from-red-50 via-pink-50 to-purple-50">
      <div className="max-w-4xl mx-auto w-full text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <h2 className="text-4xl md:text-7xl font-bold text-gray-900 leading-tight">
            Prêt à dédramatiser
            <br />
            <span className="bg-gradient-to-r from-red-500 via-pink-500 to-purple-500 bg-clip-text text-transparent">
              tes finances ?
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto">
            Rejoins SPILL et transforme ta relation avec l'argent. 
            Sans stress, sans jargon, juste de la bonne humeur.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-5 bg-gradient-to-r from-red-500 to-pink-500 text-white rounded-full font-semibold text-xl shadow-xl hover:shadow-2xl transition-shadow"
            >
              Créer mon compte gratuitement
            </motion.button>
          </div>
          <div className="pt-8 space-y-4">
            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <span className="text-green-500">✓</span>
                <span>Gratuit</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-500">✓</span>
                <span>Sécurisé</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-500">✓</span>
                <span>Moins de 2 minutes</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-500">✓</span>
                <span>Sans engagement</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}


