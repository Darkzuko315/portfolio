"use client";

import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Skills } from "@/components/skills";
import { Projects } from "@/components/projects";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import { ParallaxGrid } from "@/components/parallax-grid";
import { GradientBackground } from "@/components/gradient-background";

// Utility to detect mobile screens
const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

export default function Home() {
  const [activeSection, setActiveSection] = useState("home");

  const { ref: homeRef, inView: homeInView } = useInView({ threshold: 0.3 });
  const { ref: aboutRef, inView: aboutInView } = useInView({ threshold: 0.3 });
  const { ref: skillsRef, inView: skillsInView } = useInView({ threshold: 0.3 });
  const { ref: projectsRef, inView: projectsInView } = useInView({ threshold: 0.3 });
  const { ref: contactRef, inView: contactInView } = useInView({ threshold: 0.3 });

  useEffect(() => {
    if (homeInView) setActiveSection("home");
    else if (aboutInView) setActiveSection("about");
    else if (skillsInView) setActiveSection("skills");
    else if (projectsInView) setActiveSection("projects");
    else if (contactInView) setActiveSection("contact");
  }, [homeInView, aboutInView, skillsInView, projectsInView, contactInView]);

  return (
    <main className="grid-bg flex min-h-screen flex-col items-center bg-background scroll-smooth overflow-x-hidden">
      <Header activeSection={activeSection} />

      {/* Optionally disable heavy visuals on mobile */}
      {!isMobile && <ParallaxGrid />}
      {!isMobile && <GradientBackground />}

      <section
        id="home"
        ref={homeRef}
        className="w-full"
        style={{
          contentVisibility: "auto",
          containIntrinsicSize: "1000px",
        }}
      >
        <Hero />
      </section>

      <section
        id="about"
        ref={aboutRef}
        className="w-full"
        style={{
          contentVisibility: "auto",
          containIntrinsicSize: "1000px",
        }}
      >
        <About />
      </section>

      <section
        id="skills"
        ref={skillsRef}
        className="w-full"
        style={{
          contentVisibility: "auto",
          containIntrinsicSize: "1000px",
        }}
      >
        <Skills />
      </section>

      <section
        id="projects"
        ref={projectsRef}
        className="w-full"
        style={{
          contentVisibility: "auto",
          containIntrinsicSize: "1000px",
        }}
      >
        <Projects />
      </section>

      <section
        id="contact"
        ref={contactRef}
        className="w-full"
        style={{
          contentVisibility: "auto",
          containIntrinsicSize: "1000px",
        }}
      >
        <Contact />
      </section>

      <Footer />
    </main>
  );
}
