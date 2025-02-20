"use client"

import { motion } from "framer-motion"
import { Check } from "lucide-react"
import { AnimatedHeading } from "./ui/animated-heading"

const targets = [
  "REAL ESTATE AGENCIES",
  "MORTGAGE BROKERS",
  "FINANCIAL ADVISORS",
  "B2B SERVICE PROVIDERS",
  "SAAS COMPANIES",
  "MARKETING AGENCIES",
  "HOME SERVICES (SOLAR,Roofing)",
  "HEALTH & WELLNESS PROVIDERS",
  "INSURANCE BROKERS",
  "COACHES & CONSULTANTS",
  "EDUCATION & ONLINE COURSES",
  "AND MORE...",
]

export default function PerfectFor() {
  return (
    <section className="py-20 bg-white dark:bg-[#0B162C] transition-colors duration-300">
      <div className="container mx-auto px-4">
        <AnimatedHeading className="text-[#0B162C] dark:text-white mb-12">Who This Is Perfect For</AnimatedHeading>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
          {targets.map((target, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-100 dark:bg-gray-800 border border-[#F05A28]/20 rounded-lg p-4 flex items-center gap-3 hover:border-[#F05A28] transition-colors duration-300"
            >
              <Check className="w-5 h-5 text-[#F05A28]" />
              <span className="text-[#0B162C] dark:text-white font-medium">{target}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

