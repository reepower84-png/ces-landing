'use client'

import { useState } from 'react'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      const response = await fetch('/api/inquiries', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitStatus('success')
        setFormData({ name: '', phone: '', message: '' })
      } else {
        setSubmitStatus('error')
      }
    } catch {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <span className="inline-block text-[#4a90a4] font-semibold text-sm tracking-wider uppercase mb-4">
              Contact Us
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1e3a5f] mb-6">
              무료 상담을 신청하세요
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              우리 아이에게 맞는 프로그램이 궁금하시다면,
              지금 바로 무료 상담을 신청해 주세요.
              전문 상담사가 친절하게 안내해 드립니다.
            </p>

            {/* Contact Info */}
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#1e3a5f]/10 rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-[#1e3a5f]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <div className="text-sm text-gray-500">상담 전화</div>
                  <div className="font-semibold text-[#1e3a5f]">상담 신청 후 연락드립니다</div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#1e3a5f]/10 rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-[#1e3a5f]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <div className="text-sm text-gray-500">상담 가능 시간</div>
                  <div className="font-semibold text-[#1e3a5f]">평일 09:00 - 18:00</div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#1e3a5f]/10 rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-[#1e3a5f]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <div className="text-sm text-gray-500">교육 장소</div>
                  <div className="font-semibold text-[#1e3a5f]">미국 괌</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Form */}
          <div className="bg-gray-50 p-8 sm:p-10 rounded-3xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  이름 <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="이름을 입력해 주세요"
                  className="form-input w-full px-4 py-3 rounded-xl bg-white"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  연락처 <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  placeholder="010-0000-0000"
                  className="form-input w-full px-4 py-3 rounded-xl bg-white"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  상담 문의
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  placeholder="궁금하신 점이나 상담 희망 내용을 적어주세요"
                  className="form-input w-full px-4 py-3 rounded-xl bg-white resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full btn-primary py-4 rounded-xl text-white font-semibold text-lg disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    전송 중...
                  </span>
                ) : (
                  '무료 상담 신청하기'
                )}
              </button>

              <a
                href="http://pf.kakao.com/_nxmTdX/chat"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full block text-center py-4 rounded-xl font-semibold text-lg bg-[#FEE500] text-[#3C1E1E] hover:brightness-95 transition"
              >
                카카오톡으로 상담하기
              </a>

              {submitStatus === 'success' && (
                <div className="p-4 bg-green-50 border border-green-200 rounded-xl text-green-700 text-center">
                  상담 신청이 완료되었습니다. 빠른 시일 내에 연락드리겠습니다.
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="p-4 bg-red-50 border border-red-200 rounded-xl text-red-700 text-center">
                  전송 중 오류가 발생했습니다. 다시 시도해 주세요.
                </div>
              )}

              <p className="text-xs text-gray-500 text-center">
                입력하신 정보는 상담 목적으로만 사용되며, 안전하게 보호됩니다.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
