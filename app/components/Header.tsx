'use client';

import Link from 'next/link'
import Image from 'next/image'
import { ThemeToggle } from './theme-toggle'

const Header = () => {
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
        <ThemeToggle />
      </div>
    </header>
  )
}

export default Header

