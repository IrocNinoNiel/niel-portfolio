export default function About() {
  return (
    <section id="about" className="py-24 bg-white dark:bg-slate-950">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-3">About</h2>
        <p className="text-slate-500 dark:text-slate-400 mb-10">Who I am and how I work.</p>
        <div className="max-w-2xl space-y-4 text-slate-600 dark:text-slate-400 leading-relaxed">
          <p>
            I am a Full Stack Developer based in Cagayan de Oro, Philippines, with 4 years of
            professional experience building enterprise web systems at Syntactics Inc. I am open to
            remote work and have been working in a structured, team-based software development
            environment since 2021.
          </p>
          <p>
            I work across the entire stack - designing relational databases, building REST APIs, and
            shipping responsive frontends. My projects have served real users in the finance and
            healthcare sectors, handling workflows like general ledger management, loan lifecycle
            processing, and patient record coordination.
          </p>
          <p>
            I am comfortable owning a feature from requirements to deployment and collaborating
            closely with project managers, designers, and QA teams to deliver on schedule.
          </p>
        </div>
      </div>
    </section>
  )
}
