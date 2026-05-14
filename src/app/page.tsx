import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import Experience from '@/components/Experience'
import Education from '@/components/Education'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import FadeIn from '@/components/FadeIn'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <FadeIn><Skills /></FadeIn>
        <FadeIn><Projects /></FadeIn>
        <FadeIn><Experience /></FadeIn>
        <FadeIn><Education /></FadeIn>
        <Contact />
      </main>
      <Footer />
    </>
  )
}
