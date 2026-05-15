'use client'

import { useState, useEffect, useCallback } from 'react'
import { createPortal } from 'react-dom'

interface Project {
  title: string
  description: string
  outcome: string
  tech: string[]
  role: string
  demoUrl?: string
  githubUrl?: string
  caseStudy?: string
}

const projects: Project[] = [
  {
    title: 'LedgerAI',
    description:
      "RAG-powered financial document Q&A tool. Upload any financial PDF and ask questions in plain English. Pre-loaded with Apple's 2023 10-K for a live demo.",
    outcome:
      'Answers grounded in document content via retrieval-augmented generation using Gemini embeddings and Upstash Vector.',
    tech: ['Next.js', 'Gemini API', 'Upstash Vector', 'Vercel AI SDK'],
    role: 'Full Stack Developer',
    demoUrl: 'https://ledgerai-rho.vercel.app',
    githubUrl: 'https://github.com/IrocNinoNiel/ledgerai',
  },
  {
    title: 'Equipment Tracking Module',
    description:
      'Equipment categories required unlimited depth — but recursive MySQL 8 CTE queries degraded past 8 levels. I identified the bottleneck, researched alternatives, and drove the switch to Amazon Neptune, rebuilding the category layer as a graph on an existing AWS serverless platform.',
    outcome:
      'Traversals across 8+ levels now return in milliseconds with leaner graph queries — replacing recursive CTEs that slowed significantly at depth.',
    tech: ['Node.js', 'Amazon Neptune', 'AWS', 'Serverless'],
    role: 'Full Stack Developer',
    caseStudy: `Problem
An asset management platform needed hierarchical equipment categories — type → sub-type → model → variant — going arbitrarily deep. The initial implementation used MySQL 8 recursive CTEs to traverse the tree. Performance was acceptable at shallow depths but degraded noticeably past 8 levels, creating slow category lookups as the dataset grew.

Approach
I identified the CTE queries as the bottleneck and researched alternatives for hierarchical data at depth. Since the project was already on AWS, Amazon Neptune was the natural fit — a managed graph database purpose-built for relationship traversal. I proposed the switch, designed the graph schema, and migrated the category layer from MySQL to Neptune using Gremlin traversals.

Key Challenge
Translating a relational category table (parent_id foreign keys) into a graph of nodes and edges, while keeping the existing API contract unchanged so the rest of the system required no rewrites.

Outcome
Traversals across 8+ levels now return in milliseconds. Query code became significantly leaner — recursive CTEs replaced by simple graph traversals. The category tree can now grow to arbitrary depth without performance degradation.`,
  },
  {
    title: 'Centralized Accounting System',
    description:
      'Enterprise web application for managing company-wide financial operations including general ledger, journal entries, accounts payable/receivable, budgeting, and automated financial reporting across multiple departments.',
    outcome:
      'Handles GL, AP/AR, and budgeting across 5+ departments for an enterprise financial services client.',
    tech: ['Laravel', 'Vue.js', 'MySQL'],
    role: 'Full Stack Developer',
  },
  {
    title: 'Patient Tracking System',
    description:
      'Healthcare management platform for monitoring patient records, appointments, medical history, and treatment progress - enabling healthcare providers to deliver efficient, coordinated care.',
    outcome:
      'Manages patient records, appointments, and treatment history for clinical staff coordinating day-to-day care.',
    tech: ['React', 'Node.js / Express', 'MySQL'],
    role: 'Full Stack Developer',
  },
  {
    title: 'Lending System',
    description:
      'Financial platform automating the end-to-end loan lifecycle including application intake, credit evaluation, loan disbursement, amortization scheduling, and collections management.',
    outcome:
      'Automates the full loan lifecycle - from application intake to collections - for a financial services client.',
    tech: ['Laravel', 'Vue.js', 'MySQL'],
    role: 'Full Stack Developer',
  },
]

const SECTIONS = ['Problem', 'Approach', 'Key Challenge', 'Outcome']

function parseCaseStudy(text: string) {
  return SECTIONS.map(heading => {
    const regex = new RegExp(`${heading}\\n([\\s\\S]*?)(?=${SECTIONS.map(s => `${s}\\n`).join('|')}|$)`)
    const match = text.match(regex)
    return { heading, body: match ? match[1].trim() : '' }
  }).filter(s => s.body)
}

