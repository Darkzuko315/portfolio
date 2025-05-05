"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

export function GradientBackground() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })

  const translateY = useTransform(scrollYProgress, [0, 1], [0, -100])

  return (
    <motion.div
      ref={ref}
      className="fixed inset-0 -z-20 pointer-events-none "
      style={{ y: translateY }}
      aria-hidden="true"
    >
      <div className="absolute top-0 left-0 right-0 h-[50vh] bg-gradient-to-b from-primary/5 via-primary/2 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-[50vh] bg-gradient-to-t from-primary/5 via-primary/2 to-transparent" />
      <div className="absolute top-[30vh] -left-[10vw] w-[50vw] h-[50vw] rounded-full bg-blue-500/5 blur-[100px]" />
      <div className="absolute top-[60vh] -right-[10vw] w-[50vw] h-[50vw] rounded-full bg-primary/5 blur-[100px]" />
    </motion.div>
  )
}
