'use client'

import { motion } from 'framer-motion'

interface AnimatedHeadingProps {
  children: React.ReactNode
  className?: string
  subtitle?: string
}

export function AnimatedHeading({ children, className = '', subtitle }: AnimatedHeadingProps) {
  return (
    <div className="text-center mb-1">
      <h2 className={`text-4xl font-bold relative inline-block transition-colors duration-300 ${className}`}>
        {children}
        <motion.div
          className="absolute -bottom-4 left-0 w-full h-1 bg-[#F05A28]"
          initial={{ width: 0 }}
          whileInView={{ width: '100%' }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        />
      </h2>
      {subtitle && (
        <p className="text-gray-500 dark:text-gray-400 mt-4 transition-colors duration-300">{subtitle}</p>
      )}
    </div>
  )
}

