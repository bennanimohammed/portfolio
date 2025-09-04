import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Experience } from "@/components/experience"
import { Skills } from "@/components/skills"
import { Education } from "@/components/education"
import { Certificates } from "@/components/certificates"
import { Contact } from "@/components/contact"
import { Navigation } from "@/components/navigation"
import { AnimatedSection } from "@/components/animated-section"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <Hero />

      <AnimatedSection delay={100}>
        <About />
      </AnimatedSection>

      <AnimatedSection delay={200} animation="slide-left">
        <Experience />
      </AnimatedSection>

      <AnimatedSection delay={150}>
        <Skills />
      </AnimatedSection>

      <AnimatedSection delay={100} animation="slide-right">
        <Education />
      </AnimatedSection>

      <AnimatedSection delay={200}>
        <Certificates />
      </AnimatedSection>

      <AnimatedSection delay={100} animation="fade-in">
        <Contact />
      </AnimatedSection>
    </main>
  )
}
