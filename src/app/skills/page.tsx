"use client"
import { Progress } from "@/components/ui/progress"

export default function Skills() {
  const skills = [
    { name: "Python", value: 85 },
    { name: "SciKit-Learn", value: 75 },
    { name: "Computer-Vision", value: 70 },
    { name: "HTML", value: 70 },
    { name: "C", value: 70 },
    { name: "CSS", value: 60 },
  ]

  const languages = [
    { name: "Indonesia", value: 100, label: "Mother Language" },
    { name: "Germany", value: 85, label: "B2 Certified" },
    { name: "English", value: 70, label: "Intermediate" },
  ]

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold">Skills</h2>
      <div className="space-y-4">
        {skills.map((skill) => (
          <div key={skill.name}>
            <div className="flex justify-between mb-1">
              <span>{skill.name}</span>
              <span>{skill.value}%</span>
            </div>
            <Progress value={skill.value} className="w-full" />
          </div>
        ))}
      </div>

      <h2 className="text-3xl font-bold mt-8">Languages</h2>
      <div className="space-y-4">
        {languages.map((lang) => (
          <div key={lang.name}>
            <div className="flex justify-between mb-1">
              <span>{lang.name}</span>
              <span>{lang.label}</span>
            </div>
            <Progress value={lang.value} className="w-full" />
          </div>
        ))}
      </div>
    </div>
  )
}

