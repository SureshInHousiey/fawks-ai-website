'use client';

import Link from 'next/link'
import Image from 'next/image'
import { Facebook, Twitter, Instagram, Linkedin, MapPin } from 'lucide-react'

const Footer = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="bg-[#0B162C] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <Image
              src="/images/fawks-logo-text.png"
              alt="FawksAI"
              width={150}
              height={60} // Ensure width and height are the same for circular effect
              className="h-[100px] w-[100px] rounded-full border-3 border-white shadow-lg shadow-gray-500/50 object-cover mb-2"
            />
            <p className="text-sm mb-4">The AI voice agent that remembers, personalizes, and transforms customer interactions into loyalty and growt.</p>
            <div className="flex items-start text-sm text-gray-400">
              <MapPin className="w-5 h-5 mr-2 mt-1 text-[#F05A28]" />
              <p>
                1220 Vienna Austria
              </p>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button onClick={() => scrollToSection('hero')} className="hover:text-[#F05A28] transition-colors">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('featured-bots')} className="hover:text-[#F05A28] transition-colors">
                  Featured Bots
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('use-cases')} className="hover:text-[#F05A28] transition-colors">
                  Use Cases
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('integrations')} className="hover:text-[#F05A28] transition-colors">
                  Integrations
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('how-it-works')} className="hover:text-[#F05A28] transition-colors">
                  How It Works
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('reviews')} className="hover:text-[#F05A28] transition-colors">
                  Reviews
                </button>
              </li>
              <li>
                <Link
                  href="/customized-demo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#F05A28] transition-colors"
                >
                  Customized Demo
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-[#F05A28] transition-colors">
                <Facebook />
              </a>
              <a href="#" className="text-white hover:text-[#F05A28] transition-colors">
                <Twitter />
              </a>
              <a href="#" className="text-white hover:text-[#F05A28] transition-colors">
                <Instagram />
              </a>
              <a href="#" className="text-white hover:text-[#F05A28] transition-colors">
                <Linkedin />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p>&copy; {new Date().getFullYear()} FawksAI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

