import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'CES - Christine English School | 괌 영어 교육 프로그램',
  description: '미국 괌에서 진행하는 한국인 대상 영어 유학 및 체험 프로그램. 안전하고 신뢰할 수 있는 교육 환경에서 자녀의 영어 실력과 자신감을 키워주세요.',
  keywords: '괌 유학, 영어 캠프, 미국 교육, 영어 체험, 조기 유학, 영어 프로그램',
  openGraph: {
    title: 'CES - Christine English School',
    description: '미국 교육을, 가장 안전한 첫 경험으로.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <head>
        <link
          rel="stylesheet"
          as="style"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css"
        />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}
