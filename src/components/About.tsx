'use client'

export default function About() {
  const scrollToContact = () => {
    const element = document.getElementById('contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-[#4a90a4] font-semibold text-sm tracking-wider uppercase mb-4">
            About CES
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1e3a5f] mb-6">
            Christine English School을 소개합니다
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
            CES는 미국 괌에서 한국 학생들을 위한 맞춤형 영어 교육 프로그램을
            운영하고 있습니다. 안전하고 체계적인 교육 환경에서 아이들의
            영어 실력과 글로벌 마인드를 키워갑니다.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {/* Feature 1 */}
          <div className="card-hover bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border border-gray-100">
            <div className="w-14 h-14 bg-[#1e3a5f]/10 rounded-xl flex items-center justify-center mb-6">
              <svg className="w-7 h-7 text-[#1e3a5f]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-[#1e3a5f] mb-3">안전한 교육 환경</h3>
            <p className="text-gray-600 leading-relaxed">
              미국령 괌의 안전한 환경에서 24시간 관리 시스템을 통해
              학부모님께서 안심하실 수 있는 교육을 제공합니다.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="card-hover bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border border-gray-100">
            <div className="w-14 h-14 bg-[#4a90a4]/10 rounded-xl flex items-center justify-center mb-6">
              <svg className="w-7 h-7 text-[#4a90a4]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-[#1e3a5f] mb-3">검증된 커리큘럼</h3>
            <p className="text-gray-600 leading-relaxed">
              25년 이상의 교육 경험을 바탕으로 한국 학생에게 최적화된
              미국식 영어 교육 커리큘럼을 운영합니다.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="card-hover bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border border-gray-100">
            <div className="w-14 h-14 bg-[#f4a261]/10 rounded-xl flex items-center justify-center mb-6">
              <svg className="w-7 h-7 text-[#f4a261]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-[#1e3a5f] mb-3">소규모 맞춤 교육</h3>
            <p className="text-gray-600 leading-relaxed">
              학생 개개인의 수준과 목표에 맞춘 소규모 클래스로
              효과적인 영어 교육을 실현합니다.
            </p>
          </div>
        </div>

        {/* Quote Section */}
        <div className="bg-gradient-to-r from-[#1e3a5f] to-[#2d5a8a] rounded-3xl p-8 sm:p-12 text-center">
          <svg className="w-12 h-12 text-white/20 mx-auto mb-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
          </svg>
          <blockquote className="text-2xl sm:text-3xl font-bold text-white mb-6 leading-relaxed">
            "영어 실력보다 먼저 바뀌는 건,
            <br />
            아이의 자신감입니다."
          </blockquote>
          <p className="text-white/70 text-lg">
            CES는 단순한 영어 교육을 넘어 아이들의 자신감과 글로벌 마인드를 키워갑니다.
          </p>
          <button
            onClick={scrollToContact}
            className="mt-8 bg-white text-[#1e3a5f] px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
          >
            상담 신청하기
          </button>
        </div>
      </div>
    </section>
  )
}
