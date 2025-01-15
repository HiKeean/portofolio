'use client'
interface Project {
    title: string
    image: string
    category: string
  }
  
  interface ProjectDisplayProps {
    project: Project
  }
  
  export default function ProjectDisplay({ project }: ProjectDisplayProps) {
    return (
      <div className="w-full max-w-2xl">
        <div className="relative w-full pb-[75%] bg-gray-800 rounded-lg overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
        <div className="mt-4">
          <h2 className="text-2xl font-bold mb-2">{project.title}</h2>
          <p className="text-gray-600">Category: {project.category}</p>
        </div>
      </div>
    )
  }
  