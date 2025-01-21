import { useEffect, useState } from "react"

export const useLineAnimation = (delay = 0) => {
  const [lineLength, setLineLength] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLineLength(100)
    }, delay)

    return () => clearTimeout(timer)
  }, [delay])

  return lineLength
}

