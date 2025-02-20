"use client"

import { motion } from "framer-motion"
import { X, Check } from "lucide-react"
import Image from "next/image"
import { AnimatedHeading } from "./ui/animated-heading"

const problems = [
  "Are old leads sitting idle, collecting dust?",
  "Are leads waiting too long for responses and dropping off?",
  "Is it hard to keep up with consistent follow-ups, leading to lost opportunities?",
  "Struggling to manage communication across multiple channels?",
]

const solutions = [
  "Revive dormant leads and unlock new revenue with automated database reactivations.",
  "Engage leads in under 60 seconds, boosting conversions and accelerating your pipeline.",
  "Automate follow-ups, handle no-shows and reschedules, and nurture leads long-term—no opportunity slips by.",
  "Maximize reach with seamless, multi-channel engagement, keeping prospects active across every platform.",
]

const aiTeam = [
  { name: "Jackson Banks", position: "top" },
  { name: "Grace Silver", position: "right" },
  { name: "Jack Silver", position: "bottom" },
  { name: "Alice Jordan", position: "left" },
]

export default function ProblemSolution() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-100 dark:from-[#0B162C] dark:to-gray-900">
      <div className="container mx-auto px-4">
        {/* Problems Section */}
        <div className="mb-20">
          <AnimatedHeading className="text-[#0B162C] dark:text-white mb-8">Does This Sound Familiar?</AnimatedHeading>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="relative aspect-video"
            >
              <Image
                src="/images/problem.png"
                alt="Frustrated business person"
                fill
                className="object-cover rounded-lg"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-[#F05A28]/10 dark:bg-gray-800 rounded-lg p-8"
            >
              <div className="space-y-6">
                {problems.map((problem, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-start gap-4"
                  >
                    <X className="w-6 h-6 text-[#F05A28] shrink-0 mt-1" />
                    <p className="text-gray-800 dark:text-white text-lg">{problem}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Solutions Section */}
        <div>
          <AnimatedHeading className="text-[#0B162C] dark:text-white">
            Empower Your Sales Team with AI to Conquer These Challenges
          </AnimatedHeading>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-[#F05A28]/10 dark:bg-gray-800 rounded-lg p-8"
            >
              <div className="space-y-6">
                {solutions.map((solution, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-start gap-4"
                  >
                    <Check className="w-6 h-6 text-[#F05A28] shrink-0 mt-1" />
                    <p className="text-gray-800 dark:text-white text-lg">{solution}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="relative"
              style={{ aspectRatio: 4/3 }}
            >
              <Image
                src="/images/solution.png"
                alt="AI Sales Team Network"
                fill
                className="object-contain"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

