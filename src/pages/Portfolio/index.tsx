import "./style.css";

import Header from "../../components/Header";
import Hero from "../../components/Hero";
import SectionTitle from "../../components/SectionTitle";
import TechnologyBadge from "../../components/TechnologyBadge";
import ProjectsCard from "../../components/ProjectsCard/";
import Footer from "../../components/Footer";

function Portfolio() {
  return (
    <>
      <Header />
      <Hero />
      <h2 className="portfolio__intro">
        Aprender <br /> Melhorar <br /> Se Superar
      </h2>
      <main>
        <section className="portfolio__section" id="aboutMe">
          <SectionTitle
            title="Introdução"
            description="Falando um pouco sobre mim."
            maxWidth={600}
          />
          <div className="about__me__container">
            <span>
              Desenvolvedor FrontEnd com experiência em BackEnd, possuo
              experiência com diversos projetos proficionais, próprios e de
              afins didáticos, me considero uma pessoa dedicada e que busca
              evoluir e aprender mais a cada dia, busco sempre dar o meu melhor
              e me dedicar para que eu possa ser um grande profissional na área,
              buscando sempre estar pronto para superar qualquer desafio!
            </span>
            <div className="about__me__cards">
              <div className="about__me__card projects__count">
                <p>20+</p>
                <p>Projetos</p>
              </div>
              <div className="about__me__card years__experience">
                <p>
                  1+ <span style={{ fontSize: "40px" }}>Ano</span>
                </p>
                <p>Experiência</p>
              </div>
              <div className="about__me__card commits_count">
                <p>1.200+</p>
                <p>Commits no GitHub</p>
              </div>
              <div className="about__me__card passion__percent">
                <p>100%</p>
                <p>Paixão</p>
              </div>
            </div>
          </div>
          <h2 className="my__educational__experience__title">
            Experiências Educacionais
          </h2>
          <div className="my__educational__experience">
            <div className="college__formation">
              <h2>Faculdade</h2>
              <img
                src="https://play-lh.googleusercontent.com/VzUfEzZ2q-y6lWl9liKGTxg7d6Ym5i7yYaHNHZogN8VDrx0RJJ6055mRVUzNMqT7ci9v"
                alt=""
              />
              <div className="college__formation__info">
                <h3>UNIP</h3>
                <span>Análise e desenvolvimento de Sistemas</span>
                <p>(Trancado) 2º- semestre </p>
              </div>
            </div>
            <div className="glow__bar"></div>
            <div className="courses">
              <h2>Cursos</h2>
              <div className="courses__list">
                <div className="course">
                  <img
                    src="https://s3.amazonaws.com/thinkific-import/220759/AaQOupKTMCZDEzzmIaSR_SO-LOGO-300.png"
                    alt=""
                  />
                  <div className="course__info">
                    <span>Fundamentos Js</span>
                    <span>Cod3r</span>
                  </div>
                </div>
                <div className="course">
                  <img
                    src="https://s3.amazonaws.com/thinkific-import/220759/AaQOupKTMCZDEzzmIaSR_SO-LOGO-300.png"
                    alt=""
                  />
                  <div className="course__info">
                    <span>Web Moderno</span>
                    <span>Cod3r</span>
                  </div>
                </div>
                <div className="course">
                  <img
                    src="data:image/png;base64,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"
                    alt=""
                  />
                  <div className="course__info">
                    <span>Discovery</span>
                    <span>RocketSeat</span>
                  </div>
                </div>
                <div className="course">
                  <img
                    src="https://www.jidc.com.br/wp-content/uploads/2020/11/cel-centro-de-linguas-sp-inscricoes-para-cursos-2017.jpg"
                    alt=""
                  />
                  <div className="course__info">
                    <span>Ingles</span>
                    <span>Centro de Línguas</span>
                  </div>
                </div>
                <div className="course">
                  <img
                    src="https://mir-s3-cdn-cf.behance.net/projects/202/b3e2ba120381331.Y3JvcCwxMDgwLDg0NCwwLDI1MQ.png"
                    alt=""
                  />
                  <div className="course__info">
                    <span>Maratona NLW 1</span>
                    <span>RocketSeat</span>
                  </div>
                </div>
                <div className="course">
                  <img
                    src="https://mir-s3-cdn-cf.behance.net/projects/202/b3e2ba120381331.Y3JvcCwxMDgwLDg0NCwwLDI1MQ.png"
                    alt=""
                  />
                  <div className="course__info">
                    <span>Maratona NLW 2</span>
                    <span>RocketSeat</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <h3 className="my__technologies__stack">
            Conhecimento nas Tecnologias
          </h3>
          <div className="technologies__badges">
            <TechnologyBadge link="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB" />
            <TechnologyBadge link="https://img.shields.io/badge/React_Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" />
            <TechnologyBadge link="https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E" />
            <TechnologyBadge link="https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=green" />
            <TechnologyBadge link="https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white" />
            <TechnologyBadge link="https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white" />
            <TechnologyBadge link="https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white" />
            <TechnologyBadge link="https://img.shields.io/badge/-cypress-%23E5E5E5?style=for-the-badge&logo=cypress&logoColor=058a5e" />
            <TechnologyBadge link="https://img.shields.io/badge/WordPress-%23117AC9.svg?style=for-the-badge&logo=WordPress&logoColor=white" />
            <TechnologyBadge link="https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white" />
            <TechnologyBadge link="https://img.shields.io/badge/bootstrap-%23563D7C.svg?style=for-the-badge&logo=bootstrap&logoColor=white" />
            <TechnologyBadge link="https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white" />
            <TechnologyBadge link="https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white" />
            <TechnologyBadge link="https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white" />
            <TechnologyBadge link="https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white" />
            <TechnologyBadge link="https://img.shields.io/badge/GULP-%23CF4647.svg?style=for-the-badge&logo=gulp&logoColor=white" />
            <TechnologyBadge link="https://img.shields.io/badge/-React%20Query-FF4154?style=for-the-badge&logo=react%20query&logoColor=white" />
            <TechnologyBadge link="https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white" />
            <TechnologyBadge link="https://img.shields.io/badge/mysql-%2300f.svg?style=for-the-badge&logo=mysql&logoColor=white" />
            <TechnologyBadge link="https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB" />
            <TechnologyBadge link="https://img.shields.io/badge/figma-%23F24E1E.svg?style=for-the-badge&logo=figma&logoColor=white" />
            <TechnologyBadge link="https://img.shields.io/badge/GULP-%23CF4647.svg?style=for-the-badge&logo=gulp&logoColor=white" />
            <TechnologyBadge link="https://img.shields.io/badge/vuejs-%2335495e.svg?style=for-the-badge&logo=vuedotjs&logoColor=%234FC08D" />
            <TechnologyBadge link="https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white" />
            <TechnologyBadge link="https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white" />
            <TechnologyBadge link="https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white" />
            <TechnologyBadge link="https://img.shields.io/badge/heroku-%23430098.svg?style=for-the-badge&logo=heroku&logoColor=white" />
            <TechnologyBadge link="https://img.shields.io/badge/unity-%23000000.svg?style=for-the-badge&logo=unity&logoColor=white" />
            <TechnologyBadge link="https://img.shields.io/badge/-Stackoverflow-FE7A16?style=for-the-badge&logo=stack-overflow&logoColor=white" />
          </div>
        </section>
        <section className="portfolio__section" id="projects">
          <br />
          <br />
          <SectionTitle
            title="Projetos"
            description="Alguns dos projetos desenvolvidos.."
            maxWidth={600}
          />
          <div className="projects__cards">
            <div className="gallery">
              <ProjectsCard
                title="Company Landpage"
                cardPreview="https://raw.githubusercontent.com/NycolasSM/assets/main/preview_company_landpage.webp"
                link="https://github.com/NycolasSM/Company_LandPage_Bootstrap"
                livePreview="https://company-land-page-bootstrap.vercel.app/"
                description="Projeto realizado afins de relembrar conceitos e conhecimentos sobre Bootstrap e conhecer mais ideis de layouts UI e UX"
                isChoosen={false}
              />
              <ProjectsCard
                title="Vercel Clone "
                cardPreview="https://raw.githubusercontent.com/NycolasSM/assets/main/preview_vercel_homepage_clone.webp"
                link="https://github.com/NycolasSM/Vercel_HomePage_Clone"
                description="Um clone da homePage da Vercel feito com ReactJs e SCSS"
                isChoosen={false}
              />
              <ProjectsCard
                title="Spotify Clone"
                cardPreview="https://raw.githubusercontent.com/NycolasSM/assets/main/preview_spotify_clone.webp"
                link="https://github.com/NycolasSM/Spotify_Clone_NextJs"
                description="Spotify Clone with NextJs and using the Spotify API"
                isChoosen={false}
              />
              <ProjectsCard
                title="Be the Hero (Cypress)"
                cardPreview="https://raw.githubusercontent.com/NycolasSM/assets/main/preview_be_the_hero.webp"
                link="https://github.com/NycolasSM/be_the_hero_cypress"
                description="Projeto realizado para praticar e aprender sobre testes automatizados com o Cypress e gerando relatórios com Allure"
                backgroundSize={400}
                backgroundPosition="center"
                isChoosen={false}
              />
              <ProjectsCard
                title="Netflix Clone"
                cardPreview="https://camo.githubusercontent.com/6a4ccffbeeab7b07d65776148e8ed3ce7f6c0c6086ecaa2192f8f88dbcae6ede/68747470733a2f2f692e696d6775722e636f6d2f4670314452706d2e706e67"
                link="https://github.com/NycolasSM/Netflix_Clone"
                description="Um um clone da versão atual da Netflix consumindo uma API real feito com ReactJs"
                backgroundSize={620}
                backgroundPosition="center"
                isChoosen={false}
              />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Portfolio;
