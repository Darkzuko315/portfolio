"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { BorderTrailButton } from "@/components/border-trail-button";
import { HoverBorderGradientButton } from "./animation/hover-border-gradient";
import { TextShimmer } from "./core/text-effect";
import { GlowEffect } from "./core/button-glow";
import Link from "next/link";

export function Hero() {
  return (
    <section
      id="home"
      className=" relative min-h-screen w-full flex flex-col items-center justify-center pt-16"
      style={{ overflowX: "hidden" }}
    >

      <div
        className="w-[650px] h-[600px] mb-8
      bg-[url('/assets/mainIcons.svg')] 
      dark:bg-[url('/assets/mainIconsdark.svg')]
      bg-no-repeat bg-contain bg-center container mx-auto flex flex-col items-center text-center z-10 px-4 sm:px-6 lg:px-8"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="mb-1"
          >
            <div className=" inline-block relative z-10">
              <span>
                <HoverBorderGradientButton />
              </span>
            </div>
          </motion.div>

          <TextShimmer
            className="-mt-36  text-xl font-bold sm:text-xl md:text-2xl
    
    w-full max-w-[90vw] sm:max-w-xl md:max-w-2xl
    bg-background/70 dark:bg-background/50
    px-4 py-3 rounded-lg  shadow-sm
    break-words text-center"
            duration={1}
          >
            I build modern, responsive web applications using PHP, Laravel,
            Tailwind, React, Next.js, TypeScript, and other cutting-edge
            technologies.
          </TextShimmer>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className=" flex flex-col sm:flex-row gap-4 mt-8"
        >
          <BorderTrailButton
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground"
            trailColor="rgba(59, 130, 246, 0.3)"
          >
            <a href="#projects">Projects</a>
          </BorderTrailButton>

           <div className='relative'>
      <GlowEffect
        colors={['#FF5733', '#33FF57', '#3357FF', '#F1C40F']}
        mode='colorShift'
        blur='soft'
        duration={3}
        scale={0.9}
      />
      <button className='w-40 h-11 bg-primary flex justify-center text-center relative items-center gap-1 rounded-md bg-zinc-950 px-2.5 py-1.5 text-sm text-zinc-50 outline outline-1 outline-[#fff2f21f]'>
        <Link href="#contact">Contact Me</Link> 
      </button>
    </div>

          
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
          >
            <a
              href="#about"
              className="text-primary hover:text-primary/80 transition-colors"
            >
              <ArrowDown className="h-6 w-6" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
