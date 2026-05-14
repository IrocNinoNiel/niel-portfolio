export default function Footer() {
  return (
    <footer className="py-10 border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950">
      <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-slate-400 dark:text-slate-500">
          &copy; {new Date().getFullYear()} Ni&ntilde;o Niel Iroc
        </p>
        <div className="flex items-center gap-6">
          <a
            href="mailto:iroc.niel123@gmail.com"
            className="text-sm text-slate-500 hover:text-indigo-600 dark:text-slate-400 dark:hover:text-indigo-400 transition-colors"
          >
            Email
          </a>
          <a
            href="https://www.linkedin.com/in/ni%C3%B1o-niel-iroc-446823250/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-slate-500 hover:text-indigo-600 dark:text-slate-400 dark:hover:text-indigo-400 transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/IrocNinoNiel?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-slate-500 hover:text-indigo-600 dark:text-slate-400 dark:hover:text-indigo-400 transition-colors"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  )
}
