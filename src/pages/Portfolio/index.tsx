import "./style.css";

import Header from "../../components/Header";
import Hero from "../../components/Hero";
import SectionTitle from "../../components/SectionTitle";
import TechnologyBadge from "../../components/TechnologyBadge";
import ProjectsCard from "../../components/ProjectsCard/";

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
              Desenvolvedor Web com experiência em diversos projetos próprios e
              de afins didáticos, me considero uma pessoa dedicada e que busca
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
                <p>Experiencia estudando</p>
              </div>
              <div className="about__me__card commits_count">
                <p>340+</p>
                <p>Commits no GitHub</p>
              </div>
              <div className="about__me__card passion__percent">
                <p>100%</p>
                <p>Paixão</p>
              </div>
            </div>
          </div>
          <h3 className="my__technologies__stack">
            Conhecimento nas Tecnologias
          </h3>
          <div className="technologies__badges">
            <TechnologyBadge link="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB" />
            <TechnologyBadge link="https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E" />
            <TechnologyBadge link="https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=green" />
            <TechnologyBadge link="https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white" />
            <TechnologyBadge link="https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white" />
            <TechnologyBadge link="https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white" />
            <TechnologyBadge link="https://img.shields.io/badge/-cypress-%23E5E5E5?style=for-the-badge&logo=cypress&logoColor=058a5e" />
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
          <br />
          <div className="projects__cards">
            <div className="gallery">
              <ProjectsCard title="" gif="" link="" description="" />
              <ProjectsCard title="" gif="" link="" description="" />
              <ProjectsCard title="" gif="" link="" description="" />
              <ProjectsCard title="" gif="" link="" description="" />
              <ProjectsCard title="" gif="" link="" description="" />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default Portfolio;
