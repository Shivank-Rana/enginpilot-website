'use client'

import { motion } from 'framer-motion'

export default function PlatformSection() {
  const modules = [
    {
      title: 'Real-time Ingestion',
      description: 'Ingest data from any industrial source. Process 1M+ events per second with sub-100ms latency.',
      color: '#2F80FF',
    },
    {
      title: 'Physics Engine',
      description: 'Physics-governed simulation. AI that understands the laws governing your assets.',
      color: '#00E5FF',
    },
    {
      title: 'Predictive Analytics',
      description: 'Failure prediction, performance forecasting, and anomaly detection driven by physics.',
      color: '#FFB020',
    },
    {
      title: 'Decision Engine',
      description: 'Actionable recommendations. From diagnosis to decision infrastructure.',
      color: '#22C55E',
    },
  ]

  return (
    <section className="py-32 px-4 bg-system-surface">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="module-header mb-3">Platform Modules</h2>
          <p className="body-text max-w-2xl">
            Enterprise-ready modules for every stage of industrial intelligence. APIs, SDKs, and integration 
            points designed for production systems handling mission-critical operations.
          </p>
        </motion.div>

        {/* Module grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12"
        >
          {modules.map((module, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -3 }}
              className="panel-depth-2 border-l-4"
              style={{ borderColor: module.color }}
            >
              <h3 className="text-lg font-bold text-white mb-3" style={{ color: module.color }}>
                {module.title}
              </h3>
              <p className="body-text text-sm">{module.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="panel-depth-3 border-l-4 border-electric-blue text-center py-12"
        >
          <h3 className="text-h2 font-bold text-white mb-3">
            Ready to Transform Your Operations?
          </h3>
          <p className="body-text mb-8 max-w-2xl mx-auto">
            Join industrial leaders building next-generation systems with ENGINPILOT.
            Start free or request a technical demo with our engineering team.
          </p>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            viewport={{ once: true }}
            className="flex gap-4 justify-center flex-wrap"
          >
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="px-6 py-2 bg-electric-blue text-white text-sm font-semibold rounded-lg hover:opacity-90 transition-opacity duration-200 border border-electric-blue"
            >
              Start Free Trial
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="px-6 py-2 border border-neon-cyan text-neon-cyan text-sm font-semibold rounded-lg hover:bg-neon-cyan hover:bg-opacity-10 transition-all duration-200"
            >
              Request Demo
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="px-6 py-2 border border-gray-500 text-gray-300 text-sm font-semibold rounded-lg hover:border-gray-300 transition-colors duration-200"
            >
              API Docs
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
