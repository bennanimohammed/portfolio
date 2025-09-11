"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Award, ExternalLink, Calendar, CheckCircle, ChevronLeft, ChevronRight } from "lucide-react"
import { useState } from "react"

export function Certificates() {
  const certificates = [
    {
      title: "Introduction to Cloud Computing",
      provider: "Coursera",
      category: "Cloud Computing",
      year: "2024",
      verified: true,
      link: "https://www.coursera.org/account/accomplishments/records/GM3U3NNTSXG7",
      featured: true,
    },
    {
      title: "Introduction to Cybersecurity Tools & Cybersecurity Attacks",
      provider: "Coursera",
      category: "Cybersecurity",
      year: "2024",
      verified: true,
      link: "https://www.coursera.org/account/accomplishments/records/ACWUX5VBXJ4Y",
    },
    {
      title: "Docker",
      provider: "Coursera",
      category: "DevOps",
      year: "2023",
      verified: true,
      link: "https://www.coursera.org/account/accomplishments/records/10KM5R541H2B",
    },
    {
      title: "Interactivity with Javascript",
      provider: "Coursera",
      category: "Web Development",
      year: "2023",
      verified: true,
      link: "https://www.coursera.org/account/accomplishments/records/AT63D8NPCFC8",
    },
    {
      title: "Introduction to CSS3",
      provider: "Coursera",
      category: "Web Development",
      year: "2023",
      verified: true,
      link: "https://www.coursera.org/account/accomplishments/records/JUBR6FR3CMHC",
    },
    {
      title: "Introduction to HTML5",
      provider: "Coursera",
      category: "Web Development",
      year: "2023",
      verified: true,
      link: "https://www.coursera.org/account/accomplishments/records/4XAD2PT72LPE",
    },
    {
      title: "Advanced React",
      provider: "Coursera",
      category: "Frontend Development",
      year: "2024",
      verified: true,
      link: "https://www.coursera.org/account/accomplishments/records/73R3QUJLVSBP",
      featured: true,
    },
    {
      title: "Build a Full Stack App using React and Express",
      provider: "Coursera",
      category: "Frontend Development",
      year: "2023",
      verified: true,
      link: "https://www.coursera.org/account/accomplishments/records/TG9ZFZJG4QY6",
    },
    {
      title: "Introduction to DevOps",
      provider: "Coursera",
      category: "DevOps",
      year: "2023",
      verified: true,
      link: "https://www.coursera.org/account/accomplishments/records/QDJWWNHEWPHL",
    },
    {
      title: "NestJS",
      provider: "Coursera",
      category: "Backend Development",
      year: "2024",
      verified: true,
      link: "https://www.coursera.org/account/accomplishments/records/UN25MXYFB276",
    },
    {
      title: "Python",
      provider: "Coursera",
      category: "Programming",
      year: "2023",
      verified: true,
      link: "https://www.coursera.org/account/accomplishments/records/89KJJM9LG7WN",
    },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)
  const itemsPerView = 3
  const maxIndex = Math.max(0, certificates.length - itemsPerView)

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1))
  }

  return (
    <section id="certificates" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Professional Certifications</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Industry-recognized certifications demonstrating expertise across modern technologies
          </p>
        </div>

        <div className="relative">
          {/* Navigation buttons */}
          <Button
            variant="outline"
            size="icon"
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-background shadow-lg"
            onClick={prevSlide}
            disabled={certificates.length <= itemsPerView}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>

          <Button
            variant="outline"
            size="icon"
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-background shadow-lg"
            onClick={nextSlide}
            disabled={certificates.length <= itemsPerView}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>

          <div className="overflow-hidden mx-12">
            <div
              className="flex transition-transform duration-300 ease-in-out gap-6"
              style={{ transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)` }}
            >
              {certificates.map((cert, index) => (
                <div key={index} className="flex-shrink-0 w-1/3">
                  <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div className="p-2 rounded-lg bg-primary/10">
                          <Award className="h-5 w-5 text-primary" />
                        </div>
                        {cert.verified && (
                          <div className="flex items-center gap-1 text-green-600 text-xs">
                            <CheckCircle className="h-3 w-3" />
                            Verified
                          </div>
                        )}
                      </div>

                      <h3 className="font-semibold text-sm mb-3 line-clamp-2 leading-tight">{cert.title}</h3>

                      <div className="space-y-2 mb-4">
                        <p className="text-sm text-muted-foreground">{cert.provider}</p>
                        <div className="flex items-center justify-between">
                          <Badge variant="secondary" className="text-xs">
                            {cert.category}
                          </Badge>
                          <div className="flex items-center gap-1 text-xs text-muted-foreground">
                            <Calendar className="h-3 w-3" />
                            {cert.year}
                          </div>
                        </div>
                      </div>

                      {cert.link && (
                        <Button variant="ghost" size="sm" className="w-full" asChild>
                          <a href={cert.link} target="_blank" rel="noopener noreferrer">
                            View Certificate
                            <ExternalLink className="ml-2 h-3 w-3" />
                          </a>
                        </Button>
                      )}
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-8 gap-2">
          {Array.from({ length: maxIndex + 1 }).map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full transition-colors ${index === currentIndex ? "bg-primary" : "bg-muted"}`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-4 bg-muted/50 rounded-lg p-4">
            <Award className="h-6 w-6 text-primary" />
            <div>
              <p className="font-semibold">{certificates.length} Certificates</p>
              <p className="text-sm text-muted-foreground">All verified by Coursera</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
