import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, GraduationCap, MapPin } from "lucide-react"

export function Education() {
  const education = [
    {
      degree: "State Engineer in Computer Science and Networks",
      specialization: "MIAGE",
      institution: "École Marocaine des Sciences de l'Ingénieur",
      location: "Rabat",
      period: "2021 - 2024",
      type: "Engineering Degree",
    },
    {
      degree: "1337 Coding School",
      institution: "1337 School",
      location: "Khouribga",
      period: "2018 - 2020",
      type: "Coding Bootcamp",
    },
    {
      degree: "Self-learning and Freelance Activities",
      institution: "Independent Study",
      location: "Remote",
      period: "2015 - 2018",
      type: "Professional Development",
      description:
        "Exploration of programming fundamentals and web technologies through online training and independent projects, with occasional freelance missions",
    },
    {
      degree: "First Year Bachelor's in Mathematical and Computer Sciences",
      institution: "Université Mohammed V, Faculté Des Sciences",
      location: "Rabat",
      period: "2014 - 2015",
      type: "University",
    },
    {
      degree: "Mathematics Baccalaureate (Sciences Mathématiques B)",
      institution: "Lycée Al Idrissi",
      location: "Safi",
      period: "2013 - 2014",
      type: "High School",
    },
  ]

  return (
    <section id="education" className="py-20 bg-muted/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16"> 
          <h2 className="text-3xl sm:text-5xl font-bold text-balance mb-4 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">Education & Training</h2>
          <p className="text-lg text-muted-foreground text-balance max-w-2xl mx-auto">
            Academic foundation and continuous learning journey
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border hidden md:block"></div>

          <div className="space-y-8">
            {education.map((edu, index) => (
              <div key={index} className="relative">
                {/* Timeline dot */}
                <div className="absolute left-6 w-4 h-4 bg-primary rounded-full border-4 border-background hidden md:block"></div>

                <Card className="md:ml-16 hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                      <div className="flex-1">
                        <CardTitle className="text-xl text-primary mb-2">{edu.degree}</CardTitle>
                        {edu.specialization && (
                          <p className="text-sm text-accent font-medium mb-1">Specialization: {edu.specialization}</p>
                        )}
                        <p className="text-lg font-medium text-foreground">{edu.institution}</p>
                      </div>
                      <div className="flex flex-col sm:items-end gap-2">
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Calendar className="mr-1 h-4 w-4" />
                          {edu.period}
                        </div>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <MapPin className="mr-1 h-4 w-4" />
                          {edu.location}
                        </div>
                        <div className="flex items-center text-sm text-primary">
                          <GraduationCap className="mr-1 h-4 w-4" />
                          {edu.type}
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  {edu.description && (
                    <CardContent>
                      <p className="text-muted-foreground leading-relaxed">{edu.description}</p>
                    </CardContent>
                  )}
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
