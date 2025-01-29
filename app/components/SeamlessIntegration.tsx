'use client'

import { motion } from 'framer-motion'
import { AnimatedHeading } from './ui/animated-heading'

const integrations = [
  {
    title: 'Choose Models',
    logos: [
      { src: '/images/integrations/anthropic.png', alt: 'Anthropic' },
      { src: '/images/integrations/elevenlabs.png', alt: 'ElevenLabs' },
      { src: '/images/integrations/openai.webp', alt: 'OpenAI' },
      { src: '/images/integrations/gpt4.png', alt: 'GPT-4' },
      { src: '/images/integrations/dalle.png', alt: 'DALL-E' },
    ]
  },
  {
    title: 'Tools',
    logos: [
      { src: '/images/integrations/google-calendar.png', alt: 'Google Calendar' },
      { src: '/images/integrations/make.png', alt: 'Make' },
      { src: '/images/integrations/gmail.webp', alt: 'Gmail' },
      { src: '/images/integrations/zapier.png', alt: 'Zapier' },
      { src: '/images/integrations/n8n.png', alt: 'n8n' },
    ]
  },
  {
    title: 'Database Integrations',
    logos: [
      { src: '/images/integrations/excel.png', alt: 'Excel' },
      { src: '/images/integrations/salesforce.png', alt: 'Salesforce' },
      { src: '/images/integrations/shopify.png', alt: 'Shopify' },
      { src: '/images/integrations/sheets.png', alt: 'Google Sheets' },
      { src: '/images/integrations/hubspot.png', alt: 'HubSpot' },
    ]
  }
]

const SeamlessIntegration = () => {
  return (
    <section className="py-20 bg-white dark:bg-[#0B162C] transition-colors duration-300">
      <div className="container mx-auto px-4">
        <AnimatedHeading className="text-[#0B162C] dark:text-white">
          Effortless and Swift <span className="text-[#F05A28]">Integrations</span>
        </AnimatedHeading>
        <div className="grid gap-8 mt-12">
          {integrations.map((integration, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-lg transition-colors duration-300"
            >
              <h3 className="text-2xl font-bold mb-4 text-[#0B162C] dark:text-white transition-colors duration-300">{integration.title}</h3>
              <div className="flex flex-wrap gap-4 justify-center">
                {integration.logos.map((logo, logoIndex) => (
                  <motion.div
                    key={logoIndex}
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <img src={logo.src} alt={logo.alt} className="h-12 w-auto" />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SeamlessIntegration

