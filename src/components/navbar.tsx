'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { Menu } from 'lucide-react'
import { scrollToSection } from '@/lib/utils'

const menuItems = [
  { name: 'Home', href: '/' },
  { name: 'Project', href: '/portfolio' },
  // { name: 'Project', href: '#project' },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-4 right-4 z-50">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 bg-transparent rounded-md shadow-md hover:bg-gray-100 transition-colors duration-200"
        aria-label="Toggle menu"
      >
        <Menu className="w-6 h-6 text-gray-700 hover:text-gray-700 transition-colors duration-200" />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2"
          >
            {menuItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block px-4 py-2 text-gray-800 hover:bg-gray-100 transition-colors duration-200"
                onClick={() => scrollToSection}
              >
                {item.name}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

