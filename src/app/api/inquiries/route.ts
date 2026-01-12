import { NextRequest, NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'

// Discord webhook notification
async function sendDiscordNotification(name: string, phone: string, message: string) {
  const webhookUrl = process.env.DISCORD_WEBHOOK_URL
  if (!webhookUrl) {
    console.error('Discord webhook URL not configured')
    return
  }

  const embed = {
    title: '새로운 상담 문의가 접수되었습니다',
    color: 0x1e3a5f,
    fields: [
      {
        name: '이름',
        value: name,
        inline: true,
      },
      {
        name: '연락처',
        value: phone,
        inline: true,
      },
      {
        name: '문의 내용',
        value: message || '(내용 없음)',
        inline: false,
      },
    ],
    timestamp: new Date().toISOString(),
    footer: {
      text: 'CES - Christine English School',
    },
  }

  try {
    await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        embeds: [embed],
      }),
    })
  } catch (error) {
    console.error('Failed to send Discord notification:', error)
  }
}

// GET - 모든 문의 조회
export async function GET() {
  try {
    const { data, error } = await supabase
      .from('inquiries')
      .select('*')
      .order('created_at', { ascending: false })

    if (error) {
      console.error('Supabase error:', error)
      return NextResponse.json({ error: 'Failed to get inquiries' }, { status: 500 })
    }

    return NextResponse.json(data)
  } catch (error) {
    console.error('Failed to get inquiries:', error)
    return NextResponse.json({ error: 'Failed to get inquiries' }, { status: 500 })
  }
}

// POST - 새 문의 추가
export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, phone, message } = body

    if (!name || !phone) {
      return NextResponse.json(
        { error: 'Name and phone are required' },
        { status: 400 }
      )
    }

    const { data, error } = await supabase
      .from('inquiries')
      .insert([
        {
          name,
          phone,
          message: message || '',
          status: '대기중',
        }
      ])
      .select()
      .single()

    if (error) {
      console.error('Supabase error:', error)
      return NextResponse.json({ error: 'Failed to create inquiry' }, { status: 500 })
    }

    // Send Discord notification
    await sendDiscordNotification(name, phone, message || '')

    return NextResponse.json(data, { status: 201 })
  } catch (error) {
    console.error('Failed to create inquiry:', error)
    return NextResponse.json({ error: 'Failed to create inquiry' }, { status: 500 })
  }
}

// PATCH - 문의 상태 업데이트
export async function PATCH(request: NextRequest) {
  try {
    const body = await request.json()
    const { id, status } = body

    if (!id || !status) {
      return NextResponse.json(
        { error: 'ID and status are required' },
        { status: 400 }
      )
    }

    const validStatuses = ['대기중', '연락완료', '상담완료']
    if (!validStatuses.includes(status)) {
      return NextResponse.json(
        { error: 'Invalid status' },
        { status: 400 }
      )
    }

    const { data, error } = await supabase
      .from('inquiries')
      .update({ status })
      .eq('id', id)
      .select()
      .single()

    if (error) {
      console.error('Supabase error:', error)
      return NextResponse.json({ error: 'Failed to update inquiry' }, { status: 500 })
    }

    if (!data) {
      return NextResponse.json(
        { error: 'Inquiry not found' },
        { status: 404 }
      )
    }

    return NextResponse.json(data)
  } catch (error) {
    console.error('Failed to update inquiry:', error)
    return NextResponse.json({ error: 'Failed to update inquiry' }, { status: 500 })
  }
}

// DELETE - 문의 삭제
export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const id = searchParams.get('id')

    if (!id) {
      return NextResponse.json(
        { error: 'ID is required' },
        { status: 400 }
      )
    }

    const { error } = await supabase
      .from('inquiries')
      .delete()
      .eq('id', id)

    if (error) {
      console.error('Supabase error:', error)
      return NextResponse.json({ error: 'Failed to delete inquiry' }, { status: 500 })
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Failed to delete inquiry:', error)
    return NextResponse.json({ error: 'Failed to delete inquiry' }, { status: 500 })
  }
}
