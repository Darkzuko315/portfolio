"use client"

import type React from "react"

import { useState, useRef } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface BorderTrailCardProps {
  children: React.ReactNode
  className?: string
  glowColor?: string
  borderColor?: string
}

export function BorderTrailCard({
  children,
  className,
  glowColor = "rgba(138, 43, 226, 0.7)",
  borderColor = "rgba(138, 43, 226, 0.3)",
}: BorderTrailCardProps) {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return

    const rect = cardRef.current.getBoundingClientRect()
    setPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    })
  }

  return (
    <motion.div
      ref={cardRef}
      className={cn(
        "relative rounded-xl bg-black/40 backdrop-blur-sm p-6 overflow-hidden",
        "border border-gray-800 transition-all duration-300",
        isHovered && "shadow-lg",
        className,
      )}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      {isHovered && (
        <div
          className="absolute pointer-events-none"
          style={{
            background: `radial-gradient(120px circle at ${position.x}px ${position.y}px, ${glowColor}, transparent)`,
            width: "100%",
            height: "100%",
            top: 0,
            left: 0,
            zIndex: 1,
            opacity: 0.7,
          }}
        />
      )}

      {isHovered && (
        <div
          className="absolute inset-0 pointer-events-none rounded-xl"
          style={{
            border: `1px solid ${borderColor}`,
            boxShadow: `0 0 15px ${glowColor}`,
            zIndex: 2,
          }}
        />
      )}

      <div className="relative z-10">{children}</div>
    </motion.div>
  )
}
