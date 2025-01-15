'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from "@/components/ui/button"
import Link from 'next/link'

// Add to next.config.js:
// images: {
//   domains: ['api-porto-keena.vercel.app']
// }

interface ImageItem {
  id: number
  title: string
  thumbnailSrc: string
  images: string[]
  category: string
  projectDate: string
  link: string
  description: string
}

export default function ImageGallery() {
  const [imageData, setImageData] = useState<ImageItem[]>([])
  const [selectedImage, setSelectedImage] = useState<ImageItem | null>(null)
  const [hoveredImage, setHoveredImage] = useState<ImageItem | null>(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api-porto-keena.vercel.app/api/getportfolio')
        if (!response.ok) {
          throw new Error('Failed to fetch data')
        }
        const result = await response.json()
        if (result.success) {
          const mappedData = result.data.map((item: any) => ({
            id: item.id,
            title: item.name,
            thumbnailSrc: item.images[0],
            images: item.images,
            category: item.category,
            projectDate: item.project_date,
            link: item.link,
            description: item.desc,
          }))
          setImageData(mappedData)

          // Check sessionStorage for "jangandibuka"
          const jangandibuka = sessionStorage.getItem('jangandibuka')
          if (jangandibuka) {
            try {
              const { id: idProject } = JSON.parse(jangandibuka)
              const projectToOpen = mappedData.find(item => item.id === idProject)
              if (projectToOpen) {
                setSelectedImage(projectToOpen)
                setCurrentImageIndex(0)
              }
            } catch (error) {
              console.log('No valid "jangandibuka" data found in sessionStorage')
            }
            sessionStorage.removeItem('jangandibuka');
          }
        } else {
          throw new Error('Data fetch was not successful')
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An unknown error occurred')
      } finally {
        setIsLoading(false)
      }
    }

    fetchData()
  }, [])

  const handleNext = () => {
    if (selectedImage) {
      setCurrentImageIndex((prevIndex) =>
        prevIndex < selectedImage.images.length - 1 ? prevIndex + 1 : prevIndex
      )
    }
  }

  const handlePrev = () => {
    if (selectedImage) {
      setCurrentImageIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : prevIndex))
    }
  }

  if (isLoading) {
    return <div className="flex h-screen items-center justify-center bg-gray-900 text-white">Loading...</div>
  }

  if (error) {
    return <div className="flex h-screen items-center justify-center bg-gray-900 text-white">Error: {error}</div>
  }

  return (
    <div className="flex h-screen bg-gray-900 text-white overflow-hidden">
      {/* Sidebar */}
      <div className="w-1/3 overflow-y-scroll p-4">
        <h2 className="text-2xl font-bold mb-4 sticky top-0 bg-gray-900 z-10">
          <Link
          key='portfolio'
          href={'/'}
          >
            Portfolio
          </Link>
        </h2>
        <div className="space-y-8">
          {imageData.map((item) => (
            <div
              key={item.id}
              className="transform transition-all duration-300 hover:scale-105 cursor-pointer"
              onMouseEnter={() => setHoveredImage(item)}
              onMouseLeave={() => setHoveredImage(null)}
              onClick={() => {
                setSelectedImage(item)
                setCurrentImageIndex(0)
              }}
            >
              <div className="relative">
                <Image
                  src={item.thumbnailSrc}
                  alt={item.title}
                  width={300}
                  height={100}
                  className="rounded shadow-lg"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = '/placeholder.svg'; // Fallback image
                  }}
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-2">
                  <span className="text-xs">{item.title}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="w-2/3 p-4 flex flex-col justify-start items-center overflow-y-scroll">
        {(selectedImage || hoveredImage) ? (
          <>
            <h2 className="text-2xl font-bold mb-4">{(selectedImage || hoveredImage)?.title}</h2>
            <div className="relative mb-4">
              <Image
                src={(selectedImage || hoveredImage)?.images[currentImageIndex]}
                alt={(selectedImage || hoveredImage)?.title}
                width={1000}
                height={600}
                className="rounded shadow-lg"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = '/placeholder.svg'; // Fallback image
                }}
              />
              <div className="absolute top-1/2 left-0 right-0 flex justify-between transform -translate-y-1/2">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={handlePrev}
                  disabled={currentImageIndex === 0}
                  className="rounded-full bg-black/50 text-white hover:bg-black/75"
                >
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={handleNext}
                  disabled={currentImageIndex === (selectedImage || hoveredImage).images.length - 1}
                  className="rounded-full bg-black/50 text-white hover:bg-black/75"
                >
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
            <div className="flex justify-between w-full max-w-5xl space-x-3">
              {/* Project Info */}
              <div className="bg-gray-800 rounded-lg shadow-md p-10 w-full">
                <h3 className="text-xl font-semibold mb-4">Project Information</h3>
                <div className="grid grid-rows-5 gap-4">
                  <div>
                    <p className="text-gray-400">
                      <span className="text-gray-400">Category : </span>
                      {(selectedImage || hoveredImage)?.category}
                    </p>
                  </div>
                  <div>
                    <p>
                      <span className="text-gray-400">Project Date : </span>
                      {(selectedImage || hoveredImage)?.projectDate}
                    </p>
                  </div>
                </div>
              </div>

              {/* Project Details */}
              <div className="bg-gray-800 rounded-lg shadow-md p-10 w-full">
                <h3 className="text-xl font-semibold mb-4">Project Details</h3>
                <div className="mb-4">
                  <p>
                    <span className="text-gray-400">Link : </span>
                    <a
                      href={(selectedImage || hoveredImage)?.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:underline"
                    >
                      {(selectedImage || hoveredImage)?.link}
                    </a>
                  </p>
                </div>
                <div>
                  <p className="text-gray-400">Description:</p>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: (selectedImage || hoveredImage)?.description || '',
                    }}
                  ></p>
                </div>
              </div>
            </div>
          </>
        ) : (
          <p className="text-xl text-gray-500">
            Hover over an image or click it to view details.
          </p>
        )}
      </div>
    </div>
  )
}

