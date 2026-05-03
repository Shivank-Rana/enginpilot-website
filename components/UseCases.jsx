'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

export default function UseCases() {
  const [activeCase, setActiveCase] = useState(0)
  const [timelineProgress, setTimelineProgress] = useState(0)

  const useCases = [
    {
      title: 'Data Center Failure Cascade',
      timeline: [
        { time: '0s', event: 'Normal operations', status: 'stable', icon: '●' },
        { time: '45s', event: 'Primary cooling unit fails', status: 'warning', icon: '◆' },
        { time: '90s', event: 'Temperature spike detected', status: 'critical', icon: '⚠' },
        { time: '120s', event: 'Automated failover activated', status: 'recovery', icon: '→' },
        { time: '180s', event: 'System normalized', status: 'stable', icon: '●' },
      ],
      metrics: { efficiency: '98.5%', uptime: '99.99%', prediction: '100%' },
      cause: 'Cooling system degradation over time',
      effect: 'Prevented cascade failure through predictive intervention',
    },
    {
      title: 'Agricultural Drone Fleet Optimization',
      timeline: [
        { time: '06:00', event: 'Pre-flight diagnostics', status: 'stable', icon: '●' },
        { time: '07:30', event: 'Autonomous mission started', status: 'active', icon: '→' },
        { time: '11:45', event: 'Anomaly detected in drone 7', status: 'warning', icon: '◆' },
        { time: '12:00', event: 'Predictive maintenance alert', status: 'critical', icon: '⚠' },
        { time: '14:00', event: 'Fleet optimization complete', status: 'stable', icon: '●' },
      ],
      metrics: { coverage: '2,400 acres', efficiency: '94.2%', time: '8.5 hrs' },
      cause: 'Motor bearing degradation pattern detected',
      effect: 'Maintenance scheduled, mission completed without failure',
    },
    {
      title: 'Industrial Motor Degradation',
      timeline: [
        { time: 'Day 1', event: 'Baseline performance established', status: 'stable', icon: '●' },
        { time: 'Day 45', event: 'Vibration patterns shift detected', status: 'warning', icon: '◆' },
        { time: 'Day 67', event: 'Degradation trajectory predicted', status: 'critical', icon: '⚠' },
        { time: 'Day 82', event: 'Maintenance window scheduled', status: 'recovery', icon: '→' },
        { time: 'Day 90', event: 'Motor replaced, performance restored', status: 'stable', icon: '●' },
      ],
      metrics: { downtime: '0 mins', maintenance: 'Planned', cost: 'Optimized' },
      cause: 'Bearing wear pattern following physics model',
      effect: 'Replaced before failure, zero unplanned downtime',
    },
  ]

  const statusColors = {
    stable: '#22C55E',
    warning: '#FFB020',
    critical: '#FF4444',
    active: '#2F80FF',
    recovery: '#00E5FF',
  }

  const currentCase = useCases[activeCase]

  return (
    <section className="py-32 px-4 bg-system-surface">
      <div className="max-w-5xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="module-header mb-3">Proof Zone - Real-World Scenarios</h2>
          <p className="body-text max-w-2xl">
            Timeline-based scenario simulations showing cause → effect. See how ENGINPILOT prevents failures,
            optimizes performance, and enables predictive decision-making across industries.
          </p>
        </motion.div>

        {/* Scenario selector */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex gap-3 mb-12 overflow-x-auto pb-4"
        >
          {useCases.map((useCase, idx) => (
            <motion.button
              key={idx}
              onClick={() => {
                setActiveCase(idx)
                setTimelineProgress(0)
              }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-4 py-2 rounded-lg font-medium text-sm whitespace-nowrap transition-all duration-200"
              style={{
                backgroundColor: activeCase === idx ? '#2F80FF' : '#111827',
                color: activeCase === idx ? '#fff' : '#9CA3AF',
                border: `1px solid ${activeCase === idx ? '#2F80FF' : '#2F80FF33'}`,
              }}
            >
              {useCase.title}
            </motion.button>
          ))}
        </motion.div>

        {/* Timeline visualization */}
        <motion.div
          key={activeCase}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="panel-depth-3 mb-8"
        >
          {/* Cause-Effect header */}
          <div className="grid grid-cols-2 gap-6 mb-8 pb-6 border-b border-electric-blue border-opacity-20">
            <div>
              <p className="telemetry-text mb-2">ROOT CAUSE</p>
              <p className="body-text text-sm">{currentCase.cause}</p>
            </div>
            <div>
              <p className="telemetry-text mb-2">PREDICTED EFFECT</p>
              <p className="body-text text-sm">{currentCase.effect}</p>
            </div>
          </div>

          {/* Timeline events - represents system state transitions */}
          <div className="mb-8">
            <h3 className="text-h3 font-bold text-white mb-6">Event Timeline</h3>
            <div className="space-y-6">
              {currentCase.timeline.map((event, idx) => {
                const eventProgress = idx / (currentCase.timeline.length - 1)
                const isActive = timelineProgress >= eventProgress
                const isUpcoming = timelineProgress < eventProgress && timelineProgress > eventProgress - 0.2
                
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -15 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.08 }}
                    className="flex items-start gap-4"
                  >
                    {/* Timeline marker - ENHANCED with state animations */}
                    <div className="flex flex-col items-center relative">
                      <motion.div
                        animate={{
                          scale: isActive ? 1.4 : isUpcoming ? 1.2 : 1,
                          opacity: isActive ? 1 : isUpcoming ? 0.8 : 0.6,
                        }}
                        transition={{ duration: 0.3 }}
                        className="w-6 h-6 rounded-full flex items-center justify-center border-2 text-xs font-bold relative z-10"
                        style={{
                          borderColor: statusColors[event.status],
                          backgroundColor: isActive ? statusColors[event.status] + '44' : 'transparent',
                          color: statusColors[event.status],
                        }}
                      >
                        {event.icon}
                      </motion.div>
                      
                      {/* Animated connection line - ENHANCED FLOW */}
                      {idx < currentCase.timeline.length - 1 && (
                        <motion.div
                          animate={{
                            height: isActive ? '70px' : '60px',
                            backgroundColor: isActive 
                              ? statusColors[event.status]
                              : statusColors[event.status] + '44',
                            boxShadow: isActive
                              ? `0 0 10px ${statusColors[event.status]}88`
                              : 'none',
                          }}
                          transition={{ duration: 0.3 }}
                          className="w-px my-1"
                          style={{
                            background: isActive
                              ? `linear-gradient(to bottom, ${statusColors[event.status]}, ${statusColors[currentCase.timeline[idx + 1].status]}66)`
                              : `linear-gradient(to bottom, ${statusColors[event.status]}44, ${statusColors[currentCase.timeline[idx + 1].status]}22)`,
                          }}
                        />
                      )}
                    </div>

                    {/* Event content */}
                    <div className="flex-1 pt-0.5">
                      <p className="telemetry-text text-xs font-mono mb-1">
                        {event.time}
                      </p>
                      <p className="body-text text-sm">{event.event}</p>
                    </div>

                    {/* Status badge - ENHANCED */}
                    <motion.div
                      animate={{
                        scale: isActive ? 1.05 : 1,
                        opacity: isActive ? 1 : 0.7,
                      }}
                      transition={{ duration: 0.3 }}
                      className="px-2 py-1 rounded text-xs font-mono whitespace-nowrap mt-1 flex-shrink-0"
                      style={{
                        backgroundColor: statusColors[event.status] + '22',
                        color: statusColors[event.status],
                        border: `1px solid ${statusColors[event.status]}66`,
                      }}
                    >
                      {event.status.toUpperCase()}
                    </motion.div>
                  </motion.div>
                )
              })}
            </div>
          </div>

          {/* Timeline scrub - represents simulation over time */}
          <div className="space-y-3 border-t border-electric-blue border-opacity-20 pt-6">
            <div className="flex items-center justify-between">
              <label className="telemetry-text text-xs">
                Scenario Progress
              </label>
              <span className="telemetry-text text-xs">
                {Math.round(timelineProgress * 100)}%
              </span>
            </div>
            <input
              type="range"
              min="0"
              max="100"
              value={timelineProgress * 100}
              onChange={(e) => setTimelineProgress(Number(e.target.value) / 100)}
              className="w-full h-1.5 bg-panel-layer rounded appearance-none cursor-pointer accent-electric-blue"
            />
          </div>
        </motion.div>

        {/* Metrics - system performance indicators */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-3 gap-4"
        >
          {Object.entries(currentCase.metrics).map(([key, value]) => (
            <motion.div
              key={key}
              whileHover={{ y: -2 }}
              className="panel-depth-2 text-center border-l-4"
              style={{ borderColor: statusColors.stable }}
            >
              <p className="telemetry-text mb-2 text-xs">{key.toUpperCase()}</p>
              <p className="text-h2 font-bold text-electric-blue">{value}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
