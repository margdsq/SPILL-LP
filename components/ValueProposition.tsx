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
              Dédramatiser tes finances
            </span>
            <br />
            <span className="text-gray-900">n'a jamais été aussi simple</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Tu n'arrives pas à ouvrir ton compte en banque ? Pas de problème. 
            SPILL connecte tes comptes et transforme la gestion d'argent en quelque chose de fun.
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
            <h3 className="text-2xl font-bold mb-3">Connecte tes comptes</h3>
            <p className="text-gray-600">
              En quelques clics, connecte tes comptes bancaires. C'est sécurisé et rapide.
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
            <h3 className="text-2xl font-bold mb-3">Une IA qui t'aide</h3>
            <p className="text-gray-600">
              Ton assistant financier personnalisé te guide, budgetise et répond à tes questions.
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
            <h3 className="text-2xl font-bold mb-3">Notifications drôles</h3>
            <p className="text-gray-600">
              Des notifications qui te font rire au lieu de stresser. Finies les alertes anxiogènes.
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
            <h3 className="text-3xl font-bold mb-4">Pourquoi SPILL ?</h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              La gestion d'argent, c'est pas marrant. On le sait. Mais ça peut être moins stressant. 
              SPILL transforme tes dépenses en conversations, tes budgets en défis, et tes erreurs en moments drôles. 
              Parce que se prendre la tête sur ses finances, c'est pas obligatoire.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <span className="px-4 py-2 rounded-full bg-red-100 text-red-700 font-medium">Pas de jargon bancaire</span>
              <span className="px-4 py-2 rounded-full bg-purple-100 text-purple-700 font-medium">100% dédramatisé</span>
              <span className="px-4 py-2 rounded-full bg-pink-100 text-pink-700 font-medium">Drôle et utile</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

