import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Programs from '@/components/Programs'
import Features from '@/components/Features'
import Testimonials from '@/components/Testimonials'
import ContactForm from '@/components/ContactForm'
import Footer from '@/components/Footer'
import KakaoFloatingButton from '@/components/KakaoFloatingButton'

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <About />
      <Programs />
      <Features />
      <Testimonials />
      <ContactForm />
      <Footer />
      <KakaoFloatingButton />
    </main>
  )
}
