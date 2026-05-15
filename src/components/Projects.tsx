'use client'

import { useState } from 'react'

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
      'RAG-powered financial document Q&A tool. Upload any financial PDF and ask questions in plain English. Pre-loaded with Apple\'s 2023 10-K for a live demo.',
    outcome: 'Answers grounded in document content via retrieval-augmented generation using Gemini embeddings and Upstash Vector.',
    tech: ['Next.js', 'Gemini API', 'Upstash Vector', 'Vercel AI SDK'],
    role: 'Full Stack Developer',
    demoUrl: 'https://ledgerai-rho.vercel.app',
    githubUrl: 'https://github.com/IrocNinoNiel/ledgerai',
  },
  {
    title: 'Equipment Tracking Module',
    description:
      'Equipment categories required unlimited depth — but recursive MySQL 8 CTE queries degraded past 8 levels. I identified the bottleneck, researched alternatives, and drove the switch to Amazon Neptune, rebuilding the category layer as a graph on an existing AWS serverless platform.',
    outcome: 'Traversals across 8+ levels now return in milliseconds with leaner graph queries — replacing recursive CTEs that slowed significantly at depth.',
    tech: ['Node.js', 'Amazon Neptune', 'AWS', 'Serverless'],
    role: 'Full Stack Developer',
    caseStudy: `**Problem**
An asset management platform needed hierarchical equipment categories — type → sub-type → model → variant — going arbitrarily deep. The initial implementation used MySQL 8 recursive CTEs to traverse the tree. Performance was acceptable at shallow depths but degraded noticeably past 8 levels, creating slow category lookups as the dataset grew.

**Approach**
I identified the CTE queries as the bottleneck and researched alternatives for hierarchical data at depth. Since the project was already on AWS, Amazon Neptune was the natural fit — a managed graph database purpose-built for relationship traversal. I proposed the switch, designed the graph schema, and migrated the category layer from MySQL to Neptune using Gremlin traversals.

**Key Challenge**
Translating a relational category table (parent_id foreign keys) into a graph of nodes and edges, while keeping the existing API contract unchanged so the rest of the system required no rewrites.

**Outcome**
Traversals across 8+ levels now return in milliseconds. Query code became significantly leaner — recursive CTEs replaced by simple graph traversals. The category tree can now grow to arbitrary depth without performance degradation.`,
  },
  {
    title: 'Centralized Accounting System',
    description:
      'Enterprise web application for managing company-wide financial operations including general ledger, journal entries, accounts payable/receivable, budgeting, and automated financial reporting across multiple departments.',
    outcome: 'Handles GL, AP/AR, and budgeting across 5+ departments for an enterprise financial services client.',
    tech: ['Laravel', 'Vue.js', 'MySQL'],
    role: 'Full Stack Developer',
  },
  {
    title: 'Patient Tracking System',
    description:
      'Healthcare management platform for monitoring patient records, appointments, medical history, and treatment progress - enabling healthcare providers to deliver efficient, coordinated care.',
    outcome: 'Manages patient records, appointments, and treatment history for clinical staff coordinating day-to-day care.',
    tech: ['React', 'Node.js / Express', 'MySQL'],
    role: 'Full Stack Developer',
  },
  {
    title: 'Lending System',
    description:
      'Financial platform automating the end-to-end loan lifecycle including application intake, credit evaluation, loan disbursement, amortization scheduling, and collections management.',
    outcome: 'Automates the full loan lifecycle - from application intake to collections - for a financial services client.',
    tech: ['Laravel', 'Vue.js', 'MySQL'],
    role: 'Full Stack Developer',
  },
]

function CaseStudyContent({ text }: { text: string }) {
  return (
    <div className="mt-4 pt-4 border-t border-slate-200 dark:border-slate-700 flex flex-col gap-3">
      {text.split('\n\n').map((block, i) => {
        const boldMatch = block.match(/^\*\*(.+?)\*\*\n([\s\S]+)/)
        if (boldMatch) {
          return (
            <div key={i}>
              <p className="text-xs font-semibold text-slate-900 dark:text-slate-100 mb-1">
                {boldMatch[1]}
              </p>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                {boldMatch[2]}
              </p>
            </div>
          )
        }
        return (
          <p key={i} className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
            {block}
          </p>
        )
      })}
    </div>
  )
}

export default function Projects() {
  const [expanded, setExpanded] = useState<string | null>(null)

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

              <div className="flex items-center justify-between">
                <p className="text-xs text-slate-400 dark:text-slate-600 font-medium uppercase tracking-wide">
                  {project.role}
                </p>
                <div className="flex gap-3 items-center">
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-medium text-indigo-600 dark:text-indigo-400 hover:underline"
                    >
                      Live demo
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-medium text-slate-500 dark:text-slate-400 hover:underline"
                    >
                      GitHub
                    </a>
                  )}
                  {project.caseStudy && (
                    <button
                      onClick={() =>
                        setExpanded(expanded === project.title ? null : project.title)
                      }
                      className="text-xs font-medium text-indigo-600 dark:text-indigo-400 hover:underline"
                    >
                      {expanded === project.title ? 'Close ↑' : 'Case study ↓'}
                    </button>
                  )}
                </div>
              </div>

              {expanded === project.title && project.caseStudy && (
                <CaseStudyContent text={project.caseStudy} />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
