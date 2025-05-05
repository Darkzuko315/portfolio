"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Github, Linkedin, Twitter, Instagram } from "lucide-react"

export function Footer() {
  return (
    <footer className="w-full border-t border-border py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Link href="#home" className="text-2xl font-medium">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-500">Portfolio</span>
            </Link>
            <p className="mt-4 text-muted-foreground max-w-md">
              A passionate Full Stack Developer specializing in creating modern, responsive web applications with
              cutting-edge technologies.
            </p>
            <div className="flex space-x-4 mt-6">
              <motion.a
                href="#"
                whileHover={{ y: -3 }}
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Github className="h-5 w-5" />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ y: -3 }}
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ y: -3 }}
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ y: -3 }}
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </motion.a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#home" className="text-muted-foreground hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#about" className="text-muted-foreground hover:text-primary transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="#skills" className="text-muted-foreground hover:text-primary transition-colors">
                  Skills
                </Link>
              </li>
              <li>
                <Link href="#projects" className="text-muted-foreground hover:text-primary transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Tech Stack</h3>
            <ul className="space-y-2">
              <li className="text-muted-foreground">React & Next.js</li>
              <li className="text-muted-foreground">TypeScript</li>
              <li className="text-muted-foreground">Tailwind CSS</li>
              <li className="text-muted-foreground">Node.js & Express</li>
              <li className="text-muted-foreground">MongoDB & SQL</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 text-center text-muted-foreground">
          <p>© {new Date().getFullYear()} My Portfolio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
