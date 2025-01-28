import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    
    // Here you would integrate with your actual call webhook
    // For now, we'll just log the data
    console.log('Call initiated for:', body);

    return NextResponse.json({ success: true, message: 'Call initiated successfully' });
  } catch (error) {
    console.error('Error initiating call:', error);
    return NextResponse.json({ success: false, error: 'Failed to initiate call' }, { status: 500 });
  }
}

