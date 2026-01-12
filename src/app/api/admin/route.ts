import { NextRequest, NextResponse } from 'next/server'

// POST - 어드민 인증
export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { password } = body

    const adminPassword = process.env.ADMIN_PASSWORD || 'ces2024admin'

    if (password === adminPassword) {
      return NextResponse.json({ success: true })
    }

    return NextResponse.json(
      { error: 'Invalid password' },
      { status: 401 }
    )
  } catch (error) {
    console.error('Auth error:', error)
    return NextResponse.json({ error: 'Authentication failed' }, { status: 500 })
  }
}
