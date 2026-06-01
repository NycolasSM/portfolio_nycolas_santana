import { FiGithub, FiLinkedin, FiMail, FiMapPin } from 'react-icons/fi'

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-[#080810]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-16">
          <p className="text-indigo-400 text-sm font-semibold uppercase tracking-widest mb-3">
            Contato
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Vamos conversar?
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <div>
            <p className="text-slate-400 text-base leading-relaxed mb-8">
              Estou aberto a novas oportunidades, projetos freelance ou apenas uma
              boa conversa sobre tecnologia. Me manda uma mensagem — responderei o
              mais breve possível!
            </p>

            <div className="flex flex-col gap-4">
              <a
                href="mailto:nycolassantana00@gmail.com"
                className="flex items-center gap-3 text-slate-400 hover:text-white transition-colors group"
              >
                <span className="w-10 h-10 rounded-xl bg-[#0f0f1a] border border-[#1e1e30] flex items-center justify-center group-hover:border-indigo-500/40 transition-colors">
                  <FiMail size={18} />
                </span>
                <span className="text-sm">nycolassantana00@gmail.com</span>
              </a>

              <div className="flex items-center gap-3 text-slate-400">
                <span className="w-10 h-10 rounded-xl bg-[#0f0f1a] border border-[#1e1e30] flex items-center justify-center">
                  <FiMapPin size={18} />
                </span>
                <span className="text-sm">Brasil</span>
              </div>
            </div>

            <div className="flex gap-4 mt-8">
              <a
                href="https://github.com/NycolasSM"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-xl bg-[#0f0f1a] border border-[#1e1e30] flex items-center justify-center text-slate-400 hover:text-white hover:border-indigo-500/40 transition-all"
                aria-label="GitHub"
              >
                <FiGithub size={18} />
              </a>
              <a
                href="https://www.linkedin.com/in/nycolassm/"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-xl bg-[#0f0f1a] border border-[#1e1e30] flex items-center justify-center text-slate-400 hover:text-white hover:border-indigo-500/40 transition-all"
                aria-label="LinkedIn"
              >
                <FiLinkedin size={18} />
              </a>
            </div>
          </div>

          {/* Right — CTA card */}
          <div className="bg-[#0f0f1a] border border-[#1e1e30] rounded-2xl p-8 relative overflow-hidden">
            {/* Glow */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-indigo-600/20 rounded-full blur-2xl pointer-events-none" />

            <h3 className="text-white font-bold text-xl mb-3 relative">
              Disponível para trabalhar 🚀
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed mb-6 relative">
              Estou ativamente procurando novas oportunidades como Desenvolvedor
              Front-End / Mobile. Se você tem uma vaga ou projeto interessante,
              adoraria saber mais!
            </p>
            <a
              href="mailto:nycolassantana00@gmail.com?subject=Oportunidade de trabalho"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-sm transition-all duration-200 hover:scale-105 relative"
            >
              <FiMail size={16} />
              Enviar mensagem
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
