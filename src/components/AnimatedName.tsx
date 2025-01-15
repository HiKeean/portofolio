'use client'

import { useState, useEffect } from 'react'

interface AnimatedNameProps {
  name: string
  onComplete: () => void
}

export default function AnimatedName({ name, onComplete }: AnimatedNameProps) {
  const [displayedName, setDisplayedName] = useState('')
  const [isTypingComplete, setIsTypingComplete] = useState(false)

  useEffect(() => {
    let currentIndex = 0
    const typingInterval = setInterval(() => {
      if (currentIndex < name.length) {
        setDisplayedName(prev => prev + name[currentIndex])
        currentIndex++
      } else {
        clearInterval(typingInterval)
        setIsTypingComplete(true)
        setTimeout(onComplete, 1000) // Delay before triggering the opening animation
      }
    }, 150)

    return () => clearInterval(typingInterval)
  }, [name, onComplete])

  return (
    <div className={`text-6xl md:text-8xl text-white font-meow-script transition-all duration-1000 ${isTypingComplete ? 'scale-150 opacity-0' : 'scale-100 opacity-100'}`}>
      {displayedName}
    </div>
  )
}

