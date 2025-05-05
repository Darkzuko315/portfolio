import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Skills } from "@/components/skills"
import { Projects } from "@/components/projects"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { ParallaxGrid } from "@/components/parallax-grid"
import { GradientBackground } from "@/components/gradient-background"

export default function Home() {
  return (
    <main className="grid-bg flex min-h-screen flex-col items-center bg-background">
      <ParallaxGrid />
      <GradientBackground />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </main>
  )
}
