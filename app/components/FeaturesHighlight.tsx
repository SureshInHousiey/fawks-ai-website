"use client"

import { motion } from "framer-motion"
import { AnimatedHeading } from "./ui/animated-heading"

const features = [
  {
    number: "01",
    title: "Human-Like AI Conversations",
    description: "Engages leads with lifelike, natural interactions, remembering past conversations for hyper-personalized follow-ups."
  },
  {
    number: "02",
    title: "AI-Driven Lead Qualification",
    description: "Instantly evaluates and qualifies leads using behavior, intent, and real-time insights to optimize conversions."
  },
  {
    number: "03",
    title: "Multi-Channel Follow-Up",
    description: "Seamlessly connects with leads across email, SMS, WhatsApp, and more, ensuring engagement and trust-building."
  },
  {
    number: "04",
    title: "Smart Appointment Scheduling",
    description: "Automates scheduling, rescheduling, and reminders, reducing no-shows and ensuring maximum prospect attendance."
  },
  {
    number: "05",
    title: "Lead Reactivation & Revenue Recovery",
    description: "Re-engages inactive leads and revives lost opportunities, converting them into revenue without manual effort."
  },
  {
    number: "06",
    title: "Seamless CRM & Tool Integration",
    description: "Syncs effortlessly with your CRM, email, and sales tools for automated workflows and real-time data updates."
  }
]


const FeaturesHighlight = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-100 dark:from-[#0B162C] dark:to-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <AnimatedHeading className="text-[#0B162C] dark:text-white">
          <span className="bg-gradient-to-r from-[#F05A28] to-[#0B162C] dark:to-white bg-clip-text text-transparent">
            AI Sales Agents: The Ultimate Growth Engine
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

