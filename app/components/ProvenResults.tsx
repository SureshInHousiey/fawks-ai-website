'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { TrendingUp, Users, Headphones } from 'lucide-react'
import { AnimatedHeading } from './ui/animated-heading'

const results = [
  {
    title: 'Collections and Renewals',
    icon: TrendingUp,
    stats: [
      { value: '20%', description: 'improvement in renewals' },
      { value: '15%', description: 'collection rate improvement' }
    ]
  },
  {
    title: 'Sales',
    icon: Users,
    stats: [
      { value: '40%', description: 'increase in processing' },
      { value: '4X', description: 'improvement in leads' }
    ]
  },
  {
    title: 'Support',
    icon: Headphones,
    stats: [
      { value: '90%', description: 'first-call resolution' },
      { value: '60%', description: 'reduction in FTE cost' }
    ]
  }
]

const ProvenResults = () => {
  return (
    <section className="py-20 bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <AnimatedHeading className="text-[#0B162C] dark:text-white">
          Proven Results
        </AnimatedHeading>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {results.map((result, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Card className="bg-white dark:bg-gray-800 text-[#0B162C] dark:text-white overflow-hidden relative group transition-colors duration-300 h-[300px]">
                <motion.div
                  className="absolute inset-0 bg-[#F05A28] opacity-0 group-hover:opacity-10 transition-opacity duration-300"
                  initial={false}
                />
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 360 }}
                      transition={{ duration: 0.8 }}
                    >
                      <result.icon className="w-8 h-8 text-[#F05A28]" />
                    </motion.div>
                    <CardTitle className="text-xl font-bold text-[#F05A28]">
                      {result.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  {result.stats.map((stat, statIndex) => (
                    <motion.div
                      key={statIndex}
                      className="mb-4"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.2 + statIndex * 0.1 }}
                    >
                      <motion.p
                        className="text-3xl font-bold text-[#F05A28]"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.2 }}
                      >
                        {stat.value}
                      </motion.p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{stat.description}</p>
                    </motion.div>
                  ))}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProvenResults

