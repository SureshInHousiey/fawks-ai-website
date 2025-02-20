"use client"

import { motion } from "framer-motion"
import { Check } from "lucide-react"
import { Button } from "./ui/button"
import { AnimatedHeading } from "./ui/animated-heading"

const plans = [
  {
    name: "AI Starter",
    price: "$1,497/mo",
    features: [
      "2 AI Employees Fully Built, Trained & Ready to Sell",
      "2,500 AI Voice Minutes Included Monthly",
      "Live Weekly Strategy & Training Calls",
      "1x/Month Private 1:1 Support Session",
      "Dedicated Slack Support (M-F)",
      "Full Access to AI-Powered Sales CRM",
      "24/7 Live Zoom Support for CRM & AI",
      "Additional AI Voice Minutes at $0.20/min",
    ],
    cta: "AI Starter",
    ctaSubtext: "GET STARTED NOW",
    setup: "$5,000 ONE-TIME SETUP FEE (Covers AI Training & Customization)",
    commitment: "90-Day Success Commitment – Proven AI Performance",
    customNote: "90-Day Success Commitment – Proven AI Performance",
  },
  {
    name: "AI Accelerator",
    price: "$1,997/mo",
    features: [
      "4 AI Employees Fully Built, Trained & Deployed",
      "5,000 AI Voice Minutes Included Monthly",
      "Live Weekly AI Sales Training & Strategy Calls",
      "Bi-Weekly Private 1:1 Performance Coaching",
      "Dedicated Slack & Email Support (M-F)",
      "Advanced AI-Powered CRM & Lead Management",
      "24/7 Live Zoom Support for CRM & AI",
      "Additional AI Voice Minutes at $0.18/min",
    ],
    cta: "AI Accelerator",
    ctaSubtext: "SCALE YOUR SALES NOW",
    setup: "$10,000 ONE-TIME SETUP FEE (Covers AI Optimization & Customization)",
    commitment: "90-Day ROI Guarantee – AI-Driven Conversions or We Optimize Free",
    customNote: "90-Day ROI Guarantee – AI-Driven Conversions or We Optimize Free",
  },
  {
    name: "AI Dominator",
    price: "Schedule A Call",
    features: [
      "Everything in AI Sales Team PLUS",
      "Unlimited AI Employees Built & Trained For You",
      "AI Team Directly Integrates with Your Sales Team",
      "Fully Managed AI Campaigns Done-For-You",
      "Daily AI Performance Optimization for Max ROI",
      "Bi-Weekly AI Growth & Scaling Strategy Sessions",
    ],
    cta: "GROWTH PARTNER",
    ctaSubtext: "BOOK A STRATEGY CALL",
    customNote: "For Teams Generating 10,000+ Calls/Month – Requires 6-12 Month Agreement (Retainer + Revenue Share)",
  },
]

export default function Pricing() {
  return (
    <section className="py-20 bg-white dark:bg-[#0B162C] transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-[#F05A28] text-sm font-medium mb-4">HIRE YOUR AI SALES EMPLOYEES TODAY</p>
          <AnimatedHeading className="text-[#0B162C] dark:text-white">Choose Your Plan</AnimatedHeading>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6 flex flex-col"
            >
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-[#0B162C] dark:text-white mb-2">{plan.name}</h3>
                <div className="text-3xl font-bold text-[#F05A28] mb-4">{plan.price}</div>
              </div>

              <div className="space-y-4 flex-1">
                {plan.features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#F05A28] shrink-0 mt-1" />
                    <span className="text-gray-600 dark:text-gray-300 text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="mt-6">
                <Button className="w-full p-7 flex flex-col bg-[#F05A28] hover:bg-[#D04A18] text-white">
                  {(plan.cta).toLocaleUpperCase()}
                  <span style={{ fontSize: '10px' }} className="block opacity-90">{plan.ctaSubtext}</span>
                </Button>

                {plan.customNote && (
                  <p className="text-center text-sm text-gray-600 dark:text-gray-300 mt-4 font-semibold">
                    {plan.customNote}
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

