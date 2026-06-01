import { FiGithub, FiLinkedin } from 'react-icons/fi'

const Footer = () => {
  return (
    <footer className="bg-[#0a0a12] border-t border-[#1e1e30] py-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-slate-500 text-sm">
          © {new Date().getFullYear()}{' '}
          <span className="gradient-text font-semibold">Nycolas Santana</span>
          {' '}— Feito com React & TailwindCSS
        </p>

        <div className="flex items-center gap-4">
          <a
            href="https://github.com/NycolasSM"
            target="_blank"
            rel="noreferrer"
            className="text-slate-500 hover:text-white transition-colors"
            aria-label="GitHub"
          >
            <FiGithub size={18} />
          </a>
          <a
            href="https://www.linkedin.com/in/nycolassm/"
            target="_blank"
            rel="noreferrer"
            className="text-slate-500 hover:text-white transition-colors"
            aria-label="LinkedIn"
          >
            <FiLinkedin size={18} />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
