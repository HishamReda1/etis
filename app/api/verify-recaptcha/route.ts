// app/api/verify-recaptcha/route.ts
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  const { token } = await request.json()
  
  const secretKey = process.env.RECAPTCHA_SECRET_KEY
  if (!secretKey) {
    return NextResponse.json(
      { error: "Server configuration error" },
      { status: 500 }
    )
  }

  try {
    const response = await fetch(
      `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${token}`,
      { method: 'POST' }
    )
    const data = await response.json()
    
    if (!data.success) {
      console.error('reCAPTCHA failed:', data['error-codes'])
      return NextResponse.json(
        { error: "Failed security verification" },
        { status: 400 }
      )
    }

    return NextResponse.json({ success: true, score: data.score })
  } catch (error) {
    console.error('reCAPTCHA network error:', error)
    return NextResponse.json(
      { error: "Verification service unavailable" },
      { status: 503 }
    )
  }
}