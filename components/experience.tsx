"use client"

import { motion } from "framer-motion"
import { staggerContainer, fadeIn } from "@/lib/motion"
import { Badge } from "@/components/ui/badge"
import { BorderTrailCard } from "@/components/ui/border-trail-card"

const experiences = [
  {
    id: 1,
    role: "Blockchain Developer",
    company: "Crypto Innovations",
    duration: "2021 - Present",
    description:
      "Developing smart contracts and dApps for DeFi protocols. Implementing token standards and creating secure, auditable blockchain solutions.",
    technologies: ["Solidity", "Web3.js", "React", "Hardhat", "Ethers.js"],
    color: "rgba(138, 43, 226, 0.7)",
    lightColor: "rgba(138, 43, 226, 0.5)",
  },
  {
    id: 2,
    role: "Full Stack Developer",
    company: "Web3 Agency",
    duration: "2018 - 2021",
    description:
      "Built decentralized applications and integrated blockchain technologies into existing platforms. Created NFT marketplaces and token exchange interfaces.",
    technologies: ["React", "Node.js", "TypeScript", "IPFS", "The Graph"],
    color: "rgba(64, 224, 208, 0.7)",
    lightColor: "rgba(64, 224, 208, 0.5)",
  },
  {
    id: 3,
    role: "Frontend Developer",
    company: "Tech Innovations",
    duration: "2016 - 2018",
    description:
      "Developed responsive user interfaces and interactive web applications. Focused on creating seamless user experiences with modern frameworks.",
    technologies: ["React", "JavaScript", "CSS3", "SASS", "Webpack"],
    color: "rgba(255, 105, 180, 0.7)",
    lightColor: "rgba(255, 105, 180, 0.5)",
  },
]

export function Experience() {
  return (
    <section id="experience" className="py-20 w-full bg-white dark:bg-black relative">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-purple-200/30 dark:bg-purple-900/10 rounded-full filter blur-3xl" />
        <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-cyan-200/30 dark:bg-cyan-900/10 rounded-full filter blur-3xl" />
      </div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="container px-4 sm:px-6 lg:px-8 mx-auto relative z-10"
      >
        <motion.div variants={fadeIn("up", "tween", 0.2, 1)} className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">Work Experience</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-purple-600 to-cyan-500 mx-auto rounded-full"></div>
          <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            My professional journey in Web3 and blockchain development.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-purple-500 via-cyan-500 to-purple-500 opacity-30"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                variants={fadeIn(index % 2 === 0 ? "right" : "left", "tween", index * 0.2, 0.7)}
                className="relative"
              >
                <div
                  className={`flex flex-col md:flex-row items-center ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse text-right"
                  }`}
                >
                  {/* Timeline dot */}
                  <div
                    className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full z-10"
                    style={{
                      background: `linear-gradient(to right, purple, cyan)`,
                      boxShadow: `0 0 10px ${exp.color}`,
                    }}
                  ></div>

                  {/* Date badge */}
                  <div className={`mb-4 md:mb-0 md:w-1/2 ${index % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}>
                    <Badge
                      variant="outline"
                      className="text-sm font-medium py-1 px-3 border-purple-500 text-purple-600 bg-purple-100/50 dark:text-purple-400 dark:bg-purple-900/20"
                    >
                      {exp.duration}
                    </Badge>
                  </div>

                  {/* Content */}
                  <div className={`md:w-1/2 ${index % 2 === 0 ? "md:pl-12" : "md:pr-12"}`}>
                    <BorderTrailCard
                      glowColor={exp.color}
                      borderColor={exp.color.replace("0.7", "0.3")}
                      lightGlowColor={exp.lightColor}
                      lightBorderColor={exp.lightColor.replace("0.5", "0.2")}
                    >
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">{exp.role}</h3>
                      <h4 className="text-lg text-purple-600 dark:text-purple-400 mb-3">{exp.company}</h4>
                      <p className="text-gray-600 dark:text-gray-400 mb-4">{exp.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs rounded border border-gray-200 dark:border-gray-700"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </BorderTrailCard>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}
