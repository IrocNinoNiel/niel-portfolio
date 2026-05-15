const projects = [
  {
    title: 'LedgerAI',
    description:
      'RAG-powered financial document Q&A tool. Upload any financial PDF and ask questions in plain English. Pre-loaded with Apple\'s 2023 10-K for a live demo.',
    outcome: 'Answers grounded in document content via retrieval-augmented generation using Gemini embeddings and Upstash Vector.',
    tech: ['Next.js', 'Gemini API', 'Upstash Vector', 'Vercel AI SDK'],
    role: 'Full Stack Developer',
    demoUrl: 'https://ledgerai.vercel.app',
    githubUrl: 'https://github.com/IrocNinoNiel/ledgerai',
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

export default function Projects() {
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
                {'demoUrl' in project && (
                  <div className="flex gap-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-medium text-indigo-600 dark:text-indigo-400 hover:underline"
                    >
                      Live demo
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-medium text-slate-500 dark:text-slate-400 hover:underline"
                    >
                      GitHub
                    </a>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
