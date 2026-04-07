export default function KakaoFloatingButton() {
  return (
    <a
      href="http://pf.kakao.com/_nxmTdX/chat"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="카카오톡 상담하기"
      className="fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full shadow-lg hover:scale-110 transition-transform duration-200"
    >
      <img
        src="/images/카톡_원형_로고.png"
        alt="카카오톡 상담"
        className="w-full h-full rounded-full"
      />
    </a>
  )
}
