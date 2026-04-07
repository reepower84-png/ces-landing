'use client'

const programs = [
  {
    title: '단기 영어 캠프',
    duration: '2-4주',
    age: '초등 3학년 ~ 중등 3학년',
    description: '방학 기간을 활용한 집중 영어 캠프 프로그램. 미국 현지 환경에서 생생한 영어를 체험합니다.',
    features: ['원어민 강사 1:1 수업', '현지 문화 체험 활동', '24시간 케어 시스템', '수료증 발급'],
    highlight: '인기',
    color: 'from-blue-500 to-blue-600',
  },
  {
    title: '정규 유학 프로그램',
    duration: '1학기 ~ 1년',
    age: '초등 4학년 ~ 고등 2학년',
    description: '괌 현지 학교에서 정규 과정을 이수하며 미국 교육 시스템을 직접 경험합니다.',
    features: ['현지 학교 정규 수업', '홈스테이 또는 기숙사', '방과후 보충 수업', '정기 학부모 상담'],
    highlight: '추천',
    color: 'from-[#1e3a5f] to-[#2d5a8a]',
  },
  {
    title: '가족 동반 프로그램',
    duration: '1-3개월',
    age: '초등 1학년 ~ 중등 2학년',
    description: '부모님과 함께하는 괌 체류 프로그램. 자녀 교육과 가족 여행을 동시에 누릴 수 있습니다.',
    features: ['학부모 동반 가능', '가족 숙소 제공', '주말 가족 액티비티', '유연한 일정 조율'],
    highlight: '',
    color: 'from-[#4a90a4] to-[#5ba0b4]',
  },
]

export default function Programs() {
  const scrollToContact = () => {
    const element = document.getElementById('contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="programs" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-[#4a90a4] font-semibold text-sm tracking-wider uppercase mb-4">
            Programs
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1e3a5f] mb-6">
            맞춤형 교육 프로그램
          </h2>
          <div className="max-w-3xl mx-auto mb-8 px-4">
            <p className="inline-block text-base sm:text-xl md:text-2xl font-bold text-[#1e3a5f] leading-snug bg-[#f4a261]/15 border-l-4 border-[#f4a261] rounded-r-xl px-5 py-4 sm:px-7 sm:py-5">
              “수천만 원 쓰기 전, 단기간으로 직접 경험해보는<br className="sm:hidden" /> 가장 현실적인 방법”
            </p>
          </div>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            학생의 연령, 수준, 목표에 맞춘 다양한 프로그램을 제공합니다.
            전문 상담을 통해 가장 적합한 프로그램을 추천받으세요.
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <div
              key={index}
              className="card-hover bg-white rounded-2xl overflow-hidden shadow-lg"
            >
              {/* Header */}
              <div className={`bg-gradient-to-r ${program.color} p-6 relative`}>
                {program.highlight && (
                  <span className="absolute top-4 right-4 bg-[#f4a261] text-white text-xs font-bold px-3 py-1 rounded-full">
                    {program.highlight}
                  </span>
                )}
                <h3 className="text-xl font-bold text-white mb-2">{program.title}</h3>
                <div className="flex gap-4 text-white/80 text-sm">
                  <span>{program.duration}</span>
                  <span>|</span>
                  <span>{program.age}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {program.description}
                </p>

                <ul className="space-y-3 mb-6">
                  {program.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-center gap-3 text-gray-700">
                      <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={scrollToContact}
                  className="w-full bg-gray-100 hover:bg-[#1e3a5f] text-gray-700 hover:text-white py-3 rounded-xl font-semibold transition-all duration-300"
                >
                  자세히 알아보기
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Banner */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-4">
            어떤 프로그램이 우리 아이에게 맞을지 고민되시나요?
          </p>
          <button
            onClick={scrollToContact}
            className="btn-primary px-8 py-4 rounded-full text-white font-semibold"
          >
            무료 맞춤 상담 받기
          </button>
        </div>
      </div>
    </section>
  )
}
