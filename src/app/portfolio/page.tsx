"use client"
import Image from 'next/image'
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const projects = [
  {
    title: "Re-Design Website Kemenkes",
    image: "/assets/img/Portofolio/Redesign_Web_Kemenkes/Figma_1.png",
    details: "portfolio_details_kemenkes.html",
    link: "https://www.figma.com/proto/paLflZ8D8cVjspya3G81pe?node-id=0-1&mode=design&t=pjVGXjjgY8JDiwAf-6",
    category: "web",
  },
  {
    title: "Sentiment Analysis on Etherium Cryptocurrency",
    image: "/assets/img/Portofolio/Crypto/anal.png",
    details: "portfolio_details_crypto.html",
    link: "/assets/pdf/Crypto.pdf",
    category: "ML",
  },
  // Add other projects here...
]

export default function Portfolio() {
  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold">Portfolio</h2>
      <p>Berikut adalah hasil projek selama berkuliah di Binus</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <Card key={index}>
            <CardContent className="p-4">
              <Image
                src={project.image}
                alt={project.title}
                width={300}
                height={200}
                layout="responsive"
              />
              <h3 className="text-xl font-bold mt-2">{project.title}</h3>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" asChild>
                <a href={project.details} target="_blank" rel="noopener noreferrer">More Details</a>
              </Button>
              <Button variant="outline" asChild>
                <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}

