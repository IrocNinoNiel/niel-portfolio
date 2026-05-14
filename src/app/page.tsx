import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import Experience from '@/components/Experience'
import Education from '@/components/Education'
import FAQ from '@/components/FAQ'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import FadeIn from '@/components/FadeIn'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <FadeIn><About /></FadeIn>
        <FadeIn><Skills /></FadeIn>
        <FadeIn><Projects /></FadeIn>
        <FadeIn><Experience /></FadeIn>
        <FadeIn><Education /></FadeIn>
        <FadeIn><FAQ /></FadeIn>
        <Contact />
      </main>
      <Footer />
    </>
  )
}
