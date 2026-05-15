'use client'

import { useState } from 'react'
import FadeIn from './FadeIn'

function EnvelopeIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  )
}

function LinkedInIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}

function GitHubIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  )
}

function CopyIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
      <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
    </svg>
  )
}

function CheckIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  )
}

const EMAIL = 'iroc.niel123@gmail.com'

const links = [
  {
    icon: <LinkedInIcon />,
    label: 'LinkedIn',
    value: 'linkedin.com/in/niño-niel-iroc',
    href: 'https://www.linkedin.com/in/ni%C3%B1o-niel-iroc-446823250/',
  },
  {
    icon: <GitHubIcon />,
    label: 'GitHub',
    value: 'github.com/IrocNinoNiel',
    href: 'https://github.com/IrocNinoNiel?tab=repositories',
  },
]

export default function Contact() {
  const [copied, setCopied] = useState(false)

  function copyEmail(e: React.MouseEvent) {
    e.preventDefault()
    navigator.clipboard.writeText(EMAIL).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    })
  }

  return (
    <section id="contact" className="py-24 bg-slate-50 dark:bg-slate-900">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <FadeIn>
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-3">
            Let&apos;s Work Together
          </h2>
          <p className="text-slate-500 dark:text-slate-400 mb-12 max-w-md mx-auto">
            Open to new opportunities. Reach out through any of the channels below.
          </p>
        </FadeIn>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto w-full">
          {/* Email card */}
          <FadeIn delay={0} className="h-full">
            <a
              href={`mailto:${EMAIL}`}
              className="flex items-center gap-4 px-5 py-5 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl hover:border-indigo-400 dark:hover:border-indigo-500 hover:shadow-md transition-all group text-left w-full h-full"
            >
              <span className="text-indigo-600 dark:text-indigo-400 group-hover:scale-110 transition-transform shrink-0">
                <EnvelopeIcon />
              </span>
              <div className="min-w-0 flex-1">
                <p className="text-xs text-slate-400 dark:text-slate-500 font-medium uppercase tracking-wide mb-0.5">
                  Email
                </p>
                <p className="text-sm text-slate-700 dark:text-slate-300 font-medium leading-tight truncate">
                  {EMAIL}
                </p>
              </div>
              <button
                onClick={copyEmail}
                aria-label="Copy email address"
                className={`shrink-0 p-1.5 rounded-lg transition-colors ${
                  copied
                    ? 'text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/30'
                    : 'text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-slate-100 dark:hover:bg-slate-700'
                }`}
              >
                {copied ? <CheckIcon /> : <CopyIcon />}
              </button>
            </a>
          </FadeIn>

          {/* LinkedIn + GitHub */}
          {links.map(({ icon, label, value, href }, i) => (
            <FadeIn key={label} delay={(i + 1) * 100} className="h-full">
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 px-5 py-5 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl hover:border-indigo-400 dark:hover:border-indigo-500 hover:shadow-md transition-all group text-left w-full h-full"
              >
                <span className="text-indigo-600 dark:text-indigo-400 group-hover:scale-110 transition-transform shrink-0">
                  {icon}
                </span>
                <div className="min-w-0">
                  <p className="text-xs text-slate-400 dark:text-slate-500 font-medium uppercase tracking-wide mb-0.5">
                    {label}
                  </p>
                  <p className="text-sm text-slate-700 dark:text-slate-300 font-medium leading-tight truncate">
                    {value}
                  </p>
                </div>
              </a>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
