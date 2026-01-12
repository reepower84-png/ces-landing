'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

const navItems = [
  { id: 'home', label: '홈' },
  { id: 'about', label: '소개' },
  { id: 'programs', label: '프로그램' },
  { id: 'features', label: '특징' },
  { id: 'testimonials', label: '후기' },
  { id: 'contact', label: '문의하기' },
]

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Header background on scroll
      setIsScrolled(window.scrollY > 50)

      // Active section detection
      const sections = navItems.map(item => document.getElementById(item.id))
      const scrollPosition = window.scrollY + 100

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i]
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id)
          break
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div
            className="flex items-center cursor-pointer"
            onClick={() => scrollToSection('home')}
          >
            <Image
              src="/images/로고_1-removebg-preview.png"
              alt="CES - Christine English School"
              width={150}
              height={50}
              className="h-12 w-auto"
              priority
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`nav-link text-sm font-medium transition-colors ${
                  activeSection === item.id
                    ? isScrolled ? 'text-[#1e3a5f] active' : 'text-white active'
                    : isScrolled ? 'text-gray-600 hover:text-[#1e3a5f]' : 'text-white/80 hover:text-white'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* CTA Button - Desktop */}
          <button
            onClick={() => scrollToSection('contact')}
            className="hidden md:block btn-primary px-6 py-2.5 rounded-full text-white text-sm font-semibold"
          >
            무료 상담 신청
          </button>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="메뉴 열기"
          >
            <div className="w-6 h-5 relative flex flex-col justify-between">
              <span
                className={`w-full h-0.5 transition-all duration-300 ${
                  isScrolled ? 'bg-[#1e3a5f]' : 'bg-white'
                } ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}
              />
              <span
                className={`w-full h-0.5 transition-all duration-300 ${
                  isScrolled ? 'bg-[#1e3a5f]' : 'bg-white'
                } ${isMenuOpen ? 'opacity-0' : ''}`}
              />
              <span
                className={`w-full h-0.5 transition-all duration-300 ${
                  isScrolled ? 'bg-[#1e3a5f]' : 'bg-white'
                } ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}
              />
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            isMenuOpen ? 'max-h-96 pb-6' : 'max-h-0'
          }`}
        >
          <nav className="flex flex-col space-y-4 bg-white/95 backdrop-blur-md rounded-2xl p-6 mt-2 shadow-lg">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-left text-base font-medium py-2 px-4 rounded-lg transition-colors ${
                  activeSection === item.id
                    ? 'text-[#1e3a5f] bg-[#1e3a5f]/10'
                    : 'text-gray-600 hover:text-[#1e3a5f] hover:bg-gray-100'
                }`}
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => scrollToSection('contact')}
              className="btn-primary px-6 py-3 rounded-full text-white text-sm font-semibold text-center mt-4"
            >
              무료 상담 신청
            </button>
          </nav>
        </div>
      </div>
    </header>
  )
}
