"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

export function ParallaxGrid() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })

  const translateY = useTransform(scrollYProgress, [0, 1], [0, 200])
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.5, 0.3, 0.1])

  return (
    <motion.div
      ref={ref}
      className="fixed inset-0 -z-10 grid-background pointer-events-none"
      style={{
        y: translateY,
        opacity,
      }}
      aria-hidden="true"
    />
  )
}
