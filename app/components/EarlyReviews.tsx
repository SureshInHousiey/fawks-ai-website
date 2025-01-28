'use client'

import { motion } from 'framer-motion'
import { AnimatedHeading } from './ui/animated-heading'
import Image from 'next/image'

const reviews = [
  {
    name: 'HUNTER MASO',
    title: 'Time Saver',
    review: 'Before, I was wasting hours trying to contact leads. Now, after working with your AI voice agent, I have freed up my time and can focus on closing deals.',
    image: '/images/testimonials/hunter.jpg'
  },
  {
    name: 'CAREY SLOANE',
    title: 'Boost in Appointments',
    review: 'I used to struggle with booking qualified leads, but since implementing your AI-powered outreach, my calendar is full of valuable meetings.',
    image: '/images/testimonials/carey.jpg'
  },
  {
    name: 'DEVIN ELLIS',
    title: 'Better Lead Engagement',
    review: 'Personalizing my outreach used to be a challenge, but with your AI voice agent, my lead engagement has soared, and Im closing more deals than ever.',
    image: '/images/testimonials/devin.jpg'
  }
]

const EarlyReviews = () => {
  return (
    <section className="py-20 bg-gray-100 dark:bg-gray-900 transition-colors duration-300" id="reviews">
      <div className="container mx-auto px-4">
        <AnimatedHeading className="text-[#0B162C] dark:text-white">
          Early Reviews
        </AnimatedHeading>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg h-full transition-colors duration-300">
                <div className="flex items-center mb-4">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden">
                    <Image
                      src={review.image}
                      alt={review.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-bold text-[#F05A28]">{review.name}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{review.title}</p>
                  </div>
                </div>
                <p className="text-gray-700 dark:text-gray-300 transition-colors duration-300">
                  "{review.review}"
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default EarlyReviews

