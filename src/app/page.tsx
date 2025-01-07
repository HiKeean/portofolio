"use client"
import { TypeAnimation } from 'react-type-animation';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <h1 className="text-4xl font-bold mb-4">Hizkia Albertian L</h1>
      <p className="text-xl">
        I'm a{' '}
        <TypeAnimation
          sequence={[
            'Developer',
            2000,
            'Data Scientist',
            2000,
            'Student at Binus Kemanggisan Computer Science AI',
            2000,
          ]}
          wrapper="span"
          speed={50}
          repeat={Infinity}
        />
      </p>
    </div>
  )
}

