'use client'

const features = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: '미국 괌 현지 운영',
    description: '한국에서 비행기로 4시간. 시차 1시간의 가까운 미국에서 진정한 미국 교육을 경험합니다.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
    title: '원어민 전담 강사진',
    description: '미국 교원 자격증을 보유한 원어민 강사가 체계적인 영어 교육을 담당합니다.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
      </svg>
    ),
    title: '체계적인 관리 시스템',
    description: '주간 리포트, 정기 상담, 실시간 소통으로 학부모님께 투명한 정보를 제공합니다.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: '24시간 케어',
    description: '숙소, 식사, 이동 등 생활 전반에 걸친 24시간 밀착 케어로 안전을 보장합니다.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: '다양한 체험 활동',
    description: '현지 학교에서 진행되는 유일한 체험형 프로그램\n해양 스포츠, 문화 탐방, 봉사활동까지 교실 밖에서 펼쳐지는 생생한 학습 경험',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: '검증된 신뢰',
    description: '25년 이상의 운영 경험과 500명 이상의 수료생이 증명하는 신뢰할 수 있는 교육.',
  },
]

export default function Features() {
  const scrollToContact = () => {
    const element = document.getElementById('contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="features" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-[#4a90a4] font-semibold text-sm tracking-wider uppercase mb-4">
            Why CES
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1e3a5f] mb-6">
            CES가 특별한 이유
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            학부모님이 가장 걱정하시는 안전과 교육 품질,
            CES는 두 가지 모두를 약속드립니다.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="card-hover group p-8 rounded-2xl border border-gray-100 hover:border-[#1e3a5f]/20 bg-white"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-[#1e3a5f]/10 to-[#4a90a4]/10 rounded-2xl flex items-center justify-center mb-6 text-[#1e3a5f] group-hover:bg-[#1e3a5f] group-hover:text-white transition-all duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-[#1e3a5f] mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed whitespace-pre-line">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Video */}
        <div className="mt-20">
          <div className="text-center mb-8">
            <h3 className="text-2xl sm:text-3xl font-bold text-[#1e3a5f]">생생한 현장 영상</h3>
            <p className="text-gray-500 mt-2">CES의 살아있는 교육 현장을 직접 확인해보세요</p>
          </div>
          <div className="max-w-3xl mx-auto rounded-3xl overflow-hidden shadow-lg bg-black">
            <video
              src="/videos/KakaoTalk_20251226_095552495.mp4"
              controls
              playsInline
              autoPlay
              muted
              loop
              preload="metadata"
              onTimeUpdate={(e) => {
                const v = e.currentTarget
                if (v.currentTime >= 97) {
                  v.currentTime = 0
                  v.play().catch(() => {})
                }
              }}
              className="w-full h-auto"
            />
          </div>
        </div>

        {/* Quote Banner */}
        <div className="mt-20 relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#f4a261]/10 to-[#4a90a4]/10 p-8 sm:p-12">
          <div className="relative z-10 text-center">
            <h3 className="text-2xl sm:text-3xl font-bold text-[#1e3a5f] mb-4">
              "몇 주의 경험이, 몇 년의 차이를 만듭니다."
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto mb-8">
              짧은 기간이지만 미국 현지에서의 생생한 경험은
              아이의 영어 실력과 세계관을 완전히 바꿔놓습니다.
            </p>
            <button
              onClick={scrollToContact}
              className="btn-primary px-8 py-4 rounded-full text-white font-semibold"
            >
              우리 아이 변화 시작하기
            </button>
          </div>

          {/* Decorative elements */}
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-[#f4a261]/20 rounded-full blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-[#4a90a4]/20 rounded-full blur-3xl" />
        </div>
      </div>
    </section>
  )
}
