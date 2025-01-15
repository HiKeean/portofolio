"use client"
import { TypeAnimation } from 'react-type-animation';
import About from './about/page';
import Hero from './Hero/page';
import Skills from './skills/page';
import Resume from './resume/page';
import Portfolio from './portfolio/page';
import PortfolioPage from '@/components/Layout/portofoliolayout';
import { useEffect, useState } from 'react';
import OpeningAnimation from '@/components/openingDisplay';

export default function Home() {
  const [showContent, setShowContent] = useState(false)

  useEffect(() => {
    // Load the Meow Script font
    const link = document.createElement('link')
    link.href = 'https://fonts.googleapis.com/css2?family=Meow+Script&display=swap'
    link.rel = 'stylesheet'
    document.head.appendChild(link)
  }, [])

  return (
    <>
      {!showContent && <OpeningAnimation onComplete={() => setShowContent(true)} />}
      <main className={`h-screen w-full transition-opacity duration-2000 ${showContent ? 'opacity-100' : 'opacity-0'}`}>
        <Hero/>
        <section id='garis-about'>
          <hr />
        </section>
        <About/>
        <section id='garis-skills'>
          <hr />
        </section>
        <Skills/>
        {/* <PortfolioPage/> */}
      </main>
    </>
  )
}

