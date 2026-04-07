'use client'

import { useState } from 'react'

const testimonials = [
  {
    name: '김*서 학부모',
    child: '초등 5학년 자녀',
    program: '단기 영어 캠프 4주',
    content: '처음엔 걱정이 많았는데, 매일 보내주시는 사진과 영상에 안심이 됐어요. 아이가 돌아와서 영어로 말하려고 노력하는 모습이 정말 대견했습니다. 자신감이 완전히 달라졌어요.',
    rating: 5,
  },
  {
    name: '이*혁 학부모',
    child: '중등 1학년 자녀',
    program: '정규 유학 프로그램 1학기',
    content: '현지 학교에서 미국 친구들과 어울리면서 영어 실력이 눈에 띄게 늘었습니다. 무엇보다 스스로 문제를 해결하려는 자립심이 생긴 것 같아 만족합니다.',
    rating: 5,
  },
  {
    name: '박*윤 학부모',
    child: '초등 3학년 자녀',
    program: '가족 동반 프로그램 2개월',
    content: '아이와 함께 괌에서 지내면서 교육도 받고 가족 시간도 가질 수 있어서 좋았어요. 선생님들이 정말 친절하고 프로페셔널해서 믿음이 갔습니다.',
    rating: 5,
  },
  {
    name: '최*우 학부모',
    child: '초등 6학년 자녀',
    program: '단기 영어 캠프 3주',
    content: '짧은 기간이었지만 아이의 변화가 놀라웠어요. 영어에 대한 두려움이 사라지고, 다음에 또 가고 싶다고 하네요. CES 덕분에 좋은 경험했습니다.',
    rating: 5,
  },
  {
    name: '정*은 학부모',
    child: '중등 2학년 자녀',
    program: '정규 유학 프로그램 1년',
    content: '1년간 보내면서 학업뿐 아니라 인성적으로도 크게 성장했습니다. 미국 친구들과의 교류, 다양한 문화 경험이 아이의 시야를 넓혀줬어요. 비용 대비 정말 만족스러운 선택이었습니다.',
    rating: 5,
  },
  {
    name: '강*호 학부모',
    child: '초등 4학년 자녀',
    program: '단기 영어 캠프 2주',
    content: '수천만 원 들여 장기 유학 보내기 전에 아이가 적응할 수 있을지 미리 경험해볼 수 있어서 좋았어요. 짧은 기간임에도 영어 자신감이 크게 늘었고, 부모로서도 결정에 확신이 생겼습니다.',
    rating: 5,
  },
  {
    name: '윤*아 학부모',
    child: '초등 5학년 자녀',
    program: '가족 동반 프로그램 1개월',
    content: '안전 문제로 유학을 망설였는데, 24시간 케어 시스템 덕분에 안심하고 보낼 수 있었어요. 매일 사진과 리포트로 아이 상황을 알 수 있어서 정말 좋았습니다. 강력 추천합니다.',
    rating: 5,
  },
  {
    name: '한*진 학부모',
    child: '중등 1학년 자녀',
    program: '단기 영어 캠프 4주',
    content: '해양 스포츠와 봉사활동까지 정말 다양한 체험을 했더라구요. 단순히 영어만 배우는 게 아니라 살아있는 교육이라는 게 느껴졌어요. 아이가 정말 행복해했습니다.',
    rating: 5,
  },
]

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [touchStartX, setTouchStartX] = useState<number | null>(null)
  const [touchEndX, setTouchEndX] = useState<number | null>(null)

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchEndX(null)
    setTouchStartX(e.targetTouches[0].clientX)
  }
  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEndX(e.targetTouches[0].clientX)
  }
  const handleTouchEnd = () => {
    if (touchStartX === null || touchEndX === null) return
    const distance = touchStartX - touchEndX
    if (distance > 50 && activeIndex < testimonials.length - 1) {
      setActiveIndex(activeIndex + 1)
    } else if (distance < -50 && activeIndex > 0) {
      setActiveIndex(activeIndex - 1)
    }
    setTouchStartX(null)
    setTouchEndX(null)
  }

  return (
    <section id="testimonials" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-[#4a90a4] font-semibold text-sm tracking-wider uppercase mb-4">
            Testimonials
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1e3a5f] mb-6">
            학부모님들의 생생한 후기
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            CES를 경험한 학부모님들이 직접 전하는 이야기입니다.
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative">
          {/* Desktop Grid */}
          <div className="hidden md:grid md:grid-cols-2 gap-6">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="card-hover bg-white p-8 rounded-2xl shadow-sm border border-gray-100"
              >
                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                {/* Content */}
                <p className="text-gray-600 leading-relaxed mb-6">
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#1e3a5f] to-[#4a90a4] rounded-full flex items-center justify-center text-white font-bold">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-semibold text-[#1e3a5f]">{testimonial.name}</div>
                    <div className="text-sm text-gray-500">
                      {testimonial.child} | {testimonial.program}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile Carousel */}
          <div className="md:hidden">
            <div
              className="overflow-hidden touch-pan-y"
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              <div
                className="flex transition-transform duration-300"
                style={{ transform: `translateX(-${activeIndex * 100}%)` }}
              >
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="w-full flex-shrink-0 px-2">
                    <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                      {/* Rating */}
                      <div className="flex gap-1 mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>

                      {/* Content */}
                      <p className="text-gray-600 leading-relaxed mb-6 text-sm">
                        "{testimonial.content}"
                      </p>

                      {/* Author */}
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-[#1e3a5f] to-[#4a90a4] rounded-full flex items-center justify-center text-white font-bold text-sm">
                          {testimonial.name.charAt(0)}
                        </div>
                        <div>
                          <div className="font-semibold text-[#1e3a5f] text-sm">{testimonial.name}</div>
                          <div className="text-xs text-gray-500">
                            {testimonial.child}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Dots */}
            <div className="flex justify-center gap-2 mt-6">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    activeIndex === index ? 'w-6 bg-[#1e3a5f]' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
