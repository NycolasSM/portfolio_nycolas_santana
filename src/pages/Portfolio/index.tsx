import "./style.css";

import Header from "../../components/Header";
import Hero from "../../components/Hero";
import SectionTitle from "../../components/SectionTitle";

function Portfolio() {
  return (
    <>
      <Header />
      <Hero />
      <h2 className="portfolio__intro">
        Aprender <br /> Melhorar <br /> Se Superar
      </h2>
      <main>
        <section className="portfolio__section">
          <SectionTitle title="Introdução" description="Um pouco sobre mim." />
          <div className="about__me__container">
            <span>
              Desenvolvedor Web com experiência em diversos projetos próprios e
              de afins didáticos, me considero uma pessoa dedicada e que busca
              evoluir e aprender mais a cada dia, busco sempre dar o meu melhor
              e me dedicar para que eu possa ser um grande profissional na área,
              buscando sempre estar pronto para superar qualquer desafio!
            </span>
            <div className="about__me__cards">
              <div className="about__me__card"></div>
              <div className="about__me__card"></div>
              <div className="about__me__card"></div>
              <div className="about__me__card"></div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default Portfolio;
