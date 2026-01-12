'use client'

export default function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById('contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with overlay */}
      <div className="absolute inset-0">
        {/* Background Image - 미국 국기 이미지 */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1508433957232-3107f5fd5995?ixlib=rb-4.0.3&auto=format&fit=crop&w=2092&q=80')`
          }}
        />
        {/* Dark gradient overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#1e3a5f]/90 via-[#2d5a8a]/80 to-[#4a90a4]/70" />
        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#f4a261]/10 rounded-full blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fadeInUp">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-8">
            <span className="w-2 h-2 bg-[#f4a261] rounded-full animate-pulse" />
            <span className="text-white/90 text-sm font-medium">미국 괌 공식 교육 파트너</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            미국 교육을,
            <br />
            <span className="text-[#f4a261]">가장 안전한 첫 경험</span>으로.
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed">
            괌에서 시작하는 우리 아이의 글로벌 도전.
            <br className="hidden sm:block" />
            안전하고 체계적인 교육 환경에서 자신감을 키워갑니다.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={scrollToContact}
              className="btn-primary px-8 py-4 rounded-full text-white text-lg font-semibold w-full sm:w-auto"
            >
              무료 상담 신청하기
            </button>
            <button
              onClick={() => {
                const element = document.getElementById('programs')
                if (element) element.scrollIntoView({ behavior: 'smooth' })
              }}
              className="group flex items-center gap-2 px-8 py-4 rounded-full border-2 border-white/30 text-white hover:bg-white/10 transition-all w-full sm:w-auto justify-center"
            >
              프로그램 살펴보기
              <svg
                className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Trust indicators */}
          <div className="mt-16 grid grid-cols-3 gap-8 max-w-lg mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-1">25+</div>
              <div className="text-sm text-white/60">년 교육 경험</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-1">500+</div>
              <div className="text-sm text-white/60">수료 학생</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-1">98%</div>
              <div className="text-sm text-white/60">만족도</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-white/50 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  )
}
