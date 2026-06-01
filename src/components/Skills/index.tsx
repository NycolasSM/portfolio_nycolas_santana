type Skill = {
  name: string
  level: 'expert' | 'advanced' | 'intermediate'
}

type SkillCategory = {
  title: string
  icon: string
  skills: Skill[]
}

const categories: SkillCategory[] = [
  {
    title: 'Frontend',
    icon: '🖥',
    skills: [
      { name: 'React', level: 'expert' },
      { name: 'Next.js', level: 'expert' },
      { name: 'TypeScript', level: 'expert' },
      { name: 'JavaScript', level: 'expert' },
      { name: 'TailwindCSS', level: 'advanced' },
      { name: 'Styled Components', level: 'advanced' },
      { name: 'Redux', level: 'advanced' },
      { name: 'HTML5 / CSS3', level: 'expert' },
    ],
  },
  {
    title: 'Mobile',
    icon: '📱',
    skills: [
      { name: 'React Native', level: 'expert' },
      { name: 'Expo', level: 'advanced' },
    ],
  },
  {
    title: 'Backend & Banco',
    icon: '⚙️',
    skills: [
      { name: 'Node.js', level: 'advanced' },
      { name: 'Express.js', level: 'advanced' },
      { name: 'PostgreSQL', level: 'intermediate' },
      { name: 'MongoDB', level: 'intermediate' },
      { name: 'MySQL', level: 'intermediate' },
    ],
  },
  {
    title: 'Ferramentas',
    icon: '🛠',
    skills: [
      { name: 'Git / GitHub', level: 'expert' },
      { name: 'Docker', level: 'intermediate' },
      { name: 'Cypress', level: 'advanced' },
      { name: 'Figma', level: 'advanced' },
      { name: 'Vercel', level: 'advanced' },
      { name: 'ESLint / Prettier', level: 'expert' },
    ],
  },
]

const levelColors: Record<Skill['level'], string> = {
  expert: 'bg-indigo-500/15 text-indigo-400 border-indigo-500/20',
  advanced: 'bg-violet-500/15 text-violet-400 border-violet-500/20',
  intermediate: 'bg-slate-700/50 text-slate-400 border-slate-600/30',
}

const Skills = () => {
  return (
    <section id="skills" className="py-24 bg-[#0a0a12]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-16">
          <p className="text-indigo-400 text-sm font-semibold uppercase tracking-widest mb-3">
            Tecnologias
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Stack & Ferramentas
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat) => (
            <div
              key={cat.title}
              className="bg-[#0f0f1a] border border-[#1e1e30] rounded-2xl p-6 hover:border-indigo-500/30 transition-colors duration-200"
            >
              <div className="flex items-center gap-2 mb-5">
                <span className="text-xl">{cat.icon}</span>
                <h3 className="text-white font-semibold text-sm">{cat.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill.name}
                    className={`text-xs font-medium px-2.5 py-1 rounded-lg border ${levelColors[skill.level]}`}
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Legend */}
        <div className="flex items-center gap-6 mt-8 justify-end">
          {Object.entries(levelColors).map(([level, classes]) => (
            <div key={level} className="flex items-center gap-2">
              <span className={`text-xs font-medium px-2 py-0.5 rounded border ${classes}`}>
                {level === 'expert' ? 'Expert' : level === 'advanced' ? 'Avançado' : 'Intermediário'}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
