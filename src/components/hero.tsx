"use client"

import { Button } from "@/components/ui/button"
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react"
import { useEffect, useState, useRef } from "react"
import { ParticleCursor } from "./particle-cursor"

export function Hero() {
  const [isLoaded, setIsLoaded] = useState(false)
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about")
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" })
    }
  }
  const scrollToContact = () => {
  const contactSection = document.getElementById("contact")
  if (contactSection) {
    contactSection.scrollIntoView({ behavior: "smooth" })
  }
}


  return (
    <section
      ref={heroRef}
      id="hero"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-muted overflow-hidden relative"
    >
      <ParticleCursor containerRef={heroRef} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-20">
        <div
          className={`mb-8 transition-all duration-1000 ease-out ${
            isLoaded ? "translate-y-0 opacity-100 scale-100" : "translate-y-8 opacity-0 scale-95"
          }`}
        >
          <img
            src="/me.jpeg"
            alt="Mohammed Bennani"
            className="w-48 h-48 rounded-full mx-auto mb-8 border-4 border-primary shadow-lg hover:scale-105 transition-transform duration-300"
          />
        </div>

        <h1
          className={`text-4xl sm:text-6xl font-bold text-balance mb-6 transition-all duration-1000 ease-out ${
            isLoaded ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
          style={{ transitionDelay: "200ms" }}
        >
          <span className="text-foreground">Hi, I'm </span>
          <span className="text-primary bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">
            Mohammed Bennani
          </span>
        </h1>

        <p
          className={`text-xl sm:text-2xl text-muted-foreground text-balance mb-8 max-w-3xl mx-auto transition-all duration-1000 ease-out ${
            isLoaded ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
          style={{ transitionDelay: "400ms" }}
        >
          Full-Stack Engineer passionate about developing innovative solutions and creating exceptional user experiences
        </p>

        <div
          className={`flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 transition-all duration-1000 ease-out ${
            isLoaded ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
          style={{ transitionDelay: "600ms" }}
        >
          <Button size="lg" className="bg-primary hover:bg-primary/90 hover:scale-105 transition-all duration-200" onClick={scrollToContact}>

            <Mail className="mr-2 h-5 w-5" />
            Get In Touch
          </Button>
          <div className="flex gap-4">
           <a
                href="https://github.com/BennaniMohammed"
                target="_blank"
                rel="noopener noreferrer"
              >
          <Button
                variant="outline"
                size="lg"
                className="hover:scale-105 transition-all duration-200 bg-transparent"
          >
                <Github className="mr-2 h-5 w-5" />
                    GitHub
          </Button>
          </a>

            <a
  href="https://www.linkedin.com/in/bennani-mohammed/"
  target="_blank"
  rel="noopener noreferrer"
>
  <Button
    variant="outline"
    size="lg"
    className="hover:scale-105 transition-all duration-200 bg-transparent"
  >
    <Linkedin className="mr-2 h-5 w-5" />
    LinkedIn
  </Button>
</a>

          </div>
        </div>

        <div
          className={`transition-all duration-1000 ease-out ${
            isLoaded ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
          style={{ transitionDelay: "800ms" }}
        >
          <Button
            variant="ghost"
            onClick={scrollToAbout}
            className="animate-bounce hover:scale-110 transition-transform duration-200"
          >
            <ArrowDown className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </section>
  )
}
