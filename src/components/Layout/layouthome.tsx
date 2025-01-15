import { Navbar } from "../navbar"

interface LayoutProps {
  children: React.ReactNode
}

export function LayoutHome({ children }: LayoutProps) {
  return (
    <div className="bg-gray-100">
      <Navbar />
      <main>
        {children}
      </main>
    </div>
  )
}

