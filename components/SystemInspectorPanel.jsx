'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

export default function SystemInspectorPanel() {
  const [metrics, setMetrics] = useState({
    temperature: 62,
    latency: 24,
    throughput: 15200,
    cpuUsage: 48,
    memoryUsage: 72,
    dataFlowRate: 85,
  })

  const [activeLayer, setActiveLayer] = useState(null)

  // Simulate real-time metric updates
  useEffect(() => {
    const interval = setInterval(() => {
      setMetrics(prev => ({
        temperature: Math.min(100, Math.max(40, prev.temperature + (Math.random() - 0.5) * 4)),
        latency: Math.min(50, Math.max(10, prev.latency + (Math.random() - 0.5) * 3)),
        throughput: Math.min(20000, Math.max(10000, prev.throughput + (Math.random() - 0.5) * 500)),
        cpuUsage: Math.min(100, Math.max(20, prev.cpuUsage + (Math.random() - 0.5) * 5)),
        memoryUsage: Math.min(100, Math.max(40, prev.memoryUsage + (Math.random() - 0.5) * 4)),
        dataFlowRate: Math.min(100, Math.max(30, prev.dataFlowRate + (Math.random() - 0.5) * 6)),
      }))
    }, 2000)

    return () => clearInterval(interval)
  }, [])

  const getMetricStatus = (value, max) => {
    const percentage = (value / max) * 100
    if (percentage < 50) return 'stable'
    if (percentage < 75) return 'warning'
    return 'critical'
  }

  const statusColors = {
    stable: '#22C55E',
    warning: '#FFB020',
    critical: '#FF4444',
  }

  const metricItems = [
    { label: 'Temperature', value: Math.round(metrics.temperature), unit: '°C', max: 100 },
    { label: 'Latency', value: Math.round(metrics.latency), unit: 'ms', max: 50 },
    { label: 'Throughput', value: Math.round(metrics.throughput), unit: 'ops/s', max: 20000 },
    { label: 'CPU Usage', value: Math.round(metrics.cpuUsage), unit: '%', max: 100 },
    { label: 'Memory Usage', value: Math.round(metrics.memoryUsage), unit: '%', max: 100 },
    { label: 'Data Flow Rate', value: Math.round(metrics.dataFlowRate), unit: '%', max: 100 },
  ]

  return (
    <section className="py-32 px-4 bg-deep-space">
      <div className="max-w-5xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="module-header mb-3">System Inspector</h2>
          <p className="body-text max-w-2xl">
            Real-time monitoring of system metrics across all operational layers.
            Color-coded status indicators represent system health and performance.
          </p>
        </motion.div>

        {/* Metrics grid - ADVANCED COMPONENT */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
        >
          {metricItems.map((metric, idx) => {
            const status = getMetricStatus(metric.value, metric.max)
            const percentage = (metric.value / metric.max) * 100

            return (
              <motion.div
                key={idx}
                whileHover={{ y: -5 }}
                onClick={() => setActiveLayer(activeLayer === idx ? null : idx)}
                className="panel-depth-2 border-l-4 cursor-pointer transition-all"
                style={{ borderColor: statusColors[status] }}
              >
                {/* Metric header */}
                <div className="flex items-center justify-between mb-3">
                  <p className="telemetry-text text-xs font-mono">{metric.label}</p>
                  <motion.div
                    animate={{
                      scale: status === 'critical' ? [1, 1.2, 1] : 1,
                    }}
                    transition={{
                      duration: 1,
                      repeat: status === 'critical' ? Infinity : 0,
                    }}
                    className="w-2 h-2 rounded-full"
                    style={{ backgroundColor: statusColors[status] }}
                  />
                </div>

                {/* Metric value */}
                <div className="mb-4">
                  <motion.div
                    animate={{ opacity: [0.8, 1, 0.8] }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                    }}
                    className="text-h3 font-bold"
                    style={{ color: statusColors[status] }}
                  >
                    {metric.value}
                    <span className="text-sm ml-1 text-gray-400">{metric.unit}</span>
                  </motion.div>
                </div>

                {/* Progress bar - represents metric value */}
                <div className="mb-3">
                  <div className="h-2 bg-panel-layer rounded overflow-hidden">
                    <motion.div
                      animate={{
                        width: `${percentage}%`,
                      }}
                      transition={{
                        duration: 0.5,
                        ease: 'easeInOut',
                      }}
                      className="h-full rounded"
                      style={{ backgroundColor: statusColors[status] }}
                    />
                  </div>
                </div>

                {/* Status text */}
                <p className="text-xs font-mono text-gray-400 capitalize">
                  {status === 'stable' ? '✓ Healthy' : status === 'warning' ? '⚠ Warning' : '✕ Critical'}
                </p>

                {/* Expandable details */}
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{
                    height: activeLayer === idx ? 'auto' : 0,
                    opacity: activeLayer === idx ? 1 : 0,
                  }}
                  transition={{ duration: 0.2 }}
                  className="overflow-hidden mt-3 pt-3 border-t border-electric-blue border-opacity-20"
                >
                  <div className="text-xs text-gray-400 space-y-1">
                    <div>Max: {metric.max} {metric.unit}</div>
                    <div>Threshold: {Math.round(metric.max * 0.75)} {metric.unit}</div>
                    <div>Trend: {metric.value > metric.max * 0.5 ? '↑ Increasing' : '↓ Decreasing'}</div>
                  </div>
                </motion.div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* System health summary - ENHANCED */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="panel-depth-3 border-l-4 border-system-green"
        >
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-bold text-white">Overall System Health</h3>
            <motion.div
              animate={{
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
              className="w-3 h-3 rounded-full bg-system-green"
            />
          </div>

          <div className="space-y-3">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-gray-400">System Status</span>
                <span className="text-sm font-mono text-system-green">OPERATIONAL</span>
              </div>
              <div className="h-1.5 bg-panel-layer rounded overflow-hidden">
                <motion.div
                  animate={{
                    width: '95%',
                  }}
                  transition={{
                    duration: 0.5,
                  }}
                  className="h-full bg-system-green rounded"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-gray-400">Data Integrity</span>
                <span className="text-sm font-mono text-system-green">100%</span>
              </div>
              <div className="h-1.5 bg-panel-layer rounded overflow-hidden">
                <motion.div
                  animate={{
                    width: '100%',
                  }}
                  transition={{
                    duration: 0.5,
                  }}
                  className="h-full bg-system-green rounded"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-gray-400">Layer Synchronization</span>
                <span className="text-sm font-mono text-system-green">99.8%</span>
              </div>
              <div className="h-1.5 bg-panel-layer rounded overflow-hidden">
                <motion.div
                  animate={{
                    width: '99.8%',
                  }}
                  transition={{
                    duration: 0.5,
                  }}
                  className="h-full bg-system-green rounded"
                />
              </div>
            </div>
          </div>

          <p className="text-xs text-gray-400 mt-4 font-mono">
            Last update: <span suppressHydrationWarning>{new Date().toLocaleTimeString()}</span>
          </p>
        </motion.div>
      </div>
    </section>
  )
}
