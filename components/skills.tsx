"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { BorderTrailCard } from "@/components/border-trail-card"
import { useIsMobile } from "@/hooks/useIsMobile"

const skills = [
  {
    category: "Frontend",
    items: [
      { name: "React", level: 80, icon: "/skills/react.png" },
      { name: "Next.js", level: 90, icon: "/skills/next.png" },
      { name: "TypeScript", level: 80, icon: "/skills/ts.png" },
      { name: "Tailwind CSS", level: 90, icon: "/skills/tailwind.png" },
      { name: "Framer Motion", level: 75, icon: "/skills/framer.png" },
      { name: "HTML", level: 75, icon: "/skills/html.png" },
      { name: "CSS", level: 80, icon: "/skills/css.png" },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js", level: 85, icon: "/skills/node-js.png" },
      { name: "Express", level: 80, icon: "/skills/express.png" },
      { name: "MongoDB", level: 75, icon: "/skills/mongodb.png" },
      { name: "PostgreSQL", level: 70, icon: "/skills/postger.png" },
      { name: "GraphQL", level: 65, icon: "/skills/graphql.png" },
      { name: "Prisma", level: 85, icon: "/skills/prisma.webp" },
      { name: "PHP", level: 85, icon: "/skills/php.png" },
      { name: "MySQL", level: 85, icon: "/skills/mysql.png" },
    ],
  },
  {
    category: "Tools",
    items: [
      { name: "Git", level: 85, icon: "/skills/git.svg" },
      { name: "Docker", level: 70, icon: "/skills/docker.webp" },
      { name: "Firebase", level: 65, icon: "/skills/firebase.png" },
      { name: "Auth", level: 75, icon: "/skills/logo-sm.png" },
      { name: "Figma", level: 80, icon: "/skills/figma.png" },
      { name: "Stripe", level: 80, icon: "/skills/stripe.webp" },
      { name: "MUI", level: 80, icon: "/skills/mui.png" },
      { name: "Google", level: 80, icon: "/skills/google.png" },
      { name: "Photoshop", level: 80, icon: "/skills/ps.svg" },
    ],
  },
]

export function Skills() {
  const isMobile = useIsMobile()
  const [activeCategory, setActiveCategory] = useState("Frontend")
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null)

  const activeSkills =
    skills.find((s) => s.category === activeCategory)?.items || []

  return (
    <section id="skills" className="py-24 w-full">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">My Skills</h2>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full"></div>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Here are the technologies and tools I work with to bring ideas to life.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {skills.map((skillGroup) => {
            const isActive = activeCategory === skillGroup.category
            return (
              <button
                key={skillGroup.category}
                onClick={() => setActiveCategory(skillGroup.category)}
                className={`px-6 py-2 rounded-full transition-all ${
                  isActive
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                }`}
              >
                {skillGroup.category}
              </button>
            )
          })}
        </div>

        <BorderTrailCard className="p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              {activeSkills.map((skill) => (
                <div
                  key={skill.name}
                  className="relative"
                  onMouseEnter={() => setHoveredSkill(skill.name)}
                  onMouseLeave={() => setHoveredSkill(null)}
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center">
                      <span className="mr-2">
                        <img src={skill.icon} className="w-6 h-6" />
                      </span>
                      <span className="font-medium">{skill.name}</span>
                    </div>
                    <span className="text-sm text-muted-foreground">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="h-2 w-full bg-secondary rounded-full overflow-hidden">
                    <div
                      className="h-full bg-primary transition-all duration-700"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Skill orbit only on desktop */}
            {!isMobile && (
              <div className="flex items-center justify-center">
                <div className="relative w-64 h-64 flex items-center justify-center">
                  <div className="absolute inset-0 bg-primary/5 rounded-full" />
                  {activeSkills.map((skill, index) => {
                    const angle = (index / activeSkills.length) * Math.PI * 2
                    const x = Math.cos(angle) * 100
                    const y = Math.sin(angle) * 100

                    return (
                      <motion.div
                        key={skill.name}
                        className={`absolute flex items-center justify-center w-12 h-12 rounded-full ${
                          hoveredSkill === skill.name
                            ? "bg-primary text-primary-foreground"
                            : "bg-secondary text-secondary-foreground"
                        }`}
                        initial={{ x: 0, y: 0 }}
                        animate={{ x, y }}
                        transition={{ duration: 0.5 }}
                      >
                        <img
                          src={skill.icon}
                          alt={skill.name}
                          loading="lazy"
                        />
                      </motion.div>
                    )
                  })}
                  <div className="text-center z-10">
                    <span className="text-lg font-medium">{activeCategory}</span>
                    <p className="text-sm text-muted-foreground">Expertise</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </BorderTrailCard>
      </div>
    </section>
  )
}
