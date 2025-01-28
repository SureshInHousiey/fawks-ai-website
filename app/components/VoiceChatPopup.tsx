'use client';

import React, { useEffect, useRef, useState } from 'react';
import { MessageCircle, X } from 'lucide-react';

interface VoiceChatState {
  isRecording: boolean;
  mediaRecorder: MediaRecorder | null;
  audioChunks: Blob[];
  audioPlayer: HTMLAudioElement;
  sessionId: string;
  stream: MediaStream | null;
}

const VoiceChatPopup = () => {
  const [isPopupActive, setIsPopupActive] = useState(false);
  const [buttonState, setButtonState] = useState<'tap to talk' | 'listening' | 'thinking' | 'speaking'>('tap to talk');
  const [state, setState] = useState<VoiceChatState>({
    isRecording: false,
    mediaRecorder: null,
    audioChunks: [],
    audioPlayer: new Audio(),
    sessionId: '',
    stream: null,
  });

  const generateUUID = () => {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
      const r = (Math.random() * 16) | 0;
      const v = c === 'x' ? r : (r & 0x3) | 0x8;
      return v.toString(16);
    });
  };

  useEffect(() => {
    // Generate or retrieve session ID
    const existingSessionId = localStorage.getItem('sessionId');
    const sessionId = existingSessionId || generateUUID();
    if (!existingSessionId) {
      localStorage.setItem('sessionId', sessionId);
    }
    setState(prev => ({ ...prev, sessionId }));

    // Setup audio
    const setupRecording = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        setState(prev => ({ ...prev, stream }));
      } catch (err) {
        console.error('Error accessing microphone:', err);
        alert('Unable to access microphone. Please check permissions.');
      }
    };
    setupRecording();

    return () => {
      if (state.stream) {
        state.stream.getTracks().forEach(track => track.stop());
      }
    };
  }, []);

  const setupVoiceActivityDetection = (stream: MediaStream) => {
    const audioContext = new AudioContext();
    const source = audioContext.createMediaStreamSource(stream);
    const processor = audioContext.createScriptProcessor(2048, 1, 1);
    
    let silenceStart = Date.now();
    const SILENCE_THRESHOLD = 1500;

    processor.onaudioprocess = (e) => {
      const input = e.inputBuffer.getChannelData(0);
      let sum = 0;
      
      for (let i = 0; i < input.length; i++) {
        sum += Math.abs(input[i]);
      }
      
      const average = sum / input.length;
      
      if (average < 0.01) {
        if (Date.now() - silenceStart > SILENCE_THRESHOLD) {
          stopRecording();
          source.disconnect();
          processor.disconnect();
        }
      } else {
        silenceStart = Date.now();
      }
    };
    
    source.connect(processor);
    processor.connect(audioContext.destination);
  };

  const startRecording = () => {
    if (!state.stream) return;
    
    const mediaRecorder = new MediaRecorder(state.stream);
    const audioChunks: Blob[] = [];
    
    mediaRecorder.ondataavailable = (event) => {
      audioChunks.push(event.data);
    };
    
    mediaRecorder.onstop = () => {
      processAudioData(audioChunks);
    };
    
    mediaRecorder.start();
    setState(prev => ({ ...prev, mediaRecorder, audioChunks, isRecording: true }));
    setButtonState('listening');
    
    setupVoiceActivityDetection(state.stream);
  };

  const stopRecording = () => {
    if (state.mediaRecorder && state.mediaRecorder.state !== 'inactive') {
      state.mediaRecorder.stop();
      setState(prev => ({ ...prev, isRecording: false }));
      setButtonState('thinking');
    }
  };

  const processAudioData = async (audioChunks: Blob[]) => {
    const audioBlob = new Blob(audioChunks, { type: 'audio/wav' });
    const formData = new FormData();
    formData.append('audio', audioBlob);

    try {
      const response = await fetch('https://n8n.fawks.ai/webhook/1a073208-ba5b-4201-8767-a9ca8b7a0366', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'audio/mp3',
          'Session-ID': state.sessionId
        },
      });

      if (!response.ok) {
        throw new Error(`Network response was not ok: ${response.status}`);
      }

      const responseBlob = await response.blob();
      if (responseBlob.size === 0) {
        throw new Error('Received empty audio blob from server');
      }

      playResponse(responseBlob);
    } catch (error) {
      console.error('Error processing audio:', error);
      setButtonState('tap to talk');
    }
  };

  const playResponse = (audioBlob: Blob) => {
    const audioUrl = URL.createObjectURL(audioBlob);
    const audioPlayer = new Audio(audioUrl);
    
    audioPlayer.onplay = () => setButtonState('speaking');
    audioPlayer.onended = () => setButtonState('tap to talk');
    
    audioPlayer.play().catch(error => {
      console.error('Audio playback failed:', error);
      setButtonState('tap to talk');
    });
  };

  const handleControlClick = () => {
    if (state.isRecording) {
      stopRecording();
    } else if (state.audioPlayer.paused) {
      startRecording();
    }
  };

  const resetState = () => {
    if (state.mediaRecorder && state.mediaRecorder.state !== 'inactive') {
      state.mediaRecorder.stop();
    }
    state.audioPlayer.pause();
    state.audioPlayer.currentTime = 0;
    setState(prev => ({ ...prev, isRecording: false }));
    setButtonState('tap to talk');
  };

  return (
    <div className="fixed bottom-5 right-5 z-50">
      <button 
        onClick={() => setIsPopupActive(!isPopupActive)}
        className="w-14 h-14 rounded-full bg-blue-600 text-white shadow-lg hover:scale-110 transition-transform duration-300 flex items-center justify-center"
      >
        <MessageCircle className="w-6 h-6" />
      </button>
      
      {isPopupActive && (
        <div className="absolute bottom-16 right-0 w-72 h-96 bg-white dark:bg-gray-800 rounded-xl shadow-xl animate-slideUp">
          <div className="p-4 bg-gray-100 dark:bg-gray-700 rounded-t-xl flex justify-between items-center">
            <span className="text-gray-800 dark:text-gray-200">Voice Chat</span>
            <button 
              onClick={() => {
                setIsPopupActive(false);
                resetState();
              }}
              className="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
          
          <div className="flex items-center justify-center h-[calc(100%-4rem)]">
            <button
              onClick={handleControlClick}
              className={`w-36 h-36 rounded-full text-white font-medium relative overflow-hidden transition-colors duration-300
                ${buttonState === 'listening' ? 'bg-red-500' : ''}
                ${buttonState === 'thinking' ? 'bg-yellow-500' : ''}
                ${buttonState === 'speaking' ? 'bg-green-500' : ''}
                ${buttonState === 'tap to talk' ? 'bg-blue-600' : ''}
              `}
            >
              <span className="relative z-10">{buttonState}</span>
              {buttonState === 'listening' && (
                <div className="absolute inset-0 animate-pulse bg-white/20" />
              )}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default VoiceChatPopup;

