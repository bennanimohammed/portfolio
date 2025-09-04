import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"

export function Skills() {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: [
        { name: "JavaScript/TypeScript", level: 90 },
        { name: "Python", level: 85 },
        { name: "Java", level: 75 },
        { name: "C/C++", level: 70 },
      ],
    },
    {
      title: "Web Development",
      skills: [
        { name: "React/Next.js", level: 95 },
        { name: "Node.js/NestJS", level: 90 },
        { name: "HTML5/CSS3", level: 95 },
        { name: "ASP.NET", level: 70 },
      ],
    },
    {
      title: "Databases",
      skills: [
        { name: "MongoDB", level: 85 },
        { name: "MySQL", level: 80 },
        { name: "Oracle", level: 75 },
        { name: "Microsoft SQL", level: 70 },
      ],
    },
    {
      title: "DevOps & Tools",
      skills: [
        { name: "Docker", level: 85 },
        { name: "Git/GitHub", level: 90 },
        { name: "Azure DevOps", level: 80 },
        { name: "Linux/Ubuntu", level: 85 },
      ],
    },
  ]

  const softSkills = [
    "Adaptability to projects and technologies",
    "Strong analytical skills and responsiveness",
    "Teamwork",
    "Web development and web design",
    "Affinity for coding",
  ]

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-5xl font-bold bg-gradient-to-r from-purple-600 via-violet-600 to-indigo-600 bg-clip-text text-transparent mb-4">Technical Skills</h2>
          <p className="text-lg text-muted-foreground text-balance max-w-2xl mx-auto">
            Expertise across the full technology stack
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {skillCategories.map((category, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="text-xl text-primary">{category.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="text-xl text-primary">Soft Skills</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-3">
              {softSkills.map((skill, index) => (
                <Badge key={index} variant="outline" className="text-sm py-2 px-4">
                  {skill}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
