import { useState, useEffect } from 'react'
import { FiMenu, FiX } from 'react-icons/fi'

const navLinks = [
  { label: 'Sobre', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projetos', href: '#projects' },
  { label: 'Formação', href: '#education' },
  { label: 'Contato', href: '#contact' },
]

const Header = () => {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#080810]/90 backdrop-blur-md border-b border-[#1e1e30]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#start" className="font-bold text-xl text-white tracking-tight">
          <span className="gradient-text">NS</span>
          <span className="text-slate-500">.</span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-slate-400 hover:text-white transition-colors duration-200 font-medium"
            >
              {link.label}
            </a>
          ))}
          <a
            href="mailto:nycolassantana00@gmail.com?subject=Contato pelo portfólio"
            className="px-4 py-2 text-sm font-semibold rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white transition-colors duration-200"
          >
            Hire me
          </a>
        </nav>

        <button
          className="md:hidden text-slate-400 hover:text-white"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <FiX size={22} /> : <FiMenu size={22} />}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-[#0f0f1a] border-b border-[#1e1e30] px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-slate-400 hover:text-white transition-colors font-medium"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="mailto:nycolassantana00@gmail.com?subject=Contato pelo portfólio"
            className="px-4 py-2 text-sm font-semibold rounded-lg bg-indigo-600 text-white text-center"
            onClick={() => setMenuOpen(false)}
          >
            Hire me
          </a>
        </div>
      )}
    </header>
  )
}

export default Header
