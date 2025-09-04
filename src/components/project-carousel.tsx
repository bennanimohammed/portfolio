"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, ExternalLink, Github, Play, Pause } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

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
    const video = document.getElementById(`video-${currentVideoIndex}`) as HTMLVideoElement
    if (video) {
      if (isPlaying) {
        video.pause()
      } else {
        video.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  return (
    <div className="bg-card rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group">
      {/* Video/Image Carousel */}
      <div className="relative h-64 overflow-hidden bg-muted">
        {project.videos[currentVideoIndex].type === "video" ? (
          <video
            id={`video-${currentVideoIndex}`}
            src={project.videos[currentVideoIndex].src}
            className="w-full h-full object-cover"
            muted
            loop
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
          />
        ) : (
          <img
            src={project.videos[currentVideoIndex].src || "/placeholder.svg"}
            alt={project.videos[currentVideoIndex].alt}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        )}

        {/* Play/Pause Button for Videos */}
        {project.videos[currentVideoIndex].type === "video" && (
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-background/80 hover:bg-background/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            onClick={togglePlay}
          >
            {isPlaying ? <Pause className="h-6 w-6" /> : <Play className="h-6 w-6" />}
          </Button>
        )}

        {/* Navigation Arrows */}
        {project.videos.length > 1 && (
          <>
            <Button
              variant="ghost"
              size="icon"
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              onClick={prevVideo}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              onClick={nextVideo}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </>
        )}

        {/* Video/Image Indicators */}
        {project.videos.length > 1 && (
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {project.videos.map((video, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentVideoIndex ? "bg-accent scale-125" : "bg-background/60 hover:bg-background/80"
                }`}
                onClick={() => {
                  setCurrentVideoIndex(index)
                  setIsPlaying(false)
                }}
              />
            ))}
          </div>
        )}

        {/* Video Type Indicator */}
        <div className="absolute top-4 right-4">
          <Badge variant="secondary" className="text-xs bg-background/80">
            {project.videos[currentVideoIndex].type === "video" ? "Video" : "Image"}
          </Badge>
        </div>
      </div>

      {/* Project Content */}
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
