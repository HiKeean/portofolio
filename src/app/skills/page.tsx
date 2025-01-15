'use client'

import { JSX, useEffect, useState } from 'react'
import { Progress } from "@/components/ui/progress"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import { FaPhp, FaHtml5, FaJs, FaCss3Alt, FaDatabase, FaReact, FaAngular, FaJava, FaNodeJs, FaFigma, FaTruckLoading } from 'react-icons/fa'
import { SiNextdotjs, SiPython, SiScikitlearn } from 'react-icons/si'
import { GiBrain, GiEyeTarget } from 'react-icons/gi'
import { VscSymbolNamespace } from 'react-icons/vsc'
import Link from 'next/link'
import { fetchDataApi } from '@/services/apiServices'
import { useRouter } from 'next/navigation'

type ApiSkill = {
  name: string
  competence: number
  icon: string
  projects: { name: string }[]
}

type Skill = {
  name: string
  value: number
  icon: JSX.Element
  projects: { 
    id: number,
    name: string 
  }[]
}

type Language = {
  name: string
  value: number
  label: string
  icon: string
}



const languages: Language[] = [
  { name: "Indonesia", value: 100, label: "Mother Language", icon: "🇮🇩" },
  { name: "Germany", value: 85, label: "B2 Certified", icon: "🇩🇪" },
  { name: "English", value: 70, label: "Intermediate", icon: "🇬🇧" },
]

const FlipCard = ({ item, isLanguage = false }: { item: Skill | Language; isLanguage?: boolean }) => {
  const [isFlipped, setIsFlipped] = useState(false)

  const handleFlip = () => {
    if (!isLanguage) {
      setIsFlipped(!isFlipped)
    }
  }

  function handleproject(id: number) {
    const data = {
      id:id
    }
    try {
      sessionStorage.setItem('jangandibuka', JSON.stringify(data))
      window.location.href = '/portfolio';
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <motion.div
      className="mb-4 cursor-pointer perspective"
      onClick={handleFlip}
      initial={false}
      animate={{ rotateY: isFlipped ? 180 : 0 }}
      transition={{ duration: 0.6, type: "spring", stiffness: 300, damping: 20 }}
      style={{ transformStyle: "preserve-3d" }}
      aria-placeholder='click to see projects'
    >
      <Card className="w-full h-full">
        <CardContent className="pt-6 backface-hidden">
          {!isFlipped ? (
            // Front of the card
            <div>
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center space-x-2">
                  <span className="text-2xl">{item.icon}</span>
                  <span className="font-semibold">{item.name}</span>
                </div>
                {isLanguage ? (
                  <Badge variant="secondary">{(item as Language).label}</Badge>
                ) : (
                  <span className="text-sm text-muted-foreground">{item.value}%</span>
                )}
              </div>
              <Progress value={item.value} className="w-full" />
              <p className="text-sm text-gray-500 mt-2 text-center">Click card to see list projects</p>
            </div>
          ) : (
            // Back of the card (Projects)
            <div className="inset-0 bg-white p-4 overflow-y-auto" style={{ transform: "rotateY(180deg)" }}>
              <h3 className="text-lg font-semibold mb-2">List Projects</h3>
              {(item as Skill).projects.length > 0 ? (
                (item as Skill).projects.map((project, index) => (
                  <div 
                    key={project.id}
                    className="mb-2 flex items-center cursor-pointer hover:text-primary transition-colors"
                    onClick={(e) => {
                      e.stopPropagation(); // Prevent card from flipping
                      handleproject(project.id);
                    }}
                  >
                    <span className="mr-2 text-gray-600">•</span>
                    {project.name}
                  </div>
                ))
              ) : (
                <p className="text-sm text-gray-600">No projects available.</p>
              )}
            </div>
          )}
        </CardContent>
      </Card>
    </motion.div>
  )
}

export default function Skills() {
  const [activeTab, setActiveTab] = useState("skills")
  const [skills, setSkills] = useState<Skill[]>([])

  const fetchData = async () => {
    try {
      const response = await fetchDataApi('getskills');
      const data = await response
      if (data.success) {
        const formattedSkills: Skill[] = data.data.map((apiSkill: ApiSkill) => ({
          name: apiSkill.name,
          value: apiSkill.competence * 33.33, // Convert 1-3 scale to percentage
          icon: getIconComponent(apiSkill.icon),
          projects: apiSkill.projects
        }))
        // console.log(formattedSkills)
        setSkills(formattedSkills)
      }
    } catch (error) {
      console.error('Error fetching text:', error);
    }
  };
  const router = useRouter();

  useEffect(() => {
    fetchData()
  }, [])
  const getIconComponent = (iconName: string): JSX.Element => {
    const iconMap: { [key: string]: JSX.Element } = {
      FaPhp: <FaPhp />,
      FaAngular: <FaAngular />,
      FaDatabase: <FaDatabase />,
      FaReact: <FaReact />,
      SiNextdotjs: <SiNextdotjs />,
      FaJava: <FaJava />,
      FaNodeJs: <FaNodeJs />,
      SiPython: <SiPython />,
      SiScikitlearn: <SiScikitlearn />,
      GiEyeTarget: <GiEyeTarget />,
      FaFigma: <FaFigma />,
    }
    return iconMap[iconName] || <FaTruckLoading /> // Default to FaPhp if icon not found
  }


  return (
    <section id="skills" className="min-h-screen py-16 bg-white text-black">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">My Skills & Languages</h2>
        <Tabs defaultValue="skills" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="skills" onClick={() => setActiveTab("skills")}>Skills</TabsTrigger>
            <TabsTrigger value="languages" onClick={() => setActiveTab("languages")}>Languages</TabsTrigger>
          </TabsList>
          <TabsContent value="skills" className="mt-6">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {skills.map((skill) => (
              <FlipCard key={skill.name} item={skill} />
            ))}
            </div>
          </TabsContent>
          <TabsContent value="languages" className="mt-6">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {languages.map((lang) => (
                <FlipCard key={lang.name} item={lang} isLanguage={true} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
      <div className="flex flex-col items-center mb-[60px] mt-5">
        <div className="animate-bounce mb-2">
          <svg
            className="w-6 h-6 text-gray-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 4v16m0 0l-4-4m4 4l4-4"
            />
          </svg>
        </div>
        <button
          onClick={() => {
            router.push('/portfolio');
          }}
          className="text-gray-300 hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium"
        >
          Scroll for next information
        </button>
      </div>
    </section>
  )
}

