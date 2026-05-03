'use client'

import { useEffect, useRef, useState } from 'react'
import * as THREE from 'three'
import { motion } from 'framer-motion'

export default function SystemGraphHero() {
  const canvasRef = useRef(null)
  const [systemState, setSystemState] = useState('idle')
  const nodesRef = useRef([])
  const edgesRef = useRef([])

  useEffect(() => {
    if (!canvasRef.current) return

    const width = canvasRef.current.clientWidth
    const height = canvasRef.current.clientHeight

    // Scene setup
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000)
    const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current, antialias: true, alpha: true })
    
    renderer.setSize(width, height)
    renderer.setClearColor(0x02070F, 1)

    camera.position.z = 150

    // Create system graph nodes - ENHANCED with state tracking
    const nodes = []
    const nodeGeometry = new THREE.IcosahedronGeometry(3, 2)
    
    // Create layers - each represents a system layer
    const layers = [
      { y: 40, count: 3, color: 0x2F80FF, label: 'Physical Assets' },
      { y: 0, count: 4, color: 0x00E5FF, label: 'Digital Twin' },
      { y: -40, count: 4, color: 0xFFB020, label: 'Simulation' },
      { y: -80, count: 3, color: 0x22C55E, label: 'Decision' },
    ]

    // Node state: color indicates state, not decoration
    layers.forEach((layer, layerIdx) => {
      for (let i = 0; i < layer.count; i++) {
        const material = new THREE.MeshPhongMaterial({
          color: layer.color,
          emissive: layer.color,
          emissiveIntensity: 0.15,
        })
        const node = new THREE.Mesh(nodeGeometry, material)
        const angle = (i / layer.count) * Math.PI * 2
        node.position.x = Math.cos(angle) * 50
        node.position.y = layer.y
        node.position.z = Math.sin(angle) * 50
        node.userData = { 
          vx: (Math.random() - 0.5) * 0.015,
          vy: (Math.random() - 0.5) * 0.015,
          layer: layer.label,
          layerIdx: layerIdx,
          state: 'stable',
          isActive: false,
          scaleTarget: 1,
        }
        scene.add(node)
        nodes.push(node)
      }
    })

    nodesRef.current = nodes

    // Edges represent data flow between layers - ENHANCED with flow animation
    const edges = []
    const edgeMaterial = new THREE.LineBasicMaterial({ 
      color: 0x2F80FF, 
      transparent: true, 
      opacity: 0.25
    })

    for (let i = 0; i < layers.length - 1; i++) {
      const currentLayer = layers[i]
      const nextLayer = layers[i + 1]
      const startIdx = layers.slice(0, i).reduce((sum, l) => sum + l.count, 0)
      const nextIdx = layers.slice(0, i + 1).reduce((sum, l) => sum + l.count, 0)

      for (let j = 0; j < currentLayer.count; j++) {
        for (let k = 0; k < nextLayer.count; k++) {
          if (Math.random() > 0.65) {
            const startNode = nodes[startIdx + j]
            const endNode = nodes[nextIdx + k]
            const points = [startNode.position.clone(), endNode.position.clone()]
            const lineGeom = new THREE.BufferGeometry().setFromPoints(points)
            const lineMat = edgeMaterial.clone()
            const line = new THREE.Line(lineGeom, lineMat)
            
            line.userData = {
              startNode,
              endNode,
              flowProgress: 0,
              isFlowing: false,
            }
            
            scene.add(line)
            edges.push(line)
          }
        }
      }
    }

    edgesRef.current = edges

    // Ambient lighting only - functional illumination
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.3)
    scene.add(ambientLight)

    const pointLight = new THREE.PointLight(0x2F80FF, 0.8)
    pointLight.position.set(100, 100, 100)
    scene.add(pointLight)

    // Animation loop - system reaction to state changes - ENHANCED with flow
    let animationId
    let flowTime = 0
    const flowDuration = 3000

    const animate = () => {
      animationId = requestAnimationFrame(animate)
      flowTime += 16
      
      // Minimal node movement - represents system state
      nodes.forEach((node) => {
        node.rotation.x += 0.0003
        node.rotation.y += 0.0007
        
        // Soft drift for depth perception
        node.position.x += node.userData.vx
        node.position.y += node.userData.vy

        // Boundary conditions
        if (Math.abs(node.position.x) > 60) node.userData.vx *= -1
        if (Math.abs(node.position.y) > 100) node.userData.vy *= -1

        // Smooth scale animation for active states
        if (node.userData.isActive) {
          node.userData.scaleTarget = 1.15
        } else {
          node.userData.scaleTarget = 1
        }
        node.scale.lerp(
          new THREE.Vector3(node.userData.scaleTarget, node.userData.scaleTarget, node.userData.scaleTarget),
          0.1
        )
      })

      // Animate flow through edges
      edges.forEach((edge) => {
        if (systemState === 'active') {
          edge.userData.flowProgress = (flowTime % flowDuration) / flowDuration
          const flowOpacity = 0.2 + Math.sin(edge.userData.flowProgress * Math.PI * 2) * 0.3
          edge.material.opacity = Math.max(0.15, flowOpacity)
        } else {
          edge.material.opacity = 0.15
        }
      })

      renderer.render(scene, camera)
    }
    animate()

    // Handle resize
    const handleResize = () => {
      const newWidth = canvasRef.current?.clientWidth || width
      const newHeight = canvasRef.current?.clientHeight || height
      camera.aspect = newWidth / newHeight
      camera.updateProjectionMatrix()
      renderer.setSize(newWidth, newHeight)
    }

    // Mouse interaction - ENHANCED with system state
    const raycaster = new THREE.Raycaster()
    const mouse = new THREE.Vector2()

    const handleMouseMove = (event) => {
      const rect = canvasRef.current.getBoundingClientRect()
      mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1
      mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1

      raycaster.setFromCamera(mouse, camera)
      const intersects = raycaster.intersectObjects(nodes)

      // Reset all nodes
      nodes.forEach((node) => {
        node.userData.isActive = false
      })

      // Activate hovered node and adjacent nodes
      if (intersects.length > 0) {
        setSystemState('active')
        const hoveredNode = intersects[0].object
        hoveredNode.userData.isActive = true

        // Activate connected nodes (adjacent layers)
        nodes.forEach((node) => {
          if (hoveredNode.userData.layerIdx === node.userData.layerIdx - 1 || 
              hoveredNode.userData.layerIdx === node.userData.layerIdx + 1) {
            node.userData.isActive = true
          }
        })
      } else {
        setSystemState('idle')
      }
    }

    window.addEventListener('resize', handleResize)
    window.addEventListener('mousemove', handleMouseMove)

    return () => {
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('mousemove', handleMouseMove)
      cancelAnimationFrame(animationId)
      renderer.dispose()
    }
  }, [systemState])

  return (
    <div className="relative w-full h-screen bg-deep-space overflow-hidden pt-16">
      {/* Canvas - system visualization */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
      />

      {/* System state indicator - ENHANCED */}
      <div className="absolute top-24 left-6 z-20">
        <motion.div
          animate={{
            opacity: systemState === 'active' ? 1 : 0.5,
          }}
          className="flex items-center gap-2"
        >
          <motion.div 
            animate={{
              scale: systemState === 'active' ? [1, 1.2, 1] : 1,
            }}
            transition={{
              duration: 2,
              repeat: systemState === 'active' ? Infinity : 0,
            }}
            className="w-2 h-2 rounded-full"
            style={{
              backgroundColor: systemState === 'active' ? '#2F80FF' : '#666666',
            }}
          />
          <span className="text-xs font-mono text-gray-400">
            {systemState === 'active' ? 'SYSTEM ACTIVE' : 'SYSTEM IDLE'}
          </span>
        </motion.div>
      </div>

      {/* Command Zone - headline + system definition */}
      <div className="absolute inset-0 flex flex-col items-center justify-center z-10 px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl"
        >
          {/* System statement */}
          <h1 className="system-statement mb-4">
            Operating System for{' '}
            <span className="text-electric-blue">Physical Assets</span>
          </h1>
          
          {/* System definition - engineering focused */}
          <p className="body-text mb-8 max-w-2xl mx-auto leading-relaxed">
            Physics-governed intelligence for industrial systems. Model, simulate, and optimize 
            complex physical assets with decision infrastructure built for mission-critical operations.
          </p>

          {/* Interaction hint - ENHANCED */}
          <motion.p
            animate={{
              opacity: systemState === 'idle' ? 1 : 0,
            }}
            transition={{ duration: 0.3 }}
            className="text-xs font-mono text-neon-cyan mb-8"
          >
            Hover over visualization to activate system layers
          </motion.p>
          
          {/* Minimal CTAs */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="flex gap-4 justify-center flex-wrap"
          >
            <button className="px-6 py-2 bg-electric-blue text-white text-sm font-semibold rounded-lg hover:bg-opacity-90 transition-all duration-200 border border-electric-blue">
              Explore Architecture
            </button>
            <button className="px-6 py-2 border border-neon-cyan text-neon-cyan text-sm font-semibold rounded-lg hover:bg-neon-cyan hover:bg-opacity-10 transition-all duration-200">
              View Documentation
            </button>
          </motion.div>
        </motion.div>
      </div>

      {/* Grid reference - minimal overlay */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
        <svg className="w-full h-full" preserveAspectRatio="none">
          <defs>
            <pattern id="grid" width="80" height="80" patternUnits="userSpaceOnUse">
              <path d="M 80 0 L 0 0 0 80" fill="none" stroke="#2F80FF" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>
    </div>
  )
}
