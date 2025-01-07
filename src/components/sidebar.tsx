"use client"
import Link from "next/link"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function Sidebar() {
  return (
    <div className="w-64 bg-gray-100 h-screen p-4 flex flex-col">
      <div className="flex flex-col items-center mb-6">
        <Avatar className="w-24 h-24">
          <AvatarImage src="/assets/img/profile-img.jpeg" alt="Hizkia Albertian L" />
          <AvatarFallback>HAL</AvatarFallback>
        </Avatar>
        <h1 className="text-xl font-bold mt-2">Hizkia Albertian L</h1>
      </div>
      <nav className="flex-1">
        <ul className="space-y-2">
          <li><Link href="/" className="block p-2 hover:bg-gray-200 rounded">Home</Link></li>
          <li><Link href="/about" className="block p-2 hover:bg-gray-200 rounded">About</Link></li>
          <li><Link href="/skills" className="block p-2 hover:bg-gray-200 rounded">Skills</Link></li>
          <li><Link href="/resume" className="block p-2 hover:bg-gray-200 rounded">Resume</Link></li>
          <li><Link href="/portfolio" className="block p-2 hover:bg-gray-200 rounded">Portfolio</Link></li>
        </ul>
      </nav>
      <div className="mt-auto">
        <div className="flex justify-center space-x-4">
          <a href="https://www.facebook.com/HizHAL" target="_blank" rel="noopener noreferrer">
            <i className="bx bxl-facebook"></i>
          </a>
          <a href="https://www.instagram.com/hizkiaalb/" target="_blank" rel="noopener noreferrer">
            <i className="bx bxl-instagram"></i>
          </a>
          <a href="https://www.linkedin.com/in/hizkiaalbertian/" target="_blank" rel="noopener noreferrer">
            <i className="bx bxl-linkedin"></i>
          </a>
        </div>
      </div>
    </div>
  )
}

