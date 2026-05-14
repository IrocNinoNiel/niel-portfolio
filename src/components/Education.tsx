export default function Education() {
  return (
    <section id="education" className="py-24 bg-white dark:bg-slate-950">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-3">Education</h2>
        <p className="text-slate-500 dark:text-slate-400 mb-12">Academic background.</p>
        <div className="relative pl-8 border-l-2 border-slate-200 dark:border-slate-800">
          <div className="absolute -left-2 top-1 w-4 h-4 rounded-full bg-indigo-600 dark:bg-indigo-500 border-2 border-white dark:border-slate-950" />
          <div>
            <div className="flex flex-col md:flex-row md:items-baseline md:justify-between mb-1 gap-1">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                Bachelor of Science in Information Technology
              </h3>
              <span className="text-sm text-slate-400 dark:text-slate-500 shrink-0">2022</span>
            </div>
            <p className="text-indigo-600 dark:text-indigo-400 font-medium">
              University of Science and Technology of Southern Philippines
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
