'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Check, Clock, Users, BarChart } from 'lucide-react'
import { AnimatedHeading } from './ui/animated-heading'

const useCases = [
  {
    title: 'Customer Support',
    subtitle: 'SPREAD ACROSS THE ENTIRE CUSTOMER LIFECYCLE TO FULFILL YOUR DIVERSE BUSINESS NEEDS.',
    description: 'Mimics your best support executives for end-to-end containment at higher CSAT.',
    points: [
      'Inbound & outbound customer support for L1, L2 & L3 queries.',
      'Revenue generation anchored in support instances.',
      'Feedback collection.'
    ],
    image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d',
    icons: [
      { icon: Clock, label: 'Support' },
      { icon: Users, label: 'Team' },
      { icon: BarChart, label: 'Analytics' }
    ]
  },
  {
    title: 'Sales & Marketing',
    subtitle: 'DRIVE GROWTH WITH AI-POWERED SALES AND MARKETING SOLUTIONS',
    description: 'Automate and optimize your sales processes with intelligent AI assistance.',
    points: [
      'Cold outreach and lead generation',
      'Sales qualification and nurturing',
      'Marketing campaign automation'
    ],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f',
    icons: [
      { icon: BarChart, label: 'Growth' },
      { icon: Users, label: 'Leads' },
      { icon: Clock, label: 'Automation' }
    ]
  },
  {
    title: 'Collections & Retention',
    subtitle: 'MAXIMIZE CUSTOMER VALUE AND MINIMIZE CHURN',
    description: 'Streamline collections and enhance customer retention with AI-driven strategies.',
    points: [
      'Automated payment reminders and collection',
      'Churn prediction and prevention',
      'Customer engagement optimization'
    ],
    image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984',
    icons: [
      { icon: Clock, label: 'Timely' },
      { icon: Users, label: 'Retention' },
      { icon: BarChart, label: 'Results' }
    ]
  }
]

const CustomerUseCase = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % useCases.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [isAutoPlaying])

  return (
    <section className="py-20 bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <AnimatedHeading className="text-[#0B162C] dark:text-white">
          Use Cases
        </AnimatedHeading>
        <div className="relative mt-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="grid md:grid-cols-2 gap-12 items-center"
            >
              <div className="space-y-8">
                <div>
                  <h3 className="text-sm tracking-wider text-[#F05A28] mb-4">
                    {useCases[currentSlide].subtitle}
                  </h3>
                  <h4 className="text-3xl font-bold mb-4 text-[#0B162C] dark:text-white transition-colors duration-300">
                    {useCases[currentSlide].title}
                  </h4>
                  <p className="text-gray-700 dark:text-gray-300 mb-6 transition-colors duration-300">
                    {useCases[currentSlide].description}
                  </p>
                </div>
                <div className="space-y-4">
                  {useCases[currentSlide].points.map((point, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.2 }}
                      className="flex items-start space-x-3"
                    >
                      <Check className="text-[#F05A28] mt-1" />
                      <span className="text-gray-700 dark:text-gray-300 transition-colors duration-300">{point}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
              <div className="relative">
                <div className="aspect-square relative rounded-lg overflow-hidden">
                  <img src={useCases[currentSlide].image} alt={useCases[currentSlide].title} className="w-full h-full object-cover"/>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
          <div className="flex justify-center mt-8 space-x-2">
            {useCases.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentSlide(index)
                  setIsAutoPlaying(false)
                }}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide ? 'bg-[#F05A28] w-6' : 'bg-gray-400 dark:bg-gray-600'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default CustomerUseCase

