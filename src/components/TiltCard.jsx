import React, { useRef } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'

export default function TiltCard({ children, className = '' }) {
  const ref = useRef(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const rx = useTransform(y, [0, 1], [8, -8])
  const ry = useTransform(x, [0, 1], [-8, 8])
  const springRx = useSpring(rx, { stiffness: 120, damping: 12 })
  const springRy = useSpring(ry, { stiffness: 120, damping: 12 })

  const handleMouseMove = (e) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const px = (e.clientX - rect.left) / rect.width
    const py = (e.clientY - rect.top) / rect.height
    x.set(px)
    y.set(py)
  }

  const handleMouseLeave = () => {
    x.set(0.5)
    y.set(0.5)
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX: springRx, rotateY: springRy, transformStyle: 'preserve-3d' }}
      className={`relative will-change-transform ${className}`}
    >
      <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 [transform:translateZ(40px)] group-hover:opacity-100">
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/20 to-indigo-500/20 blur-2xl" />
      </div>
      <div className="[transform:translateZ(30px)]">
        {children}
      </div>
    </motion.div>
  )
}
