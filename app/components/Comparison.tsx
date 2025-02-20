"use client"

import { motion } from "framer-motion"
import { Check, X } from "lucide-react"
import { AnimatedHeading } from "./ui/animated-heading"

const traditional = [
  "Hiring is slow—manual recruitment takes months, and new hires need time to hit KPIs.",
  "Requires HR, training, and benefits—adding extra costs and management overhead.",
  "Works fixed hours, takes breaks, sick days, and vacations—leading to downtime.",
  "Majority of their shift is spent on admin tasks rather than actual selling.",
  "Performance varies—burnout, lack of motivation, and inconsistency impact results.",
  "High turnover—employees leave after an average of 18 months, requiring frequent rehiring.",
]

const ai = [
  "One-time setup—AI starts delivering results in 30 days or less.",
  "Learns instantly—adapts in real-time with zero training costs.",
  "Works 24/7—never takes a break, ensuring uninterrupted productivity.",
  "99.9% efficiency—focuses entirely on revenue-generating activities.",
  "Always consistent—AI never burns out, delivering peak performance every day.",
  "Zero attrition—no turnover, no hiring cycles, and no productivity gaps.",
]

export default function Comparison() {
  return (
    <section className="py-5 bg-white dark:bg-[#0B162C] transition-colors duration-300">
      <div className="container mx-auto px-4">
        <AnimatedHeading className="text-[#0B162C] dark:text-white mb-12">Why Hire Our AI Sales Team?</AnimatedHeading>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Traditional Sales */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg"
          >
            <h3 className="text-xl font-bold text-[#0B162C] dark:text-white mb-6">Traditional Sales Employees</h3>
            <div className="space-y-4">
              {traditional.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <X className="w-5 h-5 text-red-500 shrink-0 mt-1" />
                  <p className="text-gray-600 dark:text-gray-300">{item}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* AI Sales */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-[#F05A28] p-6 rounded-lg"
          >
            <h3 className="text-xl font-bold text-white mb-6">AI Sales Employees</h3>
            <div className="space-y-4">
              {ai.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <Check className="w-5 h-5 text-green-400 shrink-0 mt-1" />
                  <p className="text-white">{item}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

