"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown, ChevronUp } from "lucide-react"
import { AnimatedHeading } from "./ui/animated-heading"

const faqs = [
  {
    question: "Will AI replace my sales team?",
    answer:
      "No, AI enhances your sales team by handling repetitive tasks like lead qualification and follow-ups. This allows your human team to focus on high-value activities like closing deals and building client relationships.",
  },
  {
    question: "How do AI Employees actually work?",
    answer:
      "AI Employees engage leads through AI-powered voice and SMS interactions, handling outreach, qualification, appointment scheduling, and follow-ups—just like a top-performing sales rep but available 24/7.",
  },
  {
    question: "How long does it take to see results?",
    answer:
      "Most businesses start seeing increased appointments and conversions within 30 days. AI Employees are trained and optimized quickly to integrate seamlessly with your sales process.",
  },
  {
    question: "Do I need technical expertise to use this?",
    answer:
      "No, our team handles the entire setup, training, and optimization for you. AI Employees integrate directly with your CRM and sales tools with no manual effort required on your end.",
  },
  {
    question: "How much customization is possible?",
    answer:
      "AI Employees are fully customizable to match your brand voice, sales process, and customer interactions. They can be tailored to follow specific scripts, handle objections, and adapt to your business needs.",
  },
  {
    question: "What if a lead asks something the AI doesn’t know?",
    answer:
      "AI Employees can intelligently redirect complex queries to a human rep. They continuously learn and improve, ensuring they handle more inquiries effectively over time.",
  },
  {
    question: "Is this considered robocalling?",
    answer:
      "No, AI Employees engage in natural, two-way conversations with real prospects who have shown interest in your services. This is intelligent sales automation, not mass robocalling.",
  },
  {
    question: "How does pricing work?",
    answer:
      "Pricing includes a monthly subscription and a one-time setup fee, covering AI training, integration, and customization. Additional AI voice minutes can be purchased based on usage.",
  },
  {
    question: "What’s the commitment period?",
    answer:
      "There is a minimum 3-month commitment to allow for proper implementation and optimization. For high-volume businesses, we also offer longer-term partnership plans.",
  },
  {
    question: "What happens if the AI doesn’t perform well?",
    answer:
      "We continuously monitor and optimize your AI Employees. If performance doesn’t meet expectations, our team provides adjustments and refinements at no extra cost.",
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="py-20 bg-white dark:bg-[#0B162C] transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-[#F05A28] text-sm font-medium mb-4">STILL NOT SURE?</p>
          <AnimatedHeading className="text-[#0B162C] dark:text-white">Frequently Asked Questions</AnimatedHeading>
          <p className="text-gray-600 dark:text-gray-400 mt-4">
            Get answers to common questions about our AI Sales Employees.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-4 text-left"
              >
                <span className="text-[#F05A28] font-medium">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-[#F05A28]" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-[#F05A28]" />
                )}
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: "auto" }}
                    exit={{ height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="p-4 pt-0 text-gray-600 dark:text-gray-300">{faq.answer}</div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

