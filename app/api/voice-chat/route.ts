// app/api/voice-chat/route.ts
import { NextRequest, NextResponse } from 'next/server'

const N8N_WEBHOOK_URL = 'https://n8n.fawks.ai/webhook-test/1a073208-ba5b-4201-8767-a9ca8b7a0366'

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData()
    const audioFile = formData.get('audio') as Blob

    if (!audioFile) {
      return NextResponse.json(
        { error: 'No audio file provided' },
        { status: 400 }
      )
    }

    const n8nResponse = await fetch(N8N_WEBHOOK_URL, {
      method: 'POST',
      body: formData,
    })

    if (!n8nResponse.ok) {
      throw new Error(`N8n webhook call failed: ${n8nResponse.status}`)
    }

    const responseAudio = await n8nResponse.blob()
    
    return new NextResponse(responseAudio, {
      headers: {
        'Content-Type': 'audio/wav',
      },
    })
  } catch (error) {
    console.error('Error processing voice chat:', error)
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'An unexpected error occurred' },
      { status: 500 }
    )
  }
}

