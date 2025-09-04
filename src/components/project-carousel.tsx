"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, ExternalLink, Github, Play, Pause } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

interface ProjectVideo {
  src: string
  alt: string
  type: "video" | "image"
}

interface Project {
  title: string
  description: string
  videos: ProjectVideo[]
  technologies: string[]
  githubUrl?: string
  liveUrl?: string
}

interface ProjectCarouselProps {
  project: Project
}

export function ProjectCarousel({ project }: ProjectCarouselProps) {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)

  const nextVideo = () => {
    setCurrentVideoIndex((prev) => (prev === project.videos.length - 1 ? 0 : prev + 1))
    setIsPlaying(false)
  }

  const prevVideo = () => {
    setCurrentVideoIndex((prev) => (prev === 0 ? project.videos.length - 1 : prev - 1))
    setIsPlaying(false)
  }

  const togglePlay = () => {
    const video = document.getElementById(`video-${currentVideoIndex}`) as HTMLVideoElement | null
    if (video) {
      if (isPlaying) video.pause()
      else video.play()
      setIsPlaying(!isPlaying)
    }
  }

  const current = project.videos[currentVideoIndex]

  return (
    <div className="bg-card rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group">
      <div className="relative h-64 overflow-hidden bg-muted">
        {current.type === "video" ? (
          <video
            id={`video-${currentVideoIndex}`}
            src={current.src}
            className="w-full h-full object-cover"
            muted
            loop
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
          />
        ) : (
          <Image
            src={current.src || "/placeholder.svg"}
            alt={current.alt}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        )}

        {current.type === "video" && (
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-background/80 hover:bg-background/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            onClick={togglePlay}
            aria-label={isPlaying ? "Pause video" : "Play video"}
          >
            {isPlaying ? <Pause className="h-6 w-6" /> : <Play className="h-6 w-6" />}
          </Button>
        )}

        {project.videos.length > 1 && (
          <>
            <Button
              variant="ghost"
              size="icon"
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              onClick={prevVideo}
              aria-label="Previous video"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              onClick={nextVideo}
              aria-label="Next video"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>

            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              {project.videos.map((_, index) => (
                <button
                  key={index}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentVideoIndex
                      ? "bg-accent scale-125"
                      : "bg-background/60 hover:bg-background/80"
                  }`}
                  onClick={() => {
                    setCurrentVideoIndex(index)
                    setIsPlaying(false)
                  }}
                  aria-label={`Go to ${index + 1} slide`}
                />
              ))}
            </div>
          </>
        )}

        <div className="absolute top-4 right-4">
          <Badge variant="secondary" className="text-xs bg-background/80">
            {current.type === "video" ? "Video" : "Image"}
          </Badge>
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-xl font-semibold text-accent group-hover:text-accent/80 transition-colors">
            {project.title}
          </h3>
          <div className="flex gap-2">
            {project.githubUrl && (
              <Button variant="ghost" size="icon" className="h-8 w-8" asChild>
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                  <Github className="h-4 w-4" />
                </a>
              </Button>
            )}
            {project.liveUrl && (
              <Button variant="ghost" size="icon" className="h-8 w-8" asChild>
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="h-4 w-4" />
                </a>
              </Button>
            )}
          </div>
        </div>

        <p className="text-muted-foreground mb-4 leading-relaxed">{project.description}</p>

        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech, index) => (
            <Badge
              key={index}
              variant="secondary"
              className="text-xs hover:bg-accent hover:text-accent-foreground transition-colors cursor-default"
            >
              {tech}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  )
}
