'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { label: 'Architecture', href: '#architecture' },
    { label: 'Scenarios', href: '#use-cases' },
    { label: 'Capabilities', href: '#capabilities' },
    { label: 'Platform', href: '#platform' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-deep-space border-b border-electric-blue border-opacity-20 backdrop-blur-sm">
      <nav className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        {/* Logo - mission control aesthetic */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="flex items-center gap-2"
        >
          {/* Minimal logo */}
          <div className="w-8 h-8 border border-electric-blue rounded-sm flex items-center justify-center font-mono text-xs font-bold text-electric-blue">
            EP
          </div>
          <span className="font-mono text-sm font-bold text-white tracking-wider">ENGINPILOT</span>
        </motion.div>

        {/* Desktop nav */}
        <motion.div
          className="hidden md:flex items-center gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
        >
          {navItems.map((item, idx) => (
            <motion.a
              key={idx}
              href={item.href}
              whileHover={{ color: '#2F80FF' }}
              className="text-gray-400 text-sm font-medium hover:text-electric-blue transition-colors duration-200"
            >
              {item.label}
            </motion.a>
          ))}
        </motion.div>

        {/* CTA Button */}
        <motion.div
          className="hidden md:flex items-center gap-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="px-4 py-2 border border-electric-blue text-electric-blue rounded-lg text-sm font-medium hover:bg-electric-blue hover:bg-opacity-5 transition-all duration-200"
          >
            Login
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="px-4 py-2 bg-electric-blue text-white rounded-lg text-sm font-medium hover:opacity-90 transition-opacity duration-200"
          >
            Start Trial
          </motion.button>
        </motion.div>

        {/* Mobile menu button */}
        <motion.button
          className="md:hidden text-gray-400 w-6 h-6"
          onClick={() => setIsOpen(!isOpen)}
          whileTap={{ scale: 0.9 }}
        >
          <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </motion.button>
      </nav>

      {/* Mobile menu */}
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: isOpen ? 1 : 0, height: isOpen ? 'auto' : 0 }}
        transition={{ duration: 0.2 }}
        className="md:hidden overflow-hidden bg-system-surface border-t border-electric-blue border-opacity-20"
      >
        <div className="px-6 py-4 space-y-3">
          {navItems.map((item, idx) => (
            <motion.a
              key={idx}
              href={item.href}
              className="block text-gray-400 text-sm font-medium hover:text-electric-blue transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </motion.a>
          ))}
          <div className="border-t border-gray-700 pt-3 space-y-2">
            <button className="w-full px-4 py-2 border border-electric-blue text-electric-blue rounded-lg text-sm font-medium">
              Login
            </button>
            <button className="w-full px-4 py-2 bg-electric-blue text-white rounded-lg text-sm font-medium">
              Start Trial
            </button>
          </div>
        </div>
      </motion.div>
    </header>
  )
}
