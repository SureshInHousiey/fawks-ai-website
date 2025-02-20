"use client"

import { motion } from "framer-motion"
import { AnimatedHeading } from "./ui/animated-heading"

const steps = [
  {
    step: "STEP 1",
    title: "Define Your AI Sales Team",
    description:
      "Select the AI Agent(s) that fit your sales workflow—whether it's engaging new leads, nurturing prospects, or retaining customers. Tailor their roles to align with your growth strategy and sales objectives.",
  },
  {
    step: "STEP 2",
    title: "We Train & Optimize Your AI Agents",
    description:
      "Our experts customize and train your AI employees to match your brand's tone, sales approach, and customer engagement style. With data-driven learning, they become an extension of your team—ready to convert and nurture leads at scale.",
  },
  {
    step: "STEP 3",
    title: "Activate & Scale Your AI Workforce",
    description:
      "Your AI employees take action—engaging leads, following up, booking meetings, and reviving lost opportunities. With seamless automation, they operate 24/7, driving sales while you focus on closing high-value deals.",
  },
]

export default function HowItWorks() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-100 to-white dark:from-gray-900 dark:to-[#0B162C] transition-colors duration-300">
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
                <div className="text-[#F05A28] font-bold text-sm mb-4">{step.step}</div>
                <h3 className="text-2xl font-bold mb-6 text-[#0B162C] dark:text-white">{step.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 text-base leading-relaxed mt-auto">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

