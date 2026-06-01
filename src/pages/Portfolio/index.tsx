import Header from '../../components/Header'
import Hero from '../../components/Hero'
import About from '../../components/About'
import Skills from '../../components/Skills'
import Projects from '../../components/Projects'
import Education from '../../components/Education'
import Contact from '../../components/Contact'
import Footer from '../../components/Footer'

function Portfolio() {
  return (
    <div className="min-h-screen bg-[#080810]">
      <Header />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Education />
      <Contact />
      <Footer />
    </div>
  )
}

export default Portfolio
