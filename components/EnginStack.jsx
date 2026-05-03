'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

export default function EnginStack() {
  const [expandedLayer, setExpandedLayer] = useState(null)

  const layers = [
    {
      id: 'assets',
      title: 'Physical Assets',
      description: 'Industrial equipment, machinery, infrastructure',
      color: 'electric-blue',
      colorHex: '#2F80FF',
      details: [
        'Motor & pump systems',
        'Power generation assets',
        'HVAC & environmental systems',
        'IoT sensor networks',
      ],
    },
    {
      id: 'twin',
      title: 'Digital Twin Layer',
      description: 'Real-time virtual representation and state tracking',
      color: 'neon-cyan',
      colorHex: '#00E5FF',
      details: [
        'Real-time state synchronization',
        'Physics-based modeling',
        'Historical data integration',
        'Multi-sensor fusion',
      ],
    },
    {
      id: 'simulation',
      title: 'Simulation Layer',
      description: 'Predictive modeling and scenario analysis',
      color: 'amber',
      colorHex: '#FFB020',
      details: [
        'Physics-governed simulations',
        'Failure mode prediction',
        'Performance forecasting',
        'Scenario optimization',
      ],
    },
    {
      id: 'decision',
      title: 'Decision Engine',
      description: 'Actionable intelligence and recommendations',
      color: 'system-green',
      colorHex: '#22C55E',
      details: [
        'Real-time alerts & warnings',
        'Preventive maintenance schedules',
        'Performance optimization',
        'Risk assessment & mitigation',
      ],
    },
  ]

  return (
    <section className="py-32 px-4 bg-deep-space">
      <div className="max-w-5xl mx-auto">
        {/* Section header - module header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="module-header mb-3">ENGIN Stack</h2>
          <p className="body-text max-w-2xl">
            Layered infrastructure for modeling, simulating, and optimizing physical systems.
            Each layer builds intelligence from the ground up through physics-governed reasoning.
          </p>
        </motion.div>

        {/* Layered architecture visualization */}
        <div className="space-y-0">
          {layers.map((layer, idx) => (
            <motion.div
              key={layer.id}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              onClick={() => setExpandedLayer(expandedLayer === layer.id ? null : layer.id)}
              className="cursor-pointer group"
            >
              {/* Layer block - represents system layer */}
              <motion.div
                animate={{
                  backgroundColor: expandedLayer === layer.id 
                    ? 'rgba(17, 24, 39, 0.8)' 
                    : 'rgba(17, 24, 39, 0.4)',
                }}
                transition={{ duration: 0.2 }}
                style={{
                  borderLeft: `4px solid ${layer.colorHex}`,
                }}
                className="panel-depth-2 mb-0 rounded-none border-l-4 border-b border-electric-blue border-opacity-20"
              >
                {/* Layer header */}
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-4 flex-1">
                    {/* State indicator */}
                    <div
                      className="w-3 h-full min-h-[60px]"
                      style={{
                        background: `linear-gradient(to bottom, ${layer.colorHex}, ${layer.colorHex}99)`,
                        borderRadius: '2px',
                      }}
                    />
                    <div className="flex-1 pt-1">
                      <h3 className="text-h3 font-bold text-white mb-2">{layer.title}</h3>
                      <p className="body-text text-sm">{layer.description}</p>
                    </div>
                  </div>
                  
                  {/* Expand indicator */}
                  <motion.div
                    animate={{ rotate: expandedLayer === layer.id ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="text-lg mt-1"
                    style={{ color: layer.colorHex }}
                  >
                    ▼
                  </motion.div>
                </div>

                {/* Expanded layer details */}
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{
                    height: expandedLayer === layer.id ? 'auto' : 0,
                    opacity: expandedLayer === layer.id ? 1 : 0,
                  }}
                  transition={{ duration: 0.2 }}
                  className="overflow-hidden"
                >
                  <div className="mt-4 pt-4 border-t border-electric-blue border-opacity-20 pl-7">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {layer.details.map((detail, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.05 }}
                          className="flex items-start gap-3"
                        >
                          {/* Signal indicator - color represents state */}
                          <div
                            className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0"
                            style={{ backgroundColor: layer.colorHex }}
                          />
                          <span className="body-text text-sm">{detail}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </motion.div>

              {/* Layer connector - represents flow between layers - ENHANCED */}
              {idx < layers.length - 1 && (
                <motion.div
                  animate={{
                    height: expandedLayer === layer.id ? '32px' : '16px',
                  }}
                  className="relative flex justify-center py-2"
                >
                  {/* Animated flow line */}
                  <motion.div
                    animate={{
                      opacity: expandedLayer === layer.id ? [0.3, 0.8, 0.3] : 0.2,
                      scaleY: expandedLayer === layer.id ? [1, 1.2, 1] : 1,
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="w-px"
                    style={{
                      background: `linear-gradient(to bottom, ${layer.colorHex}, ${layers[idx + 1].colorHex}66)`,
                      height: '100%',
                    }}
                  />
                  
                  {/* Flow marker - represents data flow - ENHANCED */}
                  <motion.div
                    animate={{
                      y: expandedLayer === layer.id ? [0, 8, 0] : 0,
                      opacity: expandedLayer === layer.id ? 1 : 0.5,
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="absolute top-1/2 transform -translate-y-1/2"
                    style={{ color: layer.colorHex }}
                  >
                    ↓
                  </motion.div>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>

        {/* System capabilities metrics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {[
            { label: 'Physics Domains', value: '50+', color: '#2F80FF' },
            { label: 'Integration Surfaces', value: '100+', color: '#00E5FF' },
            { label: 'System Scale', value: 'Unlimited', color: '#22C55E' },
          ].map((stat, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -3 }}
              className="panel-depth-2 text-center border-l-4"
              style={{ borderColor: stat.color }}
            >
              <p className="telemetry-text mb-2">{stat.label}</p>
              <p className="text-h2 font-bold" style={{ color: stat.color }}>
                {stat.value}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
