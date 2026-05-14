const skillGroups = [
  {
    category: 'Frontend',
    skills: ['React.js', 'Vue.js', 'TypeScript', 'HTML / CSS', 'Tailwind CSS'],
  },
  {
    category: 'Backend',
    skills: ['Laravel (PHP)', 'Node.js / Express', 'Spring Boot (Java)'],
  },
  {
    category: 'Tools & Databases',
    skills: ['MySQL', 'PostgreSQL', 'REST APIs', 'Git', 'Docker'],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-slate-50 dark:bg-slate-900">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-3">Skills</h2>
        <p className="text-slate-500 dark:text-slate-400 mb-12">
          4 years of production experience across the full web stack - frontend frameworks, backend
          APIs, and relational databases. Comfortable owning a feature end-to-end.
        </p>
        <div className="grid md:grid-cols-3 gap-10">
          {skillGroups.map(({ category, skills }) => (
            <div key={category}>
              <h3 className="text-xs font-semibold uppercase tracking-widest text-indigo-600 dark:text-indigo-400 mb-5">
                {category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.map(skill => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-full text-sm text-slate-700 dark:text-slate-300"
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
