"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { ThemeToggle } from "@/components/theme-toggle"
import { Button } from "@/components/ui/button"
import { useInView } from "react-intersection-observer"

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

  const { ref: homeRef, inView: homeInView } = useInView({ threshold: 0.5 })
  const { ref: aboutRef, inView: aboutInView } = useInView({ threshold: 0.5 })
  const { ref: skillsRef, inView: skillsInView } = useInView({ threshold: 0.5 })
  const { ref: projectsRef, inView: projectsInView } = useInView({ threshold: 0.5 })
  const { ref: contactRef, inView: contactInView } = useInView({ threshold: 0.5 })

  // Update active section based on scroll position
  useEffect(() => {
    if (homeInView) setActiveSection("home")
    else if (aboutInView) setActiveSection("about")
    else if (skillsRef && skillsInView) setActiveSection("skills")
    else if (projectsInView) setActiveSection("projects")
    else if (contactInView) setActiveSection("contact")
  }, [homeInView, aboutInView, skillsInView, projectsInView, contactInView])

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-background/80 backdrop-blur-md border-b border-border shadow-sm" : "bg-transparent",
      )}
    >
      <div className="container mx-auto flex items-center justify-between h-16">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex-shrink-0"
        >
          <Link href="#home" className="text-xl font-medium">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-500">Portfolio</span>
          </Link>
        </motion.div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          <ul className="flex">
            {navItems.map((item, index) => (
              <motion.li
                key={item.name}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link
                  href={item.href}
                  className={cn(
                    "px-4 py-2 rounded-md mx-1 transition-colors relative block",
                    activeSection === item.href.substring(1)
                      ? "text-primary font-medium"
                      : "text-foreground/70 hover:text-foreground",
                  )}
                  onClick={() => setActiveSection(item.href.substring(1))}
                >
                  {item.name}
                  {activeSection === item.href.substring(1) && (
                    <motion.div
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
                      layoutId="activeSection"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              </motion.li>
            ))}
          </ul>

          <div className="ml-4">
            <ThemeToggle />
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <div className="flex items-center md:hidden">
          <ThemeToggle />

          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="ml-2"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-background border-b border-border"
          >
            <div className="container py-4 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "block px-4 py-2 rounded-md transition-colors",
                    activeSection === item.href.substring(1)
                      ? "bg-primary/10 text-primary font-medium"
                      : "hover:bg-secondary text-foreground/70",
                  )}
                  onClick={() => {
                    setActiveSection(item.href.substring(1))
                    setMobileMenuOpen(false)
                  }}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Section refs for intersection observer */}
      <div id="home" ref={homeRef} className="absolute top-0"></div>
      <div id="about" ref={aboutRef} className="absolute top-[100vh]"></div>
      <div id="skills" ref={skillsRef} className="absolute top-[200vh]"></div>
      <div id="projects" ref={projectsRef} className="absolute top-[300vh]"></div>
      <div id="contact" ref={contactRef} className="absolute top-[400vh]"></div>
    </header>
  )
}
