import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code2, Globe, Database, Settings, Zap, Users, Target, Lightbulb, Heart } from "lucide-react"

export function Skills() {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code2,
      skills: [
        { name: "JavaScript/TypeScript", icon: "⚡" },
        { name: "Python", icon: "🐍" },
        { name: "Java", icon: "☕" },
        { name: "C/C++", icon: "⚙️" },
      ],
    },
    {
      title: "Web Development",
      icon: Globe,
      skills: [
        { name: "React/Next.js", icon: "⚛️" },
        { name: "Node.js/NestJS", icon: "🟢" },
        { name: "HTML5/CSS3", icon: "🎨" },
        { name: "ASP.NET", icon: "🔷" },
      ],
    },
    {
      title: "Databases",
      icon: Database,
      skills: [
        { name: "MongoDB", icon: "🍃" },
        { name: "MySQL", icon: "🐬" },
        { name: "Oracle", icon: "🔴" },
        { name: "Microsoft SQL", icon: "📊" },
      ],
    },
    {
      title: "DevOps & Tools",
      icon: Settings,
      skills: [
        { name: "Docker", icon: "🐳" },
        { name: "Git/GitHub", icon: "🐙" },
        { name: "Azure DevOps", icon: "☁️" },
        { name: "Linux/Ubuntu", icon: "🐧" },
      ],
    },
  ]

  const softSkills = [
    { name: "Adaptability", icon: Zap },
    { name: "Analytical Skills", icon: Target },
    { name: "Teamwork", icon: Users },
    { name: "Web Design", icon: Lightbulb },
    { name: "Coding Passion", icon: Heart },
  ]

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-5xl font-bold bg-gradient-to-r from-purple-600 via-violet-600 to-indigo-600 bg-clip-text text-transparent mb-4">
            Technical Skills
          </h2>
          <p className="text-lg text-muted-foreground text-balance max-w-2xl mx-auto">
            Expertise across the full technology stack
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {skillCategories.map((category, index) => {
            const CategoryIcon = category.icon
            return (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl text-primary flex items-center gap-3">
                    <CategoryIcon className="w-6 h-6" />
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4">
                    {category.skills.map((skill, skillIndex) => (
                      <div
                        key={skillIndex}
                        className="flex items-center gap-3 p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors"
                      >
                        <span className="text-2xl">{skill.icon}</span>
                        <span className="font-medium text-sm">{skill.name}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="text-xl text-primary">Soft Skills</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-3">
              {softSkills.map((skill, index) => {
                const SkillIcon = skill.icon
                return (
                  <Badge key={index} variant="outline" className="text-sm py-2 px-4 flex items-center gap-2">
                    <SkillIcon className="w-4 h-4" />
                    {skill.name}
                  </Badge>
                )
              })}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
