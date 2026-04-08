'use client'

import Image from 'next/image'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#1e3a5f] text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="mb-4">
              <Image
                src="/images/로고_1-removebg-preview.png"
                alt="CES - Christine English School"
                width={150}
                height={50}
                className="h-12 w-auto brightness-0 invert"
              />
            </div>
            <p className="text-white/70 leading-relaxed mb-6 max-w-md">
              미국 괌에서 한국 학생들을 위한 맞춤형 영어 교육 프로그램을 운영합니다.
              안전하고 체계적인 교육 환경에서 글로벌 인재로 성장하세요.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">바로가기</h3>
            <ul className="space-y-2">
              {[
                { label: '소개', id: 'about' },
                { label: '프로그램', id: 'programs' },
                { label: '특징', id: 'features' },
                { label: '후기', id: 'testimonials' },
                { label: '문의하기', id: 'contact' },
              ].map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => {
                      const element = document.getElementById(item.id)
                      if (element) element.scrollIntoView({ behavior: 'smooth' })
                    }}
                    className="text-white/70 hover:text-white transition-colors"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">상담 문의</h3>
            <ul className="space-y-2 text-white/70">
              <li>평일 09:00 - 18:00</li>
              <li>주말 및 공휴일 휴무</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Footer - Company Info */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-white/50 text-center md:text-left">
              <p>상호: 제이코리아 | 대표: 이주영</p>
              <p>사업자등록번호: 278-30-01540</p>
              <p>주소: 서울특별시 강남구 도곡로84길 6, B1층 25-68호</p>
            </div>
            <div className="text-sm text-white/50">
              &copy; {currentYear} CES. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
