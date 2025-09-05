"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin } from "lucide-react"
import { useIntersectionObserver } from "@/hooks/use-intersection-observer"
import { cn } from "@/lib/utils"
import { ProjectCarousel } from "./project-carousel"

interface Video {
  src: string
  alt: string
  type: "video"
}

interface Project {
  title: string
  description: string
  videos: Video[]
  technologies: string[]
  githubUrl: string
  liveUrl?: string
}

interface ExperienceType {
  title: string
  company: string
  location: string
  period: string
  description: string
  skills: string[]
  project: Project
}

function ExperienceCard({ exp, index }: { exp: ExperienceType; index: number }) {
  const { ref, hasIntersected } = useIntersectionObserver({
    threshold: 0.2,
    rootMargin: "-50px",
  })

  return (
    <Card
      ref={ref}
      className={cn(
        "hover:shadow-lg transition-all duration-700 ease-out",
        !hasIntersected && "translate-y-8 opacity-0",
        hasIntersected && "translate-y-0 opacity-100"
      )}
      style={{
        transitionDelay: hasIntersected ? `${index * 100}ms` : "0ms",
      }}
    >
      <CardHeader>
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <CardTitle className="text-xl text-purple-600 font-bold">{exp.title}</CardTitle>
            <p className="text-lg font-medium text-foreground">{exp.company}</p>
          </div>
          <div className="flex flex-col sm:items-end gap-2">
            <div className="flex items-center text-sm text-muted-foreground">
              <Calendar className="mr-1 h-4 w-4" />
              {exp.period}
            </div>
            <div className="flex items-center text-sm text-muted-foreground">
              <MapPin className="mr-1 h-4 w-4" />
              {exp.location}
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="mb-6">
          <ProjectCarousel project={exp.project} />
        </div>
        <p className="text-muted-foreground mb-4 leading-relaxed">{exp.description}</p>
        <div className="flex flex-wrap gap-2">
          {exp.skills.map((skill, skillIndex) => (
            <Badge
              key={skillIndex}
              variant="secondary"
              className={cn(
                "text-xs transition-all duration-500 ease-out hover:scale-105",
                !hasIntersected && "translate-y-2 opacity-0",
                hasIntersected && "translate-y-0 opacity-100"
              )}
              style={{
                transitionDelay: hasIntersected ? `${index * 100 + skillIndex * 50}ms` : "0ms",
              }}
            >
              {skill}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

export function Experience() {
  const experiences: ExperienceType[] = [
    {
      title: "Full-Stack Engineer",
      company: "Apexiom",
      location: "Hattingen, Allemagne",
      period: "June 2025 – September 2025",
      description: "",
      skills: [],
      project: {
        title: "Handwork Services Management Platform",
        description:
          "A web application where clients can browse and request professional services including plumbing, heating, bathroom renovation, climate control, emergency response, and sustainable energy solutions. Each service is integrated with dynamic forms to streamline client requests and improve service delivery.",
        videos: [
          { src: "/videos/handworkk.mp4", alt: "Handwork services management platform demo", type: "video" },
        ],
        technologies: ["React", "TypeScript", "Tailwind CSS", "Spring Boot", "Docker"],
        githubUrl: "#",
        liveUrl: "https://shkwebsite.netlify.app/",
      },
    },
    {
      title: "IT Engineer",
      company: "Safi Vert Nettoyage",
      location: "Safi, Morocco",
      period: "December 2024 – June 2025",
      description: "",
      skills: [],
      project: {
        title: "Logistics Management System",
        description: "Development of internal applications for logistics management and optimization of temporary staff assignment processes",
        videos: [
          { src: "/videos/svn.mp4", alt: "Logistics management system demo", type: "video" },
        ],
        technologies: ["React", "Node.js", "PostgreSQL", "Docker"],
        githubUrl: "#",
        liveUrl: "#",
      },
    },
    {
      title: "Freelance Full-Stack Developer",
      company: "Independent",
      location: "Valenciennes, France",
      period: "November 2024 – March 2025",
      description: "",
      skills: [],
      project: {
        title: "Automotive Garage Management",
        description: "Developed a comprehensive automotive maintenance garage system with role-based authentication and automated quotation generation.",
        videos: [
          { src: "/videos/kh-autosolutions.mp4", alt: "Automotive garage system demo", type: "video" },
        ],
        technologies: ["Next.js", "NestJS", "MongoDB", "Tailwind CSS"],
        githubUrl: "#",
      },
    },
    {
      title: "Full Stack Engineer Intern",
      company: "Harmony Technology",
      location: "Remote",
      period: "March 2024 – September 2024",
      description: "",
      skills: [],
      project: {
        title: "Hospital Navigation System",
        description: "Designed and developed a digital navigation system for hospitals with IoT integration for precise indoor localization.",
        videos: [
          { src: "/videos/hospyy.mp4", alt: "Hospital navigation system demo", type: "video" },
        ],
        technologies: ["React", "NestJS", "Docker", "IoT"],
        githubUrl: "#",
      },
    },
  ]

  return (
    <section id="experience" className="py-20 bg-muted/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-5xl font-bold text-balance mb-4 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
            Professional Experience
          </h2>
          <p className="text-lg text-muted-foreground text-balance max-w-2xl mx-auto">
            A journey through innovative projects and technical challenges
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <ExperienceCard key={index} exp={exp} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
