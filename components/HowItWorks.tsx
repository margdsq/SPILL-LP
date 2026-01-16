'use client'

import { motion } from 'framer-motion'
import IPhoneWithNotifications from './IPhoneWithNotifications'

const careNotifications = [
  {
    id: 1,
    app: 'SPILL',
    title: '',
    message: "Compte connecté ! On commence ?",
    emoji: '',
    delay: 0.5,
  },
  {
    id: 2,
    app: 'SPILL',
    title: '',
    message: "Je vois que tu dépenses beaucoup en cafés. On en parle ?",
    emoji: '',
    delay: 1.5,
  },
]

const steps = [
  {
    number: '01',
    title: 'Connecte tes comptes',
    description: 'En quelques clics, connecte tes comptes bancaires. C\'est sécurisé et ça prend moins de 2 minutes.',
    emoji: '',
  },
  {
    number: '02',
    title: 'Parle avec ton conseiller IA',
    description: 'Pose tes questions, demande des conseils, crée un budget. Ton conseiller IA comprend ta situation et te répond sans jargon.',
    emoji: '',
  },
  {
    number: '03',
    title: 'Reçois des notifications fun',
    description: 'Des notifications qui te font rire au lieu de stresser. Finies les alertes anxiogènes.',
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
            Comment ça marche ?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Trois étapes simples pour transformer ta relation avec l'argent
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

