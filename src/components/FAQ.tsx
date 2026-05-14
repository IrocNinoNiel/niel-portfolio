'use client'

import { useState } from 'react'

const faqs = [
  {
    q: 'Are you open to remote work?',
    a: 'Yes. I am based in Cagayan de Oro, Philippines and am fully open to remote work. I have 4 years of experience in a professional software development environment and am comfortable with async collaboration and remote team workflows.',
  },
  {
    q: 'What industries have you built software for?',
    a: 'I have built production web applications for clients in finance, healthcare, and financial services - specifically an enterprise accounting system, a patient tracking platform, and a loan management system.',
  },
  {
    q: 'What is your primary tech stack?',
    a: 'My primary stack is React.js and Vue.js on the frontend, Laravel (PHP) and Node.js/Express on the backend, and MySQL/PostgreSQL for databases. I also work with Spring Boot (Java), TypeScript, Tailwind CSS, Docker, and REST APIs.',
  },
  {
    q: 'How do you approach a project end-to-end?',
    a: 'I start from the database schema and API design, build out the backend logic and REST endpoints, then develop the frontend UI. I work closely with QA throughout to ensure the delivered feature matches the specification.',
  },
  {
    q: 'Are you available for freelance or contract work?',
    a: 'Yes. I am open to freelance and contract projects, particularly in web application development for business systems such as accounting, HR, inventory, or healthcare management platforms.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section id="faq" className="py-24 bg-white dark:bg-slate-950">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-3">
          Frequently Asked Questions
        </h2>
        <p className="text-slate-500 dark:text-slate-400 mb-12">
          Common questions from recruiters and hiring managers.
        </p>
        <div className="max-w-3xl divide-y divide-slate-200 dark:divide-slate-800">
          {faqs.map(({ q, a }, i) => {
            const isOpen = openIndex === i
            return (
              <div key={q}>
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 py-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="text-base font-semibold text-slate-900 dark:text-white">{q}</span>
                  <span className={`shrink-0 text-indigo-600 dark:text-indigo-400 transition-transform duration-200 ${isOpen ? 'rotate-45' : ''}`}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                      <line x1="12" y1="5" x2="12" y2="19" />
                      <line x1="5" y1="12" x2="19" y2="12" />
                    </svg>
                  </span>
                </button>
                <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}>
                  <p className="pb-5 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{a}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
