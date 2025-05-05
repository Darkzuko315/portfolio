"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ExternalLink, Github } from "lucide-react"
import { BorderTrailCard } from "@/components/border-trail-card"
import { BorderTrailButton } from "@/components/border-trail-button"

const projects = [
  {
    id: 1,
    title: "Modern E-commerce Platform",
    description:
      "A full-featured e-commerce platform with product management, cart functionality, and secure checkout process.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["React", "Next.js", "Stripe", "Tailwind CSS"],
    demoLink: "#",
    githubLink: "#",
    category: "fullstack",
  },
  {
    id: 2,
    title: "Portfolio Website",
    description: "A modern portfolio website with smooth animations and responsive design.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["React", "Framer Motion", "Tailwind CSS"],
    demoLink: "#",
    githubLink: "#",
    category: "frontend",
  },
  {
    id: 3,
    title: "Task Management API",
    description:
      "A RESTful API for task management with authentication, task CRUD operations, and team collaboration features.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["Node.js", "Express", "MongoDB", "JWT"],
    demoLink: "#",
    githubLink: "#",
    category: "backend",
  },
  {
    id: 4,
    title: "Weather Dashboard",
    description: "A weather dashboard that displays current and forecasted weather data for multiple locations.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["React", "OpenWeather API", "Chart.js", "Tailwind"],
    demoLink: "#",
    githubLink: "#",
    category: "frontend",
  },
]

const categories = [
  { id: "all", name: "All Projects" },
  { id: "frontend", name: "Frontend" },
  { id: "backend", name: "Backend" },
  { id: "fullstack", name: "Full Stack" },
]

export function Projects() {
  const [activeCategory, setActiveCategory] = useState("all")

  const filteredProjects =
    activeCategory === "all" ? projects : projects.filter((project) => project.category === activeCategory)

  return (
    <section id="projects" className="py-24 w-full">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">My Projects</h2>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full"></div>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Here are some of my recent projects. Each project showcases different skills and technologies from my stack.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-2 rounded-full transition-all ${
                activeCategory === category.id
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category.name}
            </motion.button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {filteredProjects.map((project) => (
              <BorderTrailCard key={project.id} className="h-full flex flex-col">
                <div className="relative overflow-hidden aspect-video rounded-lg mb-4 border border-border">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4 flex-grow">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 bg-secondary text-secondary-foreground text-xs rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3 mt-auto">
                  <BorderTrailButton variant="outline" size="sm" className="flex items-center gap-1">
                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </a>
                  </BorderTrailButton>
                  <BorderTrailButton size="sm" className="flex items-center gap-1">
                    <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Live Demo
                    </a>
                  </BorderTrailButton>
                </div>
              </BorderTrailCard>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
