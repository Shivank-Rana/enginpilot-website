'use client'

import { motion } from 'framer-motion'

export default function TrustLayer() {
  const capabilities = [
    {
      title: 'Physics Domains Covered',
      items: [
        'Thermodynamics & Heat Transfer',
        'Fluid Dynamics',
        'Mechanical Systems & Vibration',
        'Electrical Networks',
        'Control Systems',
        'Material Science',
        'Structural Analysis',
        'Thermal Analysis',
        'Hydraulic Systems',
        'Pneumatic Systems',
      ],
    },
    {
      title: 'Integration Surface',
      items: [
        'MQTT & Industrial IoT',
        'OPC-UA Servers',
        'REST & GraphQL APIs',
        'Time-series Databases',
        'Cloud Platforms (AWS/Azure/GCP)',
        'Legacy Industrial Systems',
        'Real-time Streaming',
        'Custom Protocol Adapters',
        'Edge Computing',
        'Data Lake Integration',
      ],
    },
    {
      title: 'System Scale Capability',
      items: [
        'Single Device Monitoring',
        'Multi-Site Operations',
        'Global Fleet Management',
        'Distributed Sensor Networks',
        'High-Frequency Data (>1000Hz)',
        '100K+ Data Points',
        'Real-time Processing (<100ms)',
        'Historical Analytics (Years)',
        'Predictive Modeling',
        'Continuous Optimization',
      ],
    },
  ]

  return (
    <section className="py-32 px-4 bg-deep-space">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="module-header mb-3">System Scale Capability</h2>
          <p className="body-text max-w-2xl">
            Enterprise-grade infrastructure built for scale, reliability, and seamless integration
            across any industrial ecosystem. No limits on physics domains, integration points, or operational scale.
          </p>
        </motion.div>

        {/* Capability matrix */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {capabilities.map((capability, capIdx) => (
            <motion.div
              key={capability.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: capIdx * 0.1 }}
              viewport={{ once: true }}
              className="panel-depth-2 border-l-4 border-electric-blue"
            >
              <h3 className="text-lg font-bold text-electric-blue mb-6 uppercase tracking-wide">
                {capability.title}
              </h3>
              <ul className="space-y-3">
                {capability.items.map((item, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: capIdx * 0.05 + idx * 0.03 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-3"
                  >
                    {/* Signal indicator - color represents capability state */}
                    <motion.div
                      animate={{
                        scale: [1, 1.1, 1],
                        opacity: [0.6, 1, 0.6],
                      }}
                      transition={{
                        duration: 2.5,
                        delay: idx * 0.1,
                        repeat: Infinity,
                      }}
                      className="w-1.5 h-1.5 rounded-full bg-neon-cyan flex-shrink-0 mt-1.5"
                    />
                    <span className="body-text text-sm">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Trust metrics - system performance SLAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-20 grid grid-cols-1 md:grid-cols-4 gap-4"
        >
          {[
            { label: 'Uptime SLA', value: '99.99%', color: '#22C55E' },
            { label: 'Prediction Accuracy', value: '98.5%', color: '#2F80FF' },
            { label: 'Latency', value: '<100ms', color: '#00E5FF' },
            { label: 'Data Throughput', value: '1M+ events/s', color: '#FFB020' },
          ].map((metric, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -3 }}
              transition={{ duration: 0.2 }}
              className="panel-depth-2 text-center border-l-4"
              style={{ borderColor: metric.color }}
            >
              <p className="telemetry-text mb-2 text-xs">{metric.label}</p>
              <p className="text-h2 font-bold" style={{ color: metric.color }}>
                {metric.value}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Trust statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 panel-depth-3 border-l-4 border-system-green"
        >
          <p className="body-text text-center">
            <span className="text-system-green font-semibold">Proven infrastructure</span> powering mission-critical 
            operations across data centers, manufacturing, agriculture, and energy sectors. Built to handle 
            <span className="text-electric-blue font-semibold"> any physics domain</span>, 
            <span className="text-neon-cyan font-semibold"> unlimited scale</span>, and 
            <span className="text-amber font-semibold"> real-time demands</span>.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
