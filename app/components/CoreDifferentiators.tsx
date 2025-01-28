import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { AnimatedHeading } from './ui/animated-heading'

const differentiators = [
  {
    title: 'Cognitive Continuity',
    description: 'Real-time contextual understanding for seamless conversations.'
  },
  {
    title: 'Adaptive Personalization',
    description: 'Behavior-based dynamic responses tailored to each user.'
  },
  {
    title: 'Cognitive Sentience',
    description: 'Emotion recognition and intelligent replies for human-like interactions.'
  }
]

const CoreDifferentiators = () => {
  return (
    <section className="py-20 bg-white dark:bg-[#0B162C] transition-colors duration-300" id="core-differentiators">
      <div className="container mx-auto px-4">
        <AnimatedHeading className="text-[#0B162C] dark:text-white">
          Core Differentiators
        </AnimatedHeading>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {differentiators.map((diff, index) => (
            <Card key={index} className="bg-white dark:bg-gray-800 text-[#0B162C] dark:text-white transform rotate-3 hover:rotate-0 transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-[#F05A28]">{diff.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-300">{diff.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CoreDifferentiators

