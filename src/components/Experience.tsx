export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-slate-50 dark:bg-slate-900">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-3">Experience</h2>
        <p className="text-slate-500 dark:text-slate-400 mb-12">Where I&apos;ve worked and what I&apos;ve built.</p>
        <div className="relative pl-8 border-l-2 border-slate-200 dark:border-slate-800">
          <div className="absolute -left-2 top-1 w-4 h-4 rounded-full bg-indigo-600 dark:bg-indigo-500 border-2 border-white dark:border-slate-900" />
          <div>
            <div className="flex flex-col md:flex-row md:items-baseline md:justify-between mb-1 gap-1">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Software Engineer</h3>
              <span className="text-sm text-slate-400 dark:text-slate-500 shrink-0">2021 &ndash; Present</span>
            </div>
            <p className="text-indigo-600 dark:text-indigo-400 font-medium mb-5">Syntactics Inc.</p>
            <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              <li className="flex gap-2">
                <span className="text-indigo-400 mt-0.5 shrink-0">&#8212;</span>
                Developed and maintained full-stack web applications for enterprise clients in finance, healthcare, and financial services.
              </li>
              <li className="flex gap-2">
                <span className="text-indigo-400 mt-0.5 shrink-0">&#8212;</span>
                Built and integrated RESTful APIs using Laravel, Node.js/Express, and Spring Boot.
              </li>
              <li className="flex gap-2">
                <span className="text-indigo-400 mt-0.5 shrink-0">&#8212;</span>
                Created responsive front-end interfaces with React.js and Vue.js.
              </li>
              <li className="flex gap-2">
                <span className="text-indigo-400 mt-0.5 shrink-0">&#8212;</span>
                Collaborated with cross-functional teams to deliver scalable solutions on schedule.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
