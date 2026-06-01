type EducationItem = {
  institution: string
  course: string
  period: string
  type: 'graduation' | 'course'
  logo?: string
}

const items: EducationItem[] = [
  {
    type: 'graduation',
    institution: 'Fatec',
    course: 'Análise e Desenvolvimento de Software',
    period: 'Jan 2023 — Cursando',
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuJ25LeKZczlprgrSgYusMsXe0UUnoEZokBA&s',
  },
  {
    type: 'course',
    institution: 'Full Stack Club',
    course: 'Full-Stack Weekend',
    period: '2023',
    logo: 'https://framerusercontent.com/images/jZcNPKr4g5QxNe4lThualYMok.jpg',
  },
  {
    type: 'course',
    institution: 'Rocketseat',
    course: 'NLW — Next Level Week (1 & 2)',
    period: '2021 — 2022',
    logo: 'https://mir-s3-cdn-cf.behance.net/projects/202/b3e2ba120381331.Y3JvcCwxMDgwLDg0NCwwLDI1MQ.png',
  },
  {
    type: 'course',
    institution: 'Rocketseat',
    course: 'Discovery — Fundamentos Web',
    period: '2021',
    logo: 'https://mir-s3-cdn-cf.behance.net/projects/202/b3e2ba120381331.Y3JvcCwxMDgwLDg0NCwwLDI1MQ.png',
  },
  {
    type: 'course',
    institution: 'Cod3r',
    course: 'Desenvolvimento Web Moderno',
    period: '2022',
    logo: 'https://s3.amazonaws.com/thinkific-import/220759/AaQOupKTMCZDEzzmIaSR_SO-LOGO-300.png',
  },
]

const Education = () => {
  return (
    <section id="education" className="py-24 bg-[#0a0a12]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-16">
          <p className="text-indigo-400 text-sm font-semibold uppercase tracking-widest mb-3">
            Formação
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Educação & Cursos
          </h2>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-indigo-500/50 via-violet-500/30 to-transparent hidden md:block" />

          <div className="flex flex-col gap-6">
            {items.map((item) => (
              <div
                key={`${item.institution}-${item.course}`}
                className="group flex gap-6 md:ml-16 relative"
              >
                {/* Dot */}
                <div className="absolute -left-[2.85rem] top-6 w-3 h-3 rounded-full bg-indigo-500 border-2 border-[#080810] hidden md:block" />

                <div className="flex-1 bg-[#0f0f1a] border border-[#1e1e30] rounded-2xl p-5 hover:border-indigo-500/30 transition-colors duration-200 flex items-center gap-4">
                  {/* Logo */}
                  {item.logo && (
                    <div className="shrink-0 w-12 h-12 rounded-xl overflow-hidden bg-[#1a1a2e] flex items-center justify-center">
                      <img
                        src={item.logo}
                        alt={item.institution}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          (e.target as HTMLImageElement).style.display = 'none'
                        }}
                      />
                    </div>
                  )}

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span
                        className={`text-xs font-semibold px-2 py-0.5 rounded ${
                          item.type === 'graduation'
                            ? 'bg-indigo-500/15 text-indigo-400'
                            : 'bg-violet-500/15 text-violet-400'
                        }`}
                      >
                        {item.type === 'graduation' ? 'Graduação' : 'Curso'}
                      </span>
                    </div>
                    <h3 className="text-white font-semibold text-sm">{item.course}</h3>
                    <p className="text-slate-500 text-xs mt-0.5">
                      {item.institution} · {item.period}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Education
