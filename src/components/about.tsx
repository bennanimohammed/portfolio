"use client"

import { Card, CardContent } from "@/components/ui/card"
import { AnimatedSection } from "./animated-section"
import { Mail, Phone, MapPin, Calendar, Globe, Code } from "lucide-react"

export function About() {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-background via-background to-muted/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-5xl font-bold text-balance mb-4 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              About Me
            </h2>
            <p className="text-xl text-muted-foreground text-balance max-w-3xl mx-auto leading-relaxed">
              Passionate Full-Stack Engineer crafting innovative digital solutions with modern technologies.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid lg:grid-cols-3 gap-8">
          <AnimatedSection className="lg:col-span-2">
            <Card className="border-0 shadow-xl bg-gradient-to-br from-card to-card/80 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                    <Code className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-foreground">Mohammed Bennani</h3>
                    <p className="text-accent font-medium">Full-Stack Engineer</p>
                  </div>
                </div>

                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Experienced Full-Stack Engineer with a passion for developing innovative solutions and creating
                    exceptional user experiences.
                  </p>
                  <p>
                    Currently working as a freelance developer, applying expertise in modern web technologies to build
                    scalable and efficient applications.
                  </p>
                  <p>
                    My technical journey spans from advanced React front-end development to robust back-end systems with
                    NestJS, Python, and comprehensive database management.
                  </p>
                  <p>
                    I thrive on transforming complex requirements into elegant, user-friendly solutions.
                  </p>
                  <p>
                    With experience across various industries including healthcare, automotive, and logistics, I bring a
                    unique perspective to every project, ensuring both technical excellence and business value delivery.
                  </p>
                </div>
              </CardContent>
            </Card>
          </AnimatedSection>

          <div className="space-y-6">
            <AnimatedSection>
              <Card className="border-0 shadow-lg bg-gradient-to-br from-card to-card/80 backdrop-blur-sm">
                <CardContent className="p-6">
                  <h4 className="font-bold text-lg mb-4 text-primary flex items-center gap-2">
                    <Mail className="w-5 h-5" />
                    Contact Information
                  </h4>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 text-sm">
                      <Phone className="w-4 h-4 text-accent" />
                      <span>+212 0700 191 027</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm">
                      <Mail className="w-4 h-4 text-accent" />
                      <span>mbennani437@gmail.com</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm">
                      <MapPin className="w-4 h-4 text-accent" />
                      <span>Hassan, Rabat</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm">
                      <Calendar className="w-4 h-4 text-accent" />
                      <span>31/05/1995</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>

            <AnimatedSection>
              <Card className="border-0 shadow-lg bg-gradient-to-br from-card to-card/80 backdrop-blur-sm">
                <CardContent className="p-6">
                  <h4 className="font-bold text-lg mb-4 text-primary flex items-center gap-2">
                    <Globe className="w-5 h-5" />
                    Languages
                  </h4>
                  <div className="space-y-3">
                    {[
                      { lang: "Arabic", level: "Advanced" },
                      { lang: "English", level: "Advanced" },
                      { lang: "French", level: "Advanced" },
                    ].map((item, index) => (
                      <div key={index} className="flex justify-between items-center">
                        <span className="font-medium">{item.lang}</span>
                        <span className="px-2 py-1 bg-accent/20 text-accent rounded-full text-xs font-medium">
                          {item.level}
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  )
}
