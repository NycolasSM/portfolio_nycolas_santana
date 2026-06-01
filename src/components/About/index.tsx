const stats = [
  { value: '3+', label: 'Anos de Experiência', color: 'text-indigo-400' },
  { value: '40+', label: 'Projetos Desenvolvidos', color: 'text-violet-400' },
  { value: '8+', label: 'Cursos e Certificações', color: 'text-cyan-400' },
  { value: '100%', label: 'Dedicação', color: 'text-emerald-400' },
]

const About = () => {
  return (
    <section id="about" className="py-24 bg-[#080810]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div className="mb-16">
          <p className="text-indigo-400 text-sm font-semibold uppercase tracking-widest mb-3">
            Sobre mim
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Quem sou eu
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div>
            <p className="text-slate-400 text-base leading-relaxed mb-5">
              Desenvolvedor Web e Mobile com mais de{' '}
              <span className="text-slate-200 font-medium">3 anos de experiência</span>,
              especializado em front-end com foco em React, Next.js e React Native.
              Tenho sólido conhecimento em TypeScript e Node.js, e estou em constante
              aperfeiçoamento no back-end.
            </p>
            <p className="text-slate-400 text-base leading-relaxed mb-5">
              Atualmente faço parte do time da{' '}
              <span className="text-indigo-400 font-medium">Origin9</span>, onde
              contribuo para o desenvolvimento de soluções robustas e escaláveis.
              Apaixonado pelo que faço, sempre busco entregar o melhor trabalho
              possível e estar preparado para qualquer desafio.
            </p>
            <p className="text-slate-400 text-base leading-relaxed">
              Graduando em <span className="text-slate-200 font-medium">Análise e Desenvolvimento de Software</span> pela
              Fatec, com experiência em projetos reais e comprometimento com boas práticas e código de qualidade.
            </p>

            <div className="flex gap-4 mt-8">
              <a
                href="https://github.com/NycolasSM"
                target="_blank"
                rel="noreferrer"
                className="px-5 py-2.5 rounded-lg border border-[#1e1e30] hover:border-indigo-500/50 text-slate-300 hover:text-white text-sm font-medium transition-all duration-200"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/nycolassm/"
                target="_blank"
                rel="noreferrer"
                className="px-5 py-2.5 rounded-lg border border-[#1e1e30] hover:border-indigo-500/50 text-slate-300 hover:text-white text-sm font-medium transition-all duration-200"
              >
                LinkedIn
              </a>
            </div>
          </div>

          {/* Stats grid */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="bg-[#0f0f1a] border border-[#1e1e30] rounded-2xl p-6 flex flex-col gap-2 hover:border-indigo-500/30 transition-colors duration-200"
              >
                <span className={`text-4xl font-extrabold ${stat.color}`}>
                  {stat.value}
                </span>
                <span className="text-slate-400 text-sm font-medium">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
