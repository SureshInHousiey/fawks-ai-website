"use client"

import Link from "next/link"
import Image from "next/image"
import { ThemeToggle } from "./theme-toggle"
import { useState, useEffect } from "react"
import { Menu } from "lucide-react"
import { Button } from "./ui/button"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false)
      }
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-[#0B162C] shadow-md transition-colors duration-300">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <Image
            src="/images/fawks-logo-rect.png"
            alt="FawksAI"
            width={150}
            height={40}
            className="object-cover shadow-lg shadow-gray-600/50"
            style={{ borderRadius: '8px' }}
            priority
          />
        </Link>
        <div className="flex items-center space-x-6">
          <nav className="hidden md:flex space-x-6">
            <button
              onClick={() => scrollToSection("ai-sales-agents")}
              className="text-[#0B162C] dark:text-white hover:text-[#F05A28] transition-colors"
            >
              Meet Our Agents
            </button>
            <button
              onClick={() => scrollToSection("featured-bots")}
              className="text-[#0B162C] dark:text-white hover:text-[#F05A28] transition-colors"
            >
              Featured Bots
            </button>
          </nav>
          <ThemeToggle />
          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <Menu className="h-6 w-6" />
          </Button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-[#0B162C] py-4">
          <div className="container mx-auto px-4 flex flex-col space-y-4">
            <button
              onClick={() => scrollToSection("ai-sales-agents")}
              className="text-[#0B162C] dark:text-white hover:text-[#F05A28] transition-colors"
            >
              Meet Our Agents
            </button>
            <button
              onClick={() => scrollToSection("featured-bots")}
              className="text-[#0B162C] dark:text-white hover:text-[#F05A28] transition-colors"
            >
              Featured Bots
            </button>
          </div>
        </div>
      )}
    </header>
  )
}

export default Header
