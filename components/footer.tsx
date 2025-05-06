"use client"

import { motion } from "framer-motion"


export function Footer() {
  return (
    <footer className="w-full border-t border-border py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        

        <div className="border-t border-border mt-12 pt-8 text-center text-muted-foreground">
          <p>© {new Date().getFullYear()} Bhush. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
