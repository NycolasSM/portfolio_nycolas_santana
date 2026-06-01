import { FiGithub, FiExternalLink } from 'react-icons/fi'

type Project = {
  title: string
  description: string
  tags: string[]
  image: string
  github: string
  live?: string
  featured?: boolean
}

const projects: Project[] = [
  {
    title: 'Spotify Clone',
    description:
      'Clone funcional do Spotify consumindo a API oficial. Autenticação OAuth, listagem de playlists, player com controles e busca em tempo real.',
    tags: ['Next.js', 'TypeScript', 'Spotify API', 'Tailwind'],
    image: 'https://raw.githubusercontent.com/NycolasSM/assets/main/preview_spotify_clone.webp',
    github: 'https://github.com/NycolasSM/Spotify_Clone_NextJs',
    featured: true,
  },
  {
    title: 'Netflix Clone',
    description:
      'Clone da Netflix consumindo a API do TMDB. Listagem de filmes por categoria, detalhes e trailer integrado.',
    tags: ['React', 'JavaScript', 'TMDB API', 'CSS'],
    image: 'https://camo.githubusercontent.com/6a4ccffbeeab7b07d65776148e8ed3ce7f6c0c6086ecaa2192f8f88dbcae6ede/68747470733a2f2f692e696d6775722e636f6d2f4670314452706d2e706e67',
    github: 'https://github.com/NycolasSM/Netflix_Clone',
    featured: true,
  },
  {
    title: 'Vercel Homepage Clone',
    description:
      'Recriação fiel da homepage da Vercel com layout responsivo e animações. Foco em pixel-perfect e performance.',
    tags: ['React', 'SCSS', 'JavaScript'],
    image: 'https://raw.githubusercontent.com/NycolasSM/assets/main/preview_vercel_homepage_clone.webp',
    github: 'https://github.com/NycolasSM/Vercel_HomePage_Clone',
    featured: true,
  },
  {
    title: 'Be The Hero (Cypress)',
    description:
      'Projeto de testes automatizados end-to-end com Cypress na aplicação Be The Hero. Relatórios gerados com Allure.',
    tags: ['Cypress', 'JavaScript', 'Allure', 'E2E Testing'],
    image: 'https://raw.githubusercontent.com/NycolasSM/assets/main/preview_be_the_hero.webp',
    github: 'https://github.com/NycolasSM/be_the_hero_cypress',
  },
  {
    title: 'Company Landing Page',
    description:
      'Landing page corporativa responsiva com Bootstrap, focando em boas práticas de UI/UX e acessibilidade.',
    tags: ['Bootstrap', 'HTML5', 'CSS3', 'JavaScript'],
    image: 'https://raw.githubusercontent.com/NycolasSM/assets/main/preview_company_landpage.webp',
    github: 'https://github.com/NycolasSM/Company_LandPage_Bootstrap',
    live: 'https://company-land-page-bootstrap.vercel.app/',
  },
]

const Projects = () => {
  const featured = projects.filter((p) => p.featured)
  const others = projects.filter((p) => !p.featured)

  return (
    <section id="projects" className="py-24 bg-[#080810]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-16">
          <p className="text-indigo-400 text-sm font-semibold uppercase tracking-widest mb-3">
            Portfólio
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Projetos em Destaque
          </h2>
        </div>

        {/* Featured grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-6">
          {featured.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>

        {/* Others */}
        <div className="grid md:grid-cols-2 gap-6">
          {others.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}

const ProjectCard = ({ project }: { project: Project }) => (
  <div className="group bg-[#0f0f1a] border border-[#1e1e30] rounded-2xl overflow-hidden hover:border-indigo-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/5 flex flex-col">
    {/* Image */}
    <div className="relative h-44 overflow-hidden bg-[#13131f]">
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
        onError={(e) => {
          (e.target as HTMLImageElement).style.display = 'none'
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f1a] via-transparent to-transparent" />
    </div>

    {/* Content */}
    <div className="p-5 flex flex-col flex-1">
      <h3 className="text-white font-semibold text-base mb-2">{project.title}</h3>
      <p className="text-slate-400 text-sm leading-relaxed flex-1 mb-4">
        {project.description}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-1.5 mb-5">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="text-xs px-2 py-0.5 rounded bg-[#1a1a2e] text-slate-400 border border-[#2a2a40]"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Links */}
      <div className="flex items-center gap-3 mt-auto">
        <a
          href={project.github}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-white transition-colors font-medium"
        >
          <FiGithub size={14} />
          Código
        </a>
        {project.live && (
          <a
            href={project.live}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 text-xs text-indigo-400 hover:text-indigo-300 transition-colors font-medium"
          >
            <FiExternalLink size={14} />
            Demo ao vivo
          </a>
        )}
      </div>
    </div>
  </div>
)

export default Projects
