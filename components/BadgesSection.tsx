'use client'

import { motion } from 'framer-motion'

interface Badge {
  id: number
  title: string
  description: string
  icon: string
  iconPosition: 'left' | 'right'
  type: 'good' | 'bad'
}

const badges: Badge[] = [
  {
    id: 1,
    title: 'Badge de plus grosse clopeuse',
    description: "Parmi tes potes, t'es celle qui a le plus claqué de thunes en clope cette semaine.",
    icon: '🚬',
    iconPosition: 'left',
    type: 'bad',
  },
  {
    id: 2,
    title: 'Badge de plus gros rat',
    description: "Chloé attend ton virement depuis la semaine dernière, tu l'as bien mérité celui là.",
    icon: '🐭',
    iconPosition: 'right',
    type: 'bad',
  },
  {
    id: 3,
    title: 'Badge de budget master',
    description: "Tu as respecté ton budget cette semaine. Félicitations, c'est pas donné à tout le monde.",
    icon: '💰',
    iconPosition: 'left',
    type: 'good',
  },
  {
    id: 4,
    title: 'Badge de roi du meal prep',
    description: "Tu n'as commandé qu'une seule fois cette semaine. Tes économies te remercient.",
    icon: '🍱',
    iconPosition: 'right',
    type: 'good',
  },
]

export default function BadgesSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 py-20 bg-white">
      <div className="max-w-6xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900">
            Des badges pour tes accomplissements
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Bien ou mal, tes actions méritent d'être reconnues. Parfois avec humour, toujours avec bienveillance.
          </p>
        </motion.div>

        <div className="space-y-6">
          {badges.map((badge, index) => (
            <motion.div
              key={badge.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="bento-card p-6"
            >
              <div
                className={`flex items-center gap-6 ${
                  badge.iconPosition === 'right' ? 'flex-row-reverse' : ''
                }`}
              >
                {/* Icon */}
                <div
                  className={`w-20 h-20 rounded-full flex items-center justify-center text-4xl flex-shrink-0 ${
                    badge.type === 'good'
                      ? 'bg-gradient-to-br from-green-100 to-emerald-100'
                      : 'bg-gradient-to-br from-red-100 to-pink-100'
                  }`}
                >
                  {badge.icon}
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-2 text-gray-900">
                    {badge.title}
                  </h3>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    {badge.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12"
        >
          <p className="text-lg text-gray-600">
            Gagne des badges en accomplissant des objectifs ou en faisant des erreurs. 
            <br />
            C'est comme ça qu'on apprend, avec le sourire.
          </p>
        </motion.div>
      </div>
    </section>
  )
}