function CaseStudyModal({
  project,
  onClose,
}: {
  project: Project
  onClose: () => void
}) {
  const handleKey = useCallback(
    (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() },
    [onClose]
  )

  useEffect(() => {
    document.addEventListener('keydown', handleKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleKey)
      document.body.style.overflow = ''
    }
  }, [handleKey])

  const sections = parseCaseStudy(project.caseStudy!)

  return createPortal(
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto rounded-2xl bg-white dark:bg-slate-900 shadow-2xl"
        onClick={e => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 flex items-start justify-between gap-4 bg-white dark:bg-slate-900 px-8 pt-8 pb-4 border-b border-slate-100 dark:border-slate-800">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-indigo-600 dark:text-indigo-400 mb-1">
              Case Study
            </p>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white leading-snug">
              {project.title}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="shrink-0 mt-1 rounded-lg p-1.5 text-slate-400 hover:text-slate-600 hover:bg-slate-100 dark:hover:text-slate-200 dark:hover:bg-slate-800 transition-colors"
            aria-label="Close"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 6 6 18M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Body */}
        <div className="px-8 py-6 flex flex-col gap-6">
          {sections.map(({ heading, body }) => (
            <div key={heading}>
              <h4 className="text-sm font-semibold text-slate-900 dark:text-white mb-2">
                {heading}
              </h4>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                {body}
              </p>
            </div>
          ))}

          {/* Tech stack */}
          <div>
            <h4 className="text-sm font-semibold text-slate-900 dark:text-white mb-2">
              Tech Stack
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.tech.map(t => (
                <span
                  key={t}
                  className="px-2.5 py-1 text-xs bg-indigo-50 dark:bg-indigo-950/50 text-indigo-700 dark:text-indigo-300 border border-indigo-100 dark:border-indigo-900 rounded-full font-medium"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="px-8 pb-8">
          <button
            onClick={onClose}
            className="w-full rounded-xl border border-slate-200 dark:border-slate-700 py-2.5 text-sm font-medium text-slate-600 dark:text-slate-400 hover:border-indigo-400 dark:hover:border-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>,
    document.body
  )
}

export default function Projects() {
  const [activeCase, setActiveCase] = useState<Project | null>(null)

  return (
    <section id="projects" className="py-24 bg-white dark:bg-slate-950">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-3">Projects</h2>
        <p className="text-slate-500 dark:text-slate-400 mb-12">
          A selection of work built at Syntactics Inc.
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          {projects.map(project => (
            <div
              key={project.title}
              className="flex flex-col p-6 border border-slate-200 dark:border-slate-800 rounded-xl bg-slate-50 dark:bg-slate-900 hover:border-indigo-300 dark:hover:border-indigo-700 transition-colors"
            >
              <h3 className="font-semibold text-slate-900 dark:text-white mb-3 leading-snug">
                {project.title}
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-3 leading-relaxed flex-1">
                {project.description}
              </p>
              <p className="text-xs text-indigo-700 dark:text-indigo-300 bg-indigo-50 dark:bg-indigo-950/50 border border-indigo-100 dark:border-indigo-900 rounded-lg px-3 py-2 mb-4 leading-relaxed">
                {project.outcome}
              </p>
              <div className="flex flex-wrap gap-1.5 mb-4">
                {project.tech.map(t => (
                  <span
                    key={t}
                    className="px-2 py-0.5 text-xs bg-indigo-50 dark:bg-indigo-950/50 text-indigo-700 dark:text-indigo-300 border border-indigo-100 dark:border-indigo-900 rounded font-medium"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div className="pt-4 border-t border-slate-200 dark:border-slate-700 flex flex-col gap-3">
                <p className="text-xs font-medium uppercase tracking-widest text-slate-400 dark:text-slate-600">
                  {project.role}
                </p>
                {(project.demoUrl || project.githubUrl || project.caseStudy) && (
                  <div className="flex flex-wrap gap-2">
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-indigo-200 dark:border-indigo-800 bg-indigo-50 dark:bg-indigo-950/40 text-xs font-medium text-indigo-700 dark:text-indigo-300 hover:bg-indigo-100 dark:hover:bg-indigo-900/50 transition-colors"
                      >
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M15 3h6v6M10 14 21 3M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                        </svg>
                        Live demo
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-xs font-medium text-slate-600 dark:text-slate-300 hover:border-slate-300 dark:hover:border-slate-600 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors"
                      >
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                          <path d="M9 18c-4.51 2-5-2-7-2" />
                        </svg>
                        GitHub
                      </a>
                    )}
                    {project.caseStudy && (
                      <button
                        onClick={() => setActiveCase(project)}
                        className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-xs font-medium text-slate-600 dark:text-slate-300 hover:border-indigo-300 dark:hover:border-indigo-600 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                      >
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                          <polyline points="14 2 14 8 20 8" />
                          <line x1="16" y1="13" x2="8" y2="13" />
                          <line x1="16" y1="17" x2="8" y2="17" />
                          <polyline points="10 9 9 9 8 9" />
                        </svg>
                        Case study
                      </button>
                    )}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {activeCase && (
        <CaseStudyModal project={activeCase} onClose={() => setActiveCase(null)} />
      )}
    </section>
  )
}
