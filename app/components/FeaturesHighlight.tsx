"use client"

import { motion } from "framer-motion"
import { AnimatedHeading } from "./ui/animated-heading"

const features = [
  {
    number: "01",
    title: "Memory-Powered Conversations",
    description: "Remembers past interactions to deliver context-aware, personalized follow-ups.",
  },
  {
    number: "02",
    title: "Real-Time Insights",
    description: "Gain instant, data-driven insights to optimize customer interactions and decisions.",
  },
  {
    number: "03",
    title: "Automated Outreach",
    description: "Effortlessly scale outreach with AI-powered automation and tailored communication.",
  },
  {
    number: "04",
    title: "Enhanced Customer Retention",
    description: "Proactively retain at-risk customers with predictive AI insights for improved loyalty.",
  },
  {
    number: "05",
    title: "Navigate Demand Peaks",
    description: "Seamlessly handle high-volume periods while ensuring consistent, high-quality service.",
  },
  {
    number: "06",
    title: "Seamless Integration",
    description: "Integrate effortlessly with your existing systems for a smooth transition.",
  },
]

const FeaturesHighlight = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-100 dark:from-[#0B162C] dark:to-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <AnimatedHeading className="text-[#0B162C] dark:text-white">
          <span className="bg-gradient-to-r from-[#F05A28] to-[#0B162C] dark:to-white bg-clip-text text-transparent">
            Supercharged Features
          </span>
        </AnimatedHeading>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
            >
              <span className="text-[#F05A28] text-4xl font-bold mb-2 block">{feature.number}</span>
              <h3 className="text-xl font-bold text-[#0B162C] dark:text-white mb-3">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturesHighlight

