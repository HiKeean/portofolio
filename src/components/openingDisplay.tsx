'use client'

import { useState, useEffect } from 'react'
import { TypeAnimation } from 'react-type-animation';

interface OpeningAnimationProps {
  onComplete: () => void
}

export default function OpeningAnimation({ onComplete }: OpeningAnimationProps) {
  const [isTypingComplete, setIsTypingComplete] = useState(false)
  const [isNameComplete, setIsNameComplete] = useState(false)
  const [isPortfolioComplete, setIsPortfolioComplete] = useState(false)
  const [showButton, setShowButton] = useState(false)
  const [isClosing, setIsClosing] = useState(false)

  useEffect(() => {
    if (isNameComplete && isPortfolioComplete) {
      handleClick()
    }
  }, [isNameComplete, isPortfolioComplete])

  const handleClick = () => {
    setIsClosing(true)
    setTimeout(() => {
      setShowButton(false)
      onComplete()
    }, 1000)
  }
  return (
    <div className={`fixed inset-0 flex flex-col items-center justify-center bg-donker-800 transition-all duration-1000 ${isTypingComplete ? 'scale-150 opacity-0' : 'scale-100 opacity-100'}`}>
        <div className={`absolute inset-0 bg-donker-800 transition-transform duration-2000 ease-in-out ${isClosing ? 'animate-split-open' : ''}`} />
        <div className="atas mb-4">
            <TypeAnimation
            sequence={[
                'Hizkia Albertian',
                () => setIsNameComplete(true),
            ]}
            wrapper="h1"
            cursor={true}
            repeat={0}
            speed={50}
            style={{ fontSize: '4em', fontFamily: '"Meow Script", cursive' }}
            className="text-white"
            />
        </div>

        <div className="bawah mb-8">
            <TypeAnimation
            sequence={[
                1000,
                'Portfolio',
                () => setIsPortfolioComplete(true),
            ]}
            wrapper="h1"
            cursor={true}
            repeat={0}
            speed={50}
            style={{ fontSize: '4em' }}
            className="text-white"
            />
        </div>
      
      
    </div>
  )
}
