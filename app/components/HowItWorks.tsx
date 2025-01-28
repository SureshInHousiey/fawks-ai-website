"use client"

import { motion } from "framer-motion"
import { AnimatedHeading } from "./ui/animated-heading"

const steps = [
  {
    title: "Book Initial Strategy Call",
    description: "Schedule a personalized consultation to discuss your needs and goals.",
    icon: (
      <svg viewBox="0 0 24 24" className="w-16 h-16 mx-auto">
        <path
          fill="currentColor"
          d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"
        />
      </svg>
    ),
  },
  {
    title: "Personalized Outreach Calls",
    description:
      "Our AI voice engine scrapes leads, personalizes scripts, and powers dynamic automated calls to drive results.",
    icon: (
      <svg viewBox="0 0 24 24" className="w-16 h-16 mx-auto">
        <circle fill="currentColor" cx="12" cy="12" r="10" />
        <text x="12" y="16" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">
          AI
        </text>
      </svg>
    ),
  },
  {
    title: "Track Results & Close Deals",
    description:
      "Receive insights, book appointments, and focus on closing more deals. Call logs, push extracted data to CRM flow etc.",
    icon: (
      <svg viewBox="0 0 24 24" className="w-16 h-16 mx-auto">
        <path
          fill="currentColor"
          d="M21 18v1c0 1.1-.9 2-2 2H5c-1.11 0-2-.9-2-2V5c0-1.1.89-2 2-2h14c1.1 0 2 .9 2 2v1h-9c-1.11 0-2 .9-2 2v8c0 1.1.89 2 2 2h9zm-9-2h10V8H12v8zm4-2.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"
        />
      </svg>
    ),
  },
]

const HowItWorks = () => {
  return (
    <section
      className="py-20 bg-gradient-to-b from-gray-100 to-white dark:from-gray-900 dark:to-[#0B162C] transition-colors duration-300"
      id="how-it-works"
    >
      <div className="container mx-auto px-4">
        <AnimatedHeading className="text-[#0B162C] dark:text-white">How it works</AnimatedHeading>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="bg-white dark:bg-gray-800 rounded-lg p-8 h-full flex flex-col shadow-md hover:shadow-lg transition-all duration-300">
                <div className="text-[#F05A28] dark:text-[#F05A28] mb-8">{step.icon}</div>
                <h3 className="text-2xl font-bold mb-6 text-[#0B162C] dark:text-white text-center">{step.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 text-base leading-relaxed text-center mt-auto">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HowItWorks

