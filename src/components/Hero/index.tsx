import { FiGithub, FiLinkedin, FiMail, FiArrowDown } from 'react-icons/fi'

const Hero = () => {
  return (
    <section
      id="start"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#080810]"
    >
      {/* Background blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-indigo-600/20 rounded-full blur-3xl animate-blob" />
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-violet-600/15 rounded-full blur-3xl animate-blob animation-delay-2000" />
        <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-cyan-600/10 rounded-full blur-3xl animate-blob animation-delay-4000" />
      </div>

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(#818cf8 1px, transparent 1px), linear-gradient(to right, #818cf8 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-20 pb-12">
        <div className="flex flex-col items-center text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-sm font-medium mb-8">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            Disponível para novas oportunidades
          </div>

          {/* Name */}
          <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight mb-4 leading-tight">
            Nycolas{' '}
            <span className="gradient-text">Santana</span>
          </h1>

          {/* Role */}
          <h2 className="text-xl md:text-2xl font-semibold text-slate-300 mb-6">
            Desenvolvedor{' '}
            <span className="text-indigo-400">Web</span> &{' '}
            <span className="text-violet-400">Mobile</span>
          </h2>

          {/* Description */}
          <p className="max-w-2xl text-slate-400 text-base md:text-lg leading-relaxed mb-10">
            Especialista em <span className="text-slate-200 font-medium">React</span>,{' '}
            <span className="text-slate-200 font-medium">Next.js</span> e{' '}
            <span className="text-slate-200 font-medium">React Native</span> com mais de 3 anos de experiência
            construindo interfaces modernas e aplicações escaláveis. Atualmente na{' '}
            <span className="text-indigo-400 font-medium">Origin9</span>.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
            <a
              href="#projects"
              className="px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold transition-all duration-200 hover:scale-105 hover:shadow-lg hover:shadow-indigo-500/25"
            >
              Ver Projetos
            </a>
            <a
              href="#contact"
              className="px-6 py-3 rounded-xl border border-[#1e1e30] hover:border-indigo-500/50 text-slate-300 hover:text-white font-semibold transition-all duration-200 hover:scale-105 bg-[#0f0f1a]"
            >
              Entre em Contato
            </a>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-5 mb-16">
            <a
              href="https://github.com/NycolasSM"
              target="_blank"
              rel="noreferrer"
              className="text-slate-500 hover:text-white transition-colors duration-200"
              aria-label="GitHub"
            >
              <FiGithub size={22} />
            </a>
            <a
              href="https://www.linkedin.com/in/nycolassm/"
              target="_blank"
              rel="noreferrer"
              className="text-slate-500 hover:text-white transition-colors duration-200"
              aria-label="LinkedIn"
            >
              <FiLinkedin size={22} />
            </a>
            <a
              href="mailto:nycolassantana00@gmail.com"
              className="text-slate-500 hover:text-white transition-colors duration-200"
              aria-label="Email"
            >
              <FiMail size={22} />
            </a>
          </div>

          {/* Scroll indicator */}
          <a
            href="#about"
            className="flex flex-col items-center gap-2 text-slate-600 hover:text-slate-400 transition-colors"
          >
            <span className="text-xs font-medium tracking-widest uppercase">Scroll</span>
            <FiArrowDown size={16} className="animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero
