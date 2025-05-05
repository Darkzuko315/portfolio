"use client"

import React from "react"

import { useState, useRef } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { Button, type ButtonProps } from "@/components/ui/button"

interface BorderTrailButtonProps extends ButtonProps {
  trailColor?: string
}

export function BorderTrailButton({
  children,
  className,
  trailColor = "rgba(59, 130, 246, 0.5)",
  asChild,
  ...props
}: BorderTrailButtonProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const buttonRef = useRef<HTMLButtonElement>(null)

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!buttonRef.current) return

    const rect = buttonRef.current.getBoundingClientRect()
    setPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    })
  }

  // If asChild is true, we need to clone the child and add our props
  if (asChild && React.isValidElement(children)) {
    return React.cloneElement(children as React.ReactElement, {
      className: cn("relative overflow-hidden", className),
      onMouseMove: handleMouseMove,
      onMouseEnter: () => setIsHovered(true),
      onMouseLeave: () => setIsHovered(false),
      ref: buttonRef,
      ...props,
      children: (
        <>
          {isHovered && (
            <motion.div
              className="absolute inset-0 pointer-events-none"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <div
                className="absolute inset-0"
                style={{
                  background: `radial-gradient(circle at ${position.x}px ${position.y}px, ${trailColor}, transparent 70%)`,
                }}
              />
            </motion.div>
          )}
          {children.props.children}
        </>
      ),
    })
  }

  // Regular button rendering
  return (
    <Button
      ref={buttonRef}
      className={cn("relative overflow-hidden", className)}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      {...props}
    >
      {isHovered && (
        <motion.div
          className="absolute inset-0 pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <div
            className="absolute inset-0"
            style={{
              background: `radial-gradient(circle at ${position.x}px ${position.y}px, ${trailColor}, transparent 70%)`,
            }}
          />
        </motion.div>
      )}
      <span className="relative z-10">{children}</span>
    </Button>
  )
}
