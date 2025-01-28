'use client'

import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { Play, Pause } from 'lucide-react'
import { Pizza, Hotel, Scissors, Stethoscope, ShoppingCart, Plane } from 'lucide-react'

const bots = [
  {
    icon: Pizza,
    title: 'Pizza shop',
    description: 'Enhance customer experience by automating order taking and inquiries',
    audioUrl: '/audio/pizza-shop-ai-voice-agent.mp3',
    duration: '0:56'
  },
  {
    icon: Hotel,
    title: 'Gym',
    description: 'Automate membership queries, class bookings, and reminders for a seamless gym experience.',
    audioUrl: '/audio/gym.mp3',
    duration: '1:29'
  },
  {
    icon: Scissors,
    title: 'Real Estate Agent',
    description: 'Qualify buyers, schedule property viewings, and streamline inquiries with AI voice assistance.',
    audioUrl: '/audio/real-estate-agent.mp3',
    duration: '1:01'
  },
  {
    icon: Stethoscope,
    title: 'Dentist',
    description: 'Automate appointment reminders and queries to improve patient communication',
    audioUrl: '/audio/dentist-ai-voice-agent.mp3',
    duration: '1:19'
  },
  {
    icon: ShoppingCart,
    title: 'Ecommerce support',
    description: 'Handle order tracking and product inquiries with AI voice support.',
    audioUrl: '/audio/e-commerce-support-ai-voice-agent.mp3',
    duration: '0:54'
  },
  {
    icon: Plane,
    title: 'Home Mortgage',
    description: 'Qualify leads by assessing credit scores, property needs, and timelines with AI voice assistance.',
    audioUrl: '/audio/mortgage-ai-voice-agent.mp3',
    duration: '2:34'
  }
]

const FeaturedBots = () => {
  const [playingAudio, setPlayingAudio] = useState<number | null>(null)
  const audioRefs = useRef<HTMLAudioElement[]>([])
  const [progress, setProgress] = useState<{ [key: number]: number }>({})

  const handlePlayPause = (index: number) => {
    if (playingAudio === index) {
      audioRefs.current[index].pause()
      setPlayingAudio(null)
    } else {
      if (playingAudio !== null) {
        audioRefs.current[playingAudio].pause()
      }
      audioRefs.current[index].play()
      setPlayingAudio(index)
    }
  }

  const handleTimeUpdate = (index: number) => {
    const audio = audioRefs.current[index]
    if (audio) {
      setProgress(prev => ({
        ...prev,
        [index]: (audio.currentTime / audio.duration) * 100
      }))
    }
  }

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60)
    const seconds = Math.floor(time % 60)
    return `${minutes}:${seconds.toString().padStart(2, '0')}`
  }

  return (
    <section className="py-20 bg-[#0B162C]">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-white text-center mb-4">
          Revolutionize Your Business with FawksAI Voice Agents
        </h2>
        <p className="text-gray-400 text-center max-w-3xl mx-auto mb-12">
        FawksAI voice agents automate tasks, enhance customer interactions, and boost conversions. From booking appointments to resolving inquiries, our solutions save time, reduce costs, and deliver seamless experiences tailored to your business needs
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {bots.map((bot, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-[#1A2333] rounded-lg p-6 hover:bg-[#232D40] transition-colors"
            >
              <div className="flex items-center mb-4">
                <bot.icon className="w-6 h-6 text-[#F05A28] mr-3" />
                <h3 className="text-xl font-semibold text-white">{bot.title}</h3>
              </div>
              
              <p className="text-gray-400 mb-6 min-h-[60px]">{bot.description}</p>
              
              <div className="relative">
                <div className="flex items-center space-x-4">
                  <button
                    onClick={() => handlePlayPause(index)}
                    className="w-8 h-8 rounded-full bg-[#F05A28] flex items-center justify-center text-white hover:bg-[#D04A18] transition-colors"
                  >
                    {playingAudio === index ? <Pause size={16} /> : <Play size={16} />}
                  </button>
                  
                  <div className="flex-1 h-1 bg-gray-700 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-[#F05A28] transition-all duration-100"
                      style={{ width: `${progress[index] || 0}%` }}
                    />
                  </div>
                  
                  <span className="text-sm text-gray-400 min-w-[40px]">
                    {playingAudio === index 
                      ? formatTime(audioRefs.current[index]?.currentTime || 0)
                      : bot.duration
                    }
                  </span>
                </div>
                
                <audio
                  ref={el => el && (audioRefs.current[index] = el)}
                  src={bot.audioUrl}
                  onEnded={() => setPlayingAudio(null)}
                  onTimeUpdate={() => handleTimeUpdate(index)}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturedBots

