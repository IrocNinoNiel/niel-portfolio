'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'

const TITLE = 'Software Developer'

export default function Hero() {
  const [displayTitle, setDisplayTitle] = useState('')
  const [done, setDone] = useState(false)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setDisplayTitle(TITLE)
      setDone(true)
      return
    }
    let i = 0
    const timer = setInterval(() => {
      i++
      setDisplayTitle(TITLE.slice(0, i))
      if (i >= TITLE.length) {
        setDone(true)
        clearInterval(timer)
      }
    }, 60)
    return () => clearInterval(timer)
  }, [])

  return (
    <section id="hero" className="min-h-screen flex items-center pt-16 bg-white dark:bg-slate-950">
      <div className="max-w-5xl mx-auto px-6 py-20 w-full">
        <div className="flex flex-col-reverse md:flex-row items-center gap-10 md:gap-16">

          {/* Text */}
          <div className="flex-1 text-center md:text-left">
            <p className="text-indigo-600 dark:text-indigo-400 font-medium mb-4 text-sm tracking-wider uppercase">
              Hi, I&apos;m
            </p>
            <h1 className="text-5xl md:text-6xl font-bold text-slate-900 dark:text-white mb-4 tracking-tight leading-tight">
              Ni&ntilde;o Niel Iroc
            </h1>
            <h2 className="text-xl md:text-2xl font-medium text-slate-400 dark:text-slate-500 mb-6 min-h-[2rem]">
              {displayTitle}
              {!done && (
                <span className="inline-block w-0.5 h-5 bg-indigo-500 dark:bg-indigo-400 ml-0.5 align-middle animate-pulse" />
              )}
            </h2>
            <p className="text-base text-slate-600 dark:text-slate-400 max-w-xl mb-10 leading-relaxed mx-auto md:mx-0">
              Software Developer based in the Philippines, open to remote work. I build
              production-grade web systems for finance and healthcare clients - from database schema
              to deployed UI. 4 years at Syntactics Inc. shipping enterprise software used daily by
              real teams.
            </p>
            <div className="flex flex-wrap gap-3 justify-center md:justify-start">
              <a
                href="#projects"
                className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 active:scale-95 text-white rounded-lg font-medium transition-all duration-150"
              >
                View Projects
              </a>
              <a
                href="/resume.pdf"
                download
                className="px-6 py-3 border border-slate-200 dark:border-slate-700 hover:border-indigo-400 dark:hover:border-indigo-600 active:scale-95 text-slate-900 dark:text-white rounded-lg font-medium transition-all duration-150"
              >
                Download CV
              </a>
            </div>
          </div>

          {/* Photo */}
          <div className="shrink-0">
            <div className="relative w-44 h-44 md:w-60 md:h-60 rounded-full overflow-hidden ring-4 ring-indigo-100 dark:ring-indigo-900">
              <Image
                src="/profile.jpg"
                alt="Niño Niel Iroc"
                fill
                className="object-cover object-[center_35%]"
                priority
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
