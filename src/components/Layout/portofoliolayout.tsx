'use client'

import { useState } from 'react'
// import SemiCircleGallery from './components/SemiCircleGallery'
import ProjectDisplay from '../projectDisplay'

const projects = [
  {
    title: "Re-Design Website Kemenkes",
    image: "/assets/img/Portofolio/Redesign_Web_Kemenkes/Figma_1.png",
    category: "web",
  },
  {
    title: "Sentiment Analysis on Etherium Cryptocurrency",
    image: "/assets/img/Portofolio/Crypto/anal.png",
    category: "ML",
  },
  {
    title: "E-commerce Platform",
    image: "/placeholder.svg?height=300&width=400",
    category: "web",
  },
  {
    title: "Image Recognition App",
    image: "/placeholder.svg?height=300&width=400",
    category: "ML",
  },
  {
    title: "Blockchain Voting System",
    image: "/placeholder.svg?height=300&width=400",
    category: "blockchain",
  },
]

export default function PortfolioPage() {
  const [selectedProject, setSelectedProject] = useState(projects[0])

  return (
    <div className="flex h-screen">
      <div className="w-1/2 relative overflow-hidden">
        {/* <SemiCircleGallery projects={projects} onSelectProject={setSelectedProject} /> */}
      </div>
      <div className="w-1/2 p-4 flex items-center justify-center">
        <ProjectDisplay project={selectedProject} />
      </div>
    </div>
  )
}

