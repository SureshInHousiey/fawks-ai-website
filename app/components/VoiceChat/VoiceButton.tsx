'use client'

import { useState, useRef } from 'react'
import { Mic, Brain, Volume2 } from 'lucide-react'
import { motion } from 'framer-motion'

type VoiceState = 'idle' | 'listening' | 'thinking' | 'speaking' | 'error'

export function VoiceButton() {
  const [state, setState] = useState<VoiceState>('idle')
  const [errorMessage, setErrorMessage] = useState<string | null>(null)
  const mediaRecorder = useRef<MediaRecorder | null>(null)
  const audioChunks = useRef<Blob[]>([])
  const audioPlayer = useRef<HTMLAudioElement | null>(null)

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true })
      mediaRecorder.current = new MediaRecorder(stream)
      audioChunks.current = []

      mediaRecorder.current.ondataavailable = (event) => {
        audioChunks.current.push(event.data)
      }

      mediaRecorder.current.onstop = async () => {
        const audioBlob = new Blob(audioChunks.current, { type: 'audio/wav' })
        await sendAudioToWebhook(audioBlob)
      }

      mediaRecorder.current.start()
      setState('listening')
      setErrorMessage(null)
    } catch (error) {
      console.error('Error accessing microphone:', error)
      setErrorMessage('Unable to access the microphone. Please check your permissions and try again.')
      setState('error')
    }
  }

  const stopRecording = () => {
    if (mediaRecorder.current && state === 'listening') {
      mediaRecorder.current.stop()
      setState('thinking')
    }
  }

  const sendAudioToWebhook = async (audioBlob: Blob) => {
    try {
      const formData = new FormData()
      formData.append('audio', audioBlob)

      setState('thinking')
      const response = await fetch('/api/voice-chat', {
        method: 'POST',
        body: formData,
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.error || `Webhook call failed: ${response.status} ${response.statusText}`)
      }

      const audioResponse = await response.blob()
      playResponse(audioResponse)
    } catch (error) {
      console.error('Error sending audio:', error)
      setErrorMessage(error instanceof Error ? error.message : 'An unexpected error occurred. Please try again.')
      setState('error')
    }
  }

  const playResponse = (audioBlob: Blob) => {
    const url = URL.createObjectURL(audioBlob)
    if (!audioPlayer.current) {
      audioPlayer.current = new Audio(url)
      audioPlayer.current.onended = () => {
        setState('idle')
        URL.revokeObjectURL(url)
      }
    } else {
      audioPlayer.current.src = url
    }
    
    setState('speaking')
    audioPlayer.current.play()
  }

  const handleClick = () => {
    if (state === 'idle' || state === 'error') {
      startRecording()
    } else {
      if (audioPlayer.current) {
        audioPlayer.current.pause()
      }
      if (mediaRecorder.current) {
        mediaRecorder.current.stop()
      }
      setState('idle')
    }
  }

  const getIcon = () => {
    switch (state) {
      case 'listening':
        return <Mic className="h-6 w-6" />
      case 'thinking':
        return <Brain className="h-6 w-6" />
      case 'speaking':
        return <Volume2 className="h-6 w-6" />
      case 'error':
        return <Mic className="h-6 w-6" />
      default:
        return <Mic className="h-6 w-6" />
    }
  }

  const getText = () => {
    switch (state) {
      case 'listening':
        return 'Listening...'
      case 'thinking':
        return 'Thinking...'
      case 'speaking':
        return 'Speaking...'
      case 'error':
        return 'Try Again'
      default:
        return 'Tap to talk'
    }
  }

  return (
    <>
      <motion.button
        onClick={handleClick}
        className={`
          fixed bottom-6 right-6 z-50
          flex items-center gap-2 px-6 py-3
          rounded-full font-medium text-white
          transition-all duration-300
          shadow-lg hover:shadow-xl
          ${state === 'idle' ? 'bg-[#F05A28] hover:bg-[#D04A18]' : ''}
          ${state === 'listening' ? 'bg-green-500 hover:bg-green-600 animate-pulse' : ''}
          ${state === 'thinking' ? 'bg-blue-500 hover:bg-blue-600' : ''}
          ${state === 'speaking' ? 'bg-purple-500 hover:bg-purple-600' : ''}
          ${state === 'error' ? 'bg-red-500 hover:bg-red-600' : ''}
        `}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <motion.span
          animate={{ rotate: state === 'thinking' ? 360 : 0 }}
          transition={{ duration: 2, repeat: state === 'thinking' ? Infinity : 0, ease: 'linear' }}
        >
          {getIcon()}
        </motion.span>
        <span>{getText()}</span>
      </motion.button>
      {errorMessage && (
        <div className="fixed bottom-20 right-6 z-50 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded max-w-md">
          <strong className="font-bold">Error: </strong>
          <span className="block sm:inline">{errorMessage}</span>
        </div>
      )}
    </>
  )
}

