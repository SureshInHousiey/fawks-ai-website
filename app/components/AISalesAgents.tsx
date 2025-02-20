"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader } from "./ui/card"
import { AnimatedHeading } from "./ui/animated-heading"
import { Check } from "lucide-react"

const agents = [
  {
    "name": "Lina",
    "role": "AI Voice Sales Agent",
    "description": "Lina drives sales with lifelike, human-sounding conversations, qualifying leads instantly and building relationships. With deep research and memory retention, Lina recalls past interactions, making every touchpoint feel personal and strategic.",
    "videoId": "NHEgBHeUjLs",
    "tasks": [
      "AI-driven, human-like sales conversations",
      "Deep lead research for hyper-personalized outreach",
      "Memory retention for smarter follow-ups",
      "Instant qualification and seamless booking"
    ]
  },
  {
    "name": "Ava",
    "role": "AI Database Reactivation Specialist",
    "description": "Ava unlocks hidden revenue by reactivating dormant leads with smart automation. By identifying lost opportunities, Ava reconnects with past contacts, ensuring no valuable lead is left behind, driving conversions from your existing database.",
    "videoId": "Bm0-_xyZzAk",
    "tasks": [
      "Automated reactivation of inactive leads",
      "Hyper-personalized outreach for better engagement",
      "Identifies lost opportunities and revives interest",
      "Optimized follow-ups to maximize conversions"
    ]
  },
  {
    "name": "Jackson",
    "role": "AI Nurture & Follow-Up Agent",
    "description": "Jackson nurtures prospects with automated follow-ups, ensuring leads stay engaged and move through the pipeline. By leveraging multi-channel outreach and proactive engagement, Jackson prevents leads from going cold and boosts conversion rates.",
    "videoId": "JIdFkLUob1I",
    "tasks": [
      "Automated, hyper-personalized follow-up sequences",
      "Long-term engagement with zero manual effort",
      "Multi-channel outreach to maximize conversions",
      "Proactive check-ins to close more deals efficiently"
    ]
  },
  {
    "name": "Alice",
    "role": "AI Customer Growth Strategist",
    "description": "Alice boosts customer loyalty by reducing churn and maximizing lifetime value through personalized engagement. With AI-driven support and intelligent upsell recommendations, Alice strengthens relationships and ensures long-term retention.",
    "videoId": "ck543GGUvp0",
    "tasks": [
      "Seamless, multi-channel customer engagement",
      "Proactive churn prevention to retain customers",
      "AI-driven upsell and cross-sell opportunities",
      "Timely, intelligent support for quick resolutions"
    ]
  }
]


export default function AISalesAgents() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-100 to-white dark:from-gray-900 dark:to-[#0B162C]">
      <div className="container mx-auto px-4">
        <AnimatedHeading className="text-[#0B162C] dark:text-white mb-8">Meet Our AI Sales Agents</AnimatedHeading>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {agents.map((agent, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden bg-white dark:bg-gray-800 border-none shadow-lg">
                <CardHeader className="p-0">
                  <div className="aspect-video w-full bg-gray-100 dark:bg-gray-700">
                    <iframe
                      width="100%"
                      height="100%"
                      src={`https://www.youtube.com/embed/${agent.videoId}`}
                      title={`${agent.name} - ${agent.role}`}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="border-0"
                    />
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-xl font-bold text-[#F05A28]">{agent.name}</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-300">{agent.role}</p>
                    </div>

                    <p className="text-gray-700 dark:text-gray-200">{agent.description}</p>

                    <div className="space-y-2">
                      <h4 className="font-semibold text-[#0B162C] dark:text-white">Key Responsibilities:</h4>
                      <ul className="space-y-2">
                        {agent.tasks.map((task, taskIndex) => (
                          <li key={taskIndex} className="flex items-start gap-2">
                            <Check className="w-5 h-5 text-[#F05A28] shrink-0 mt-0.5" />
                            <span className="text-gray-700 dark:text-gray-200">{task}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

