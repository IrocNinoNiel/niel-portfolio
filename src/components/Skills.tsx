'use client'

import { useEffect, useRef, useState } from 'react'

const skillGroups = [
  {
    category: 'Frontend',
    skills: ['React.js', 'Vue.js', 'TypeScript', 'Tailwind CSS', 'HTML / CSS'],
  },
  {
    category: 'Backend',
    skills: ['Laravel (PHP)', 'Node.js / Express', 'Spring Boot (Java)', 'REST APIs', 'Postman', 'Swagger / OpenAPI'],
  },
  {
    category: 'Databases',
    skills: ['MySQL', 'PostgreSQL', 'Amazon Neptune'],
  },
  {
    category: 'DevOps & Deployment',
    skills: ['Docker', 'Git', 'GitHub', 'GitLab', 'Bitbucket', 'Vercel'],
  },
  {
    category: 'AI & Integrations',
    skills: ['Gemini API', 'Vercel AI SDK', 'RAG', 'Upstash Vector'],
  },
]

// Precompute stagger index per skill (avoids side effects in render)
const skillIndex: Record<string, number> = {}
let _i = 0
skillGroups.forEach(g => g.skills.forEach(s => { skillIndex[s] = _i++ }))

export default function Skills() {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect() } },
      { threshold: 0.1 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="skills" className="py-24 bg-slate-50 dark:bg-slate-900">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-3">Skills</h2>
        <p className="text-slate-500 dark:text-slate-400 mb-12">
          4 years of production experience across the full web stack - frontend frameworks, backend
          APIs, and relational databases. Comfortable owning a feature end-to-end.
        </p>
        <div ref={ref} className="grid md:grid-cols-3 gap-10">
          {skillGroups.map(({ category, skills }) => (
            <div key={category}>
              <h3 className="text-xs font-semibold uppercase tracking-widest text-indigo-600 dark:text-indigo-400 mb-5">
                {category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.map(skill => (
                  <span
                    key={skill}
                    style={{ transitionDelay: visible ? `${skillIndex[skill] * 50}ms` : '0ms' }}
                    className={`px-3 py-1.5 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-full text-sm text-slate-700 dark:text-slate-300 cursor-default
                      hover:scale-105 hover:bg-indigo-50 dark:hover:bg-indigo-950/50 hover:border-indigo-200 dark:hover:border-indigo-800 hover:text-indigo-700 dark:hover:text-indigo-300
                      transition-all duration-300
                      ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
