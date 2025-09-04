import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Award, ExternalLink, Calendar, CheckCircle } from "lucide-react"
import { AnimatedSection } from "./animated-section"

export function Certificates() {
  const certificates = [
    {
      title: "Introduction to Cloud Computing",
      provider: "Coursera",
      category: "Cloud Computing",
      year: "2024",
      verified: true,
    },
    {
      title: "Introduction to Cybersecurity Tools & Cybersecurity Attacks",
      provider: "Coursera",
      category: "Cybersecurity",
      year: "2024",
      verified: true,
    },
    {
      title: "Docker",
      provider: "Coursera",
      category: "DevOps",
      year: "2023",
      verified: true,
    },
    {
      title: "Interactivity with Javascript",
      provider: "Coursera",
      category: "Web Development",
      year: "2023",
      verified: true,
    },
    {
      title: "Introduction to CSS3",
      provider: "Coursera",
      category: "Web Development",
      year: "2023",
      verified: true,
    },
    {
      title: "Introduction to HTML5",
      provider: "Coursera",
      category: "Web Development",
      year: "2023",
      verified: true,
    },
    {
      title: "Advanced React",
      provider: "Coursera",
      category: "Frontend Development",
      year: "2024",
      verified: true,
    },
    {
      title: "React.js",
      provider: "Coursera",
      category: "Frontend Development",
      year: "2023",
      verified: true,
    },
    {
      title: "Introduction to DevOps",
      provider: "Coursera",
      category: "DevOps",
      year: "2023",
      verified: true,
    },
    {
      title: "NestJS",
      provider: "Coursera",
      category: "Backend Development",
      year: "2024",
      verified: true,
    },
    {
      title: "Python",
      provider: "Coursera",
      category: "Programming",
      year: "2023",
      verified: true,
    },
  ]

  const categories = [...new Set(certificates.map((cert) => cert.category))]

  return (
    <section id="certificates" className="py-20 bg-gradient-to-br from-background via-background to-purple-50/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-5xl font-bold bg-gradient-to-r from-purple-600 via-violet-600 to-indigo-600 bg-clip-text text-transparent mb-4">
              Certificates & Training
            </h2>
            <p className="text-xl text-muted-foreground text-balance max-w-3xl mx-auto leading-relaxed">
              Continuous learning and professional development through industry-recognized certifications
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div className="mb-12">
            <div className="flex flex-wrap gap-3 justify-center">
              {categories.map((category, index) => (
                <Badge
                  key={index}
                  variant="outline"
                  className="text-sm px-4 py-2 border-purple-200 text-purple-700 hover:bg-purple-50 hover:border-purple-300 transition-all duration-300 cursor-pointer"
                >
                  {category}
                </Badge>
              ))}
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.4}>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certificates.map((cert, index) => (
              <Card
                key={index}
                className="group hover:shadow-2xl hover:shadow-purple-100/50 transition-all duration-500 hover:-translate-y-2 border-0 bg-white/80 backdrop-blur-sm overflow-hidden relative"
              >
                <div
                  className="absolute inset-0 bg-gradient-to-r from-purple-500 via-violet-500 to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"
                  style={{ padding: "1px" }}
                >
                  <div className="bg-white rounded-lg h-full w-full"></div>
                </div>

                <div className="relative z-10">
                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between mb-3">
                      <div className="p-2 rounded-lg bg-gradient-to-br from-purple-100 to-violet-100 group-hover:from-purple-200 group-hover:to-violet-200 transition-all duration-300">
                        <Award className="h-6 w-6 text-purple-600" />
                      </div>
                      <div className="flex items-center gap-2">
                        {cert.verified && <CheckCircle className="h-4 w-4 text-green-500" />}
                        <ExternalLink className="h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-all duration-300 hover:text-purple-600" />
                      </div>
                    </div>
                    <CardTitle className="text-lg leading-tight text-balance group-hover:text-purple-700 transition-colors duration-300">
                      {cert.title}
                    </CardTitle>
                  </CardHeader>

                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <p className="text-sm font-medium text-gray-600">{cert.provider}</p>
                        <div className="flex items-center gap-1 text-xs text-muted-foreground">
                          <Calendar className="h-3 w-3" />
                          {cert.year}
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <Badge
                          variant="secondary"
                          className="text-xs bg-gradient-to-r from-purple-100 to-violet-100 text-purple-700 border-purple-200 hover:from-purple-200 hover:to-violet-200 transition-all duration-300"
                        >
                          {cert.category}
                        </Badge>
                        {cert.verified && (
                          <span className="text-xs text-green-600 font-medium flex items-center gap-1">
                            <CheckCircle className="h-3 w-3" />
                            Verified
                          </span>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.6}>
          <div className="text-center mt-16">
            <Card className="inline-block border-0 bg-gradient-to-br from-purple-50 to-violet-50 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-full bg-gradient-to-br from-purple-500 to-violet-500">
                    <Award className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-left">
                    <p className="font-bold text-2xl text-purple-700">{certificates.length} Certificates</p>
                    <p className="text-sm text-purple-600 font-medium">Completed from Coursera Platform</p>
                    <p className="text-xs text-muted-foreground mt-1">
                      All certificates are verified and industry-recognized
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
